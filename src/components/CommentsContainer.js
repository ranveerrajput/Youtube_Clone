import React from "react";

const commentsData = [
  {
    name: "Ranveer Rajput",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Iusto fugiat",
    replies: [
      {
        name: "Ranveer Rajput",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Iusto fugiat",
        replies: [
          {
            name: "Ranveer Rajput",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Iusto fugiat",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ranveer Rajput",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Iusto fugiat",
    replies: [
      {
        name: "Ranveer Rajput",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Iusto fugiat",
        replies: [
          {
            name: "Ranveer Rajput",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Iusto fugiat",
            replies: [
              {
                name: "Ranveer Rajput",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Iusto fugiat",
                replies: [
                  {
                    name: "Ranveer Rajput",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Iusto fugiat",
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
    name: "Ranveer Rajput",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Iusto fugiat",
    replies: [
      {
        name: "Ranveer Rajput",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Iusto fugiat",
        replies: [
          {
            name: "Ranveer Rajput",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Iusto fugiat",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ranveer Rajput",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Iusto fugiat",
    replies: [],
  },
  {
    name: "Ranveer Rajput",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Iusto fugiat",
    replies: [
      {
        name: "Ranveer Rajput",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Iusto fugiat",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQdGQyglNHmimZI7yUHYK9Kix8LYuIr00OvdaPEXePA&usqp=CAU&ec=48600112"
        alt="user_icon"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className=" m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
