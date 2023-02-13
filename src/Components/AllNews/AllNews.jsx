import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./AllNews.Module.css";
import { GiNewspaper } from "react-icons/gi";
import axios from "axios";
const AllNews = () => {
  const [data, setData] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=tr&pageSize=10&category=${
          category ? category : ""
        }&apiKey=4c10e718f5b34bccba132be1c9233501`
      )
      .then((res) => setData(res.data.articles));
  }, [category]);
  console.log(data);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3 categories-left">
            <div className="filter-title">Tüm Kategoriler</div>
            <div className="filter-category">
              <ul>
                <li
                  onClick={() => setCategory("politics")}
                  className={
                    category === "politics" ? "active-news" : "head-link"
                  }
                >
                  <GiNewspaper />
                  Politics
                </li>
                <li
                  onClick={() => setCategory("business")}
                  className={
                    category === "business" ? "active-news" : "head-link"
                  }
                >
                  <GiNewspaper />
                  Business
                </li>
                <li
                  onClick={() => setCategory("health")}
                  className={
                    category === "health" ? "active-news" : "head-link"
                  }
                >
                  <GiNewspaper />
                  Health
                </li>
                <li
                  onClick={() => setCategory("technology")}
                  className={
                    category === "technology" ? "active-news" : "head-link"
                  }
                >
                  <GiNewspaper />
                  Technology
                </li>
                <li
                  onClick={() => setCategory("sports")}
                  className={
                    category === "sports" ? "active-news" : "head-link"
                  }
                >
                  <GiNewspaper />
                  Sports
                </li>
                <li
                  onClick={() => setCategory("science")}
                  className={
                    category === "science" ? "active-news" : "head-link"
                  }
                >
                  <GiNewspaper />
                  Science
                </li>
                <li
                  onClick={() => setCategory("entertainment")}
                  className={
                    category === "entertainment" ? "active-news" : "head-link"
                  }
                >
                  <GiNewspaper />
                  Entertainment
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 categories-right">
            {data && (
              <>
                {data.map((news) => (
                  <>
                    <div className="new-card">
                      <div className="new-image">
                        <img src={news.urlToImage} alt="" />
                      </div>
                      <div className="new-info">
                        <div className="new-title">{news.title}</div>
                        <div className="new-description">
                          {news.description}
                        </div>
                        <div className="new-source">{news.source.name}</div>
                        <div className="new-time">{news.publishedAt}</div>
                      </div>
                    </div>
                  </>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNews;
