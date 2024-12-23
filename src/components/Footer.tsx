import React from "react";
interface newsProps {
  news: any;
  setSearch: any;
}
const Footer = (props: newsProps) => {
  return (
    <div className="bg-black h-5/6 p-4">
      <input
        type="text"
        id="search"
        onChange={(e) => props.setSearch(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg block h-10 w-full p-2.5 "
        placeholder="Search CNN.."
        required
      />

      <h1 className="text-white text-4xl font-bold capitalize p-3">
        In case you missed it
      </h1>
      <div className="flex ml-3">
        <img src={props.news[21]?.urlToImage} className="h-96 rounded" alt="" />
        <h1 className="text-white ml-3 font-medium">
          {props.news[21]?.description}
        </h1>
      </div>
      <h1 className="text-center text-white mt-4 ">
        &copy; 2024 Cable News Network.All Rights Reserved.
      </h1>
    </div>
  );
};

export default Footer;
