import React from "react";

const commentsData = [

  {
    name: "Renga Raja",
    comment: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Renga Raja",
    comment: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Renga Raja",
        comment: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Renga Raja",
        comment: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Renga Raja",
            comment: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Renga Raja",
                comment: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Renga Raja",
                    comment: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Renga Raja",
                        comment: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Renga Raja",
                    comment: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Renga Raja",
    comment: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Renga Raja",
    comment: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Renga Raja",
    comment: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Renga Raja",
    comment: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comments = ({ commentResult }) => {
  const { name, comment } = commentResult;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="h-16 p-2 m-2"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVwuZ5A2-mFMGxZOo0qVI82JJq4aEvab83hwOxbsaPT0tlO9-cLHI7esrkLM7tkjMDW-oCO7CYQ8&usqp=CAU&ec=48600113"
      />
      <div className="p-2 m-2 ">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};


const CommentsList = ({ commentlistData }) => {
  // Disclaimer: Don't use indexes as keys
  return commentlistData.map((data, index) => (
    <div key={index}>
      <Comments commentResult={data} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList commentlistData={data.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="p-2 font-bold comment-2xl">Comments :</h1>
      <CommentsList commentlistData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
