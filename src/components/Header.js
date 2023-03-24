import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isToggle } from "../utils/appSlice";
import { SEARCH_API } from "../utils/constant";
import { cacheSearch } from "../utils/searchSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false)
  const dispatch = useDispatch();
  const isSideBarMenuHandling = () => {
    dispatch(isToggle());
  };
  const cacheResult = useSelector(store => store.search)
  
  useEffect(() => {
   
    const timer = setTimeout(() => { 
      if (cacheResult[searchText]) {
        setSuggestion(cacheResult[searchText])
      } else {
        fetchSearchData()
      }
    }, 200)
    
    return () => {
      clearTimeout(timer)
    }
  },[searchText])

  const fetchSearchData = async () => {
    const data = await fetch(SEARCH_API + searchText)
    const json = await data.json();
    setSuggestion(json[1])
    dispatch(cacheSearch({
      [searchText] : json[1]
    }))
  }



  return (
    <div className="grid grid-flow-col p-5  shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => isSideBarMenuHandling()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="h-8 mx-2 cursor-pointer"
            alt="Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 pl-64">
        <input
          type="text"
          className="w-1/2 border border-gray-500 rounded-l-full px-5 p-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button className="border border-gray-300 rounded-r-full px-3 p-2 bg-gray-300">
          Search
        </button>
        {showSuggestion && (<div className="p-5 fixed bg-white w-[32rem] shadow-sm rounded-lg border border-gray-300">
          <ul>
            {suggestion.map(data => (
              <li className="py-2 px-3 shadow-sm hover:bg-gray-100" key={data}>{data}</li>
           ))}
          </ul>
        </div>)}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="usericon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVwuZ5A2-mFMGxZOo0qVI82JJq4aEvab83hwOxbsaPT0tlO9-cLHI7esrkLM7tkjMDW-oCO7CYQ8&usqp=CAU&ec=48600113"
        />
      </div>
    </div>
  );
};

export default Header;
