import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.tsx";
import Home from "./Home.tsx";
import Menu from "./Menu.tsx";
import BreakingNews from "./BreakingNews.tsx";
import Footer from "./Footer.tsx";
const Main = () => {
  const [news, setNews] = useState([]);
  const [menu, setMenu] = useState("");
  const [search, setSearch] = useState("");
  const getNews = async () => {
    try {
      await fetch(
        `https://newsapi.org/v2/everything?q=${
          menu ? menu : "movies"
        }&sortBy=popularity&apiKey=19d13d0c6fbb4d1f960a140e419ad84c`
      )
        .then((res) => res.json())
        .then((json) => setNews(json.articles));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getNews();
  }, [menu]);
  console.log(news);
  return (
    <div>
      <Navbar setMenu={setMenu} />
      <Menu news={news} />
      <BreakingNews news={news} />
      <Home news={news} search={search} />
      <Footer news={news} setSearch={setSearch} />
    </div>
  );
};

export default Main;
