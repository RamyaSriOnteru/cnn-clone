import React from "react";
interface newsProps {
  news: any;
}
const Menu = (props: newsProps) => {
  console.log(props);

  return (
    <div>
      <h1 className="p-7 text-center  cursor-pointer text-red-400 hover:underline">
        {props.news[0]?.title} | {props.news[1]?.title} |{props.news[2]?.title}|
        {props.news[3]?.title} |{props.news[4]?.title}| {props.news[5]?.title}|
        {props.news[6]?.title}|
      </h1>
    </div>
  );
};

export default Menu;
