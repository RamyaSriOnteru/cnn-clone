import React from "react";
interface newsProp {
  news: any;
}
const BreakingNews = (props: newsProp) => {
  return (
    <div className="grid grid-cols-2 mb-5">
      <div className="pl-5">
        <h1 className="text-4xl text-center font-bold">
          {props.news[3]?.title}
        </h1>
        <img src={props.news[3]?.urlToImage} className="mt-7 pr-3" alt="" />
      </div>
      <div className="grid grid-cols-2">
        <div>
          <img src={props.news[8]?.urlToImage} alt="" />
          <h1 className="font-bold text-lg mt-3">{props.news[8]?.title}</h1>
          <hr></hr>
          <p className="p-1">{props.news[8]?.description}</p>
        </div>
        <div>
          <img src={props.news[9]?.urlToImage} className="ml-3" alt="" />
          <h1 className="font-bold text-lg mt-3">{props.news[9]?.title}</h1>
          <hr></hr>
          <p className="p-1">{props.news[9]?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
