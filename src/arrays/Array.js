import React from "react";

const Array = () => {
  const list = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.title}</a>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Array;
