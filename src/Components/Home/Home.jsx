import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { AiOutlineRight } from "react-icons/ai";
import "./Home.Module.css";
const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971"
      )
      .then((res) => setData(res.data.articles));
  }, []);
  console.log(data);
  return (
    <div>
      <Header />
      <main id="main-section">
        <div className="news-first-line row">
          <div className="editors-pick col-md-8">
            <div className="editors-pick-title">Editor's Pick</div>
            <div className="editors-pick-menu row">
              <div className="editors-pick-left col-md-6">
                {data && (
                  <>
                    <img
                      src={data[0].urlToImage}
                      alt=""
                      style={{ width: "100%" }}
                    />
                    <h2>{data[0].title}</h2>
                    <p>{data[0].description}</p>
                    <p>{data[0].source.name}</p>
                    <p>{data[0].publishedAt}</p>
                  </>
                )}
              </div>
              <div className="editors-pick-right col-md-6">
                <div className="right-item">
                  {data && (
                    <>
                      <div className="item-image">
                        <img
                          src={data[1].urlToImage}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="item-description">
                        <h2>{data[1].title}</h2>
                        <p>{data[1].source.name}</p>
                        <p>{data[1].publishedAt}</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="right-item">
                  {data && (
                    <>
                      <div className="item-image">
                        <img
                          src={data[2].urlToImage}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="item-description">
                        <h2>{data[2].title}</h2>
                        <p>{data[2].source.name}</p>
                        <p>{data[2].publishedAt}</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="right-item">
                  {data && (
                    <>
                      <div className="item-image">
                        <img
                          src={data[3].urlToImage}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="item-description">
                        <h2>{data[3].title}</h2>
                        <p>{data[3].source.name}</p>
                        <p>{data[3].publishedAt}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="trending col-md-4">
            <div className="trending-title">Trending</div>
            <div className="trending-menu">
              <div className="menu">
                <div className="number">01</div>
                <div className="info">
                  {data && (
                    <>
                      <div className="info-title">{data[0].title}</div>
                      <div className="info-author"> {data[0].source.name}</div>
                      <div className="info-time">{data[0].publishedAt}</div>
                    </>
                  )}
                </div>
              </div>
              <div className="menu">
                <div className="number">01</div>
                <div className="info">
                  {data && (
                    <>
                      <div className="info-title">{data[1].title}</div>
                      <div className="info-author"> {data[1].source.name}</div>
                      <div className="info-time">{data[1].publishedAt}</div>
                    </>
                  )}
                </div>
              </div>
              <div className="menu">
                <div className="number">01</div>
                <div className="info">
                  {data && (
                    <>
                      <div className="info-title">{data[2].title}</div>
                      <div className="info-author"> {data[2].source.name}</div>
                      <div className="info-time">{data[2].publishedAt}</div>
                    </>
                  )}
                </div>
              </div>
              <div className="menu">
                <div className="number">01</div>
                <div className="info">
                  {data && (
                    <>
                      <div className="info-title">{data[3].title}</div>
                      <div className="info-author"> {data[3].source.name}</div>
                      <div className="info-time">{data[3].publishedAt}</div>
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
      </main>
    </div>
  );
};

export default Home;
