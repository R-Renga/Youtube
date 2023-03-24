import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Watch from "./components/Watch";
import Demo from "./components/Demo";
import MyComponent from "./components/Demo1";
import Memo from "./components/Memo";


const appRoute = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [{
    path: '/',
    element: <MainContainer/>
  }, {
    path: 'watch',
    element:<Watch/>
  },{
    path: 'demo',
    element:<Demo/>
  },{
    path: 'demo1',
    element:<MyComponent/>
  },{
    path: 'memo',
    element:<Memo/>
  }]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRoute}/>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
