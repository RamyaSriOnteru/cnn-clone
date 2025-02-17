import React, { useEffect, useState } from "react";
interface newsProp {
  news: any;
  search: any;
}
const Home = (props: newsProp) => {
  return (
    <div>
      <hr />
      <h1 className="bg-red-600 w-10 ml-4 h-1">.</h1>
      <h1 className="ml-4 font-bold text-sm">MORE TOP STORIES</h1>
      <div className="grid grid-cols-3 mt-1 pl-2">
        <div className="p-2">
          <img src={props.news[4]?.urlToImage} className="h-60" alt="" />
          <h1 className="text-xl font-bold">{props.news[4]?.title}</h1>
          <h1 className="mt-2">{props.news[4]?.content}</h1>
        </div>
        <div className="p-2">
          <img src={props.news[5]?.urlToImage} className="h-60" alt="" />
          <h1 className="text-xl font-bold">{props.news[5]?.title}</h1>
          <h1 className="mt-2">{props.news[5]?.content}</h1>
        </div>
        <div className="p-2">
          <img src={props.news[6]?.urlToImage} className="h-60" alt="" />
          <h1 className="text-xl font-bold">{props.news[6]?.title}</h1>
          <h1 className="mt-2">{props.news[6]?.content}</h1>
        </div>
      </div>
      <div className="grid grid-cols-4">
        {props.news
          .filter((data: any) => data.title.includes(props.search))
          .map((data: any) => {
            return (
              <div className="max-w-sm rounded overflow-hidden  ml-3 mt-3">
                <img className="w-full" src={data?.urlToImage} alt="" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{data?.title}</div>
                  <p className="text-gray-700 text-base">{data?.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
