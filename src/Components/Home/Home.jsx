import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { AiOutlineRight } from "react-icons/ai";
import "./Home.Module.css";
import Footer from "../Footer/Footer";
import Carousel from "../Carousel/Carousel";
const Home = () => {
  const [data, setData] = useState();
  const [business, setBusiness] = useState();
  const [health, setHealth] = useState();
  const [search, setSearch] = useState();
  const [searchValue, setSearchValue] = useState();

  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=tr&apiKey=520d805af228490b80350b752018160a"
      )
      .then((res) => setData(res.data.articles));
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=520d805af228490b80350b752018160a"
      )
      .then((res) => setBusiness(res.data.articles));
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=520d805af228490b80350b752018160a"
      )
      .then((res) => setHealth(res.data.articles));
  }, []);
  useEffect(() => {
    axios
      .get(
        `
    https://newsapi.org/v2/top-headlines?q=${searchValue}&country=tr&apiKey=520d805af228490b80350b752018160a
    `
      )
      .then((res) => setSearchData(res.data.articles));
  }, [searchValue]);
  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        setSearchValue={setSearchValue}
      />
      {searchValue && (
        <>
          <div className="container">
            <div className="search-body ">
              {searchData.map((data, index) => (
                <div className="search-card" key={index}>
                  <div className="card-image">
                    <img src={data.urlToImage} alt="" />
                  </div>
                  <div className="card-title">{data.title}</div>
                  <div className="card-description">{data.description}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {!searchValue && (
        <>
          {" "}
          <main id="main-section">
            <Carousel />
            <div className="container">
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
                            <div className="info-author">
                              {" "}
                              {data[0].source.name}
                            </div>
                            <div className="info-time">
                              {data[0].publishedAt}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="menu">
                      <div className="number">02</div>
                      <div className="info">
                        {data && (
                          <>
                            <div className="info-title">{data[1].title}</div>
                            <div className="info-author">
                              {" "}
                              {data[1].source.name}
                            </div>
                            <div className="info-time">
                              {data[1].publishedAt}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="menu">
                      <div className="number">03</div>
                      <div className="info">
                        {data && (
                          <>
                            <div className="info-title">{data[2].title}</div>
                            <div className="info-author">
                              {" "}
                              {data[2].source.name}
                            </div>
                            <div className="info-time">
                              {data[2].publishedAt}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="menu">
                      <div className="number">04</div>
                      <div className="info">
                        {data && (
                          <>
                            <div className="info-title">{data[3].title}</div>
                            <div className="info-author">
                              {" "}
                              {data[3].source.name}
                            </div>
                            <div className="info-time">
                              {data[3].publishedAt}
                            </div>
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
              <div className="news-card row">
                {data && (
                  <>
                    <div className="card-left col-md-6">
                      <img src={data[0].urlToImage} alt=" Card resimi" />
                    </div>
                    <div className="card-right col-md-6">
                      <div className="card-title">Editor's pick</div>
                      <div className="card-news-title">{data[0].title}</div>
                      <div className="card-news-description">
                        {data[0].description}
                      </div>
                      <div className="card-news-author">
                        {data[0].source.name}
                      </div>
                      <div className="card-news-time">
                        {data[0].publishedAt}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="news-category row">
                <div className="business-category col-md-6">
                  <div className="business-category-title">Business</div>
                  <div className="business-card row">
                    {business && (
                      <>
                        <div className="business-card-image col-md-6">
                          <img src={business[0].urlToImage} alt="" />
                        </div>
                        <div className="business-info col-md-6">
                          <div className="business-title">
                            {business[0].title}
                          </div>
                          <div className="business-description">
                            {business[0].description}
                          </div>
                          <div className="business-author">
                            {business[0].source.name}
                          </div>
                          <div className="business-time">
                            {business[0].publishedAt}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="business-card row">
                    {business && (
                      <>
                        <div className="business-card-image col-md-6">
                          <img src={business[1].urlToImage} alt="" />
                        </div>
                        <div className="business-info col-md-6">
                          <div className="business-title">
                            {business[1].title}
                          </div>
                          <div className="business-description">
                            {business[1].description}
                          </div>
                          <div className="business-author">
                            {business[1].source.name}
                          </div>
                          <div className="business-time">
                            {business[1].publishedAt}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="business-card row">
                    {business && (
                      <>
                        <div className="business-card-image col-md-6">
                          <img src={business[2].urlToImage} alt="" />
                        </div>
                        <div className="business-info col-md-6">
                          <div className="business-title">
                            {business[2].title}
                          </div>
                          <div className="business-description">
                            {business[2].description}
                          </div>
                          <div className="business-author">
                            {business[2].source.name}
                          </div>
                          <div className="business-time">
                            {business[2].publishedAt}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="health-category col-md-6">
                  <div className="health-category-title">Health</div>
                  <div className="health-card row">
                    {health && (
                      <>
                        <div className="health-card-image col-md-6">
                          <img src={health[0].urlToImage} alt="" />
                        </div>
                        <div className="health-info col-md-6">
                          <div className="health-title">{health[0].title}</div>
                          <div className="health-description">
                            {health[0].description}
                          </div>
                          <div className="health-author">
                            {health[0].source.name}
                          </div>
                          <div className="health-time">
                            {health[0].publishedAt}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="health-card row">
                    {health && (
                      <>
                        <div className="health-card-image col-md-6">
                          <img src={health[1].urlToImage} alt="" />
                        </div>
                        <div className="health-info col-md-6">
                          <div className="health-title">{health[0].title}</div>
                          <div className="health-description">
                            {health[1].description}
                          </div>
                          <div className="health-author">
                            {health[1].source.name}
                          </div>
                          <div className="health-time">
                            {health[1].publishedAt}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="health-card row">
                    {health && (
                      <>
                        <div className="health-card-image col-md-6">
                          <img src={health[2].urlToImage} alt="" />
                        </div>
                        <div className="health-info col-md-6">
                          <div className="health-title">{health[0].title}</div>
                          <div className="health-description">
                            {health[2].description}
                          </div>
                          <div className="health-author">
                            {health[2].source.name}
                          </div>
                          <div className="health-time">
                            {health[2].publishedAt}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="news-first-line row">
                <div className="editors-pick col-md-9">
                  <div className="editors-pick-title">Recent News</div>
                  {data && (
                    <>
                      <div className="recent-card row">
                        <div className="recent-info col-md-8">
                          <h2>{data[4].title}</h2>
                          <p>{data[4].description}</p>
                          <p>{data[4].source.name}</p>
                          <p>{data[4].publishedAt}</p>
                        </div>
                        <div className="recent-image col-md-4">
                          <img src={data[4].urlToImage} alt="" />
                        </div>
                      </div>
                      <div className="recent-card row">
                        <div className="recent-info col-md-8">
                          <h2>{data[5].title}</h2>
                          <p>{data[5].description}</p>
                          <p>{data[5].source.name}</p>
                          <p>{data[5].publishedAt}</p>
                        </div>
                        <div className="recent-image col-md-4">
                          <img src={data[5].urlToImage} alt="" />
                        </div>
                      </div>
                      <div className="recent-card row">
                        <div className="recent-info col-md-8">
                          <h2>{data[6].title}</h2>
                          <p>{data[6].description}</p>
                          <p>{data[6].source.name}</p>
                          <p>{data[6].publishedAt}</p>
                        </div>
                        <div className="recent-image col-md-4">
                          <img src={data[6].urlToImage} alt="" />
                        </div>
                      </div>
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
                            <div className="info-title">{data[8].title}</div>
                            <div className="info-author">
                              {" "}
                              {data[8].source.name}
                            </div>
                            <div className="info-time">
                              {data[8].publishedAt}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="menu">
                      <div className="number">02</div>
                      <div className="info">
                        {data && (
                          <>
                            <div className="info-title">{data[9].title}</div>
                            <div className="info-author">
                              {" "}
                              {data[9].source.name}
                            </div>
                            <div className="info-time">
                              {data[9].publishedAt}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="menu">
                      <div className="number">03</div>
                      <div className="info">
                        {data && (
                          <>
                            <div className="info-title">{data[10].title}</div>
                            <div className="info-author">
                              {" "}
                              {data[10].source.name}
                            </div>
                            <div className="info-time">
                              {data[10].publishedAt}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="menu">
                      <div className="number">04</div>
                      <div className="info">
                        {data && (
                          <>
                            <div className="info-title">{data[11].title}</div>
                            <div className="info-author">
                              {" "}
                              {data[11].source.name}
                            </div>
                            <div className="info-time">
                              {data[11].publishedAt}
                            </div>
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
            </div>
          </main>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Home;
