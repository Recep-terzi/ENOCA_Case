import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./CategoryPage.Module.css";
const CategoryPage = ({ category }) => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=tr&page=${page}&pageSize=10&category=${category}&apiKey=1a57fd012fa546cf89cdf342e1c42df9`
      )
      .then((res) => setData(res.data.articles));
  }, [category, page]);
  return (
    <>
      <Header />
      <div className="container">
        <div className="news-first-line row">
          <div className="editors-pick col-md-9">
            <p>{category}</p>
            <div className="editors-pick-title">Recent News</div>
            {data && (
              <>
                {data.map((categories) => (
                  <>
                    <div className="recent-card row">
                      <div className="recent-info col-md-8">
                        <h2>{categories.title}</h2>
                        <p>{categories.description}</p>
                        <p>{categories.source.name}</p>
                        <p>{categories.publishedAt}</p>
                      </div>
                      <div className="recent-image col-md-4">
                        <img src={categories.urlToImage} alt="" />
                      </div>
                    </div>
                  </>
                ))}
              </>
            )}
          </div>
          <div className="trending col-md-3">
            <div className="trending-title">Popular Posts</div>
            <div className="trending-menu">
              <div className="menu">
                <div className="number">01</div>
                <div className="info">
                  {data && (
                    <>
                      <div className="info-title">{data[6].title}</div>
                      <div className="info-author"> {data[6].source.name}</div>
                      <div className="info-time">{data[6].publishedAt}</div>
                    </>
                  )}
                </div>
              </div>
              <div className="menu">
                <div className="number">02</div>
                <div className="info">
                  {data && (
                    <>
                      <div className="info-title">{data[7].title}</div>
                      <div className="info-author"> {data[7].source.name}</div>
                      <div className="info-time">{data[7].publishedAt}</div>
                    </>
                  )}
                </div>
              </div>
              <div className="menu">
                <div className="number">03</div>
                <div className="info">
                  {data && (
                    <>
                      <div className="info-title">{data[8].title}</div>
                      <div className="info-author"> {data[8].source.name}</div>
                      <div className="info-time">{data[8].publishedAt}</div>
                    </>
                  )}
                </div>
              </div>
              <div className="menu">
                <div className="number">04</div>
                <div className="info">
                  {data && (
                    <>
                      <div className="info-title">{data[9].title}</div>
                      <div className="info-author"> {data[9].source.name}</div>
                      <div className="info-time">{data[9].publishedAt}</div>
                    </>
                  )}
                </div>
              </div>
              <Link to="/">
                See All Trends <AiOutlineRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="page-number">
          <p onClick={() => setPage(1)} className={page === 1 ? "active" : ""}>
            1
          </p>
          <p onClick={() => setPage(2)} className={page === 2 ? "active" : ""}>
            2
          </p>
          <p onClick={() => setPage(3)} className={page === 3 ? "active" : ""}>
            3
          </p>
          <p onClick={() => setPage(4)} className={page === 4 ? "active" : ""}>
            4
          </p>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
