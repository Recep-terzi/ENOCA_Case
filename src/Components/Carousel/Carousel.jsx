import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Carousel.Module.css";
const Carousel = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=tr&apiKey=4c10e718f5b34bccba132be1c9233501"
      )
      .then((res) => setData(res.data.articles));
  }, []);
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div className="container">
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
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
            </div>
            <div class="carousel-item">
              <div className="news-card row">
                {data && (
                  <>
                    <div className="card-left col-md-6">
                      <img src={data[1].urlToImage} alt=" Card resimi" />
                    </div>
                    <div className="card-right col-md-6">
                      <div className="card-title">Editor's pick</div>
                      <div className="card-news-title">{data[1].title}</div>
                      <div className="card-news-description">
                        {data[1].description}
                      </div>
                      <div className="card-news-author">
                        {data[1].source.name}
                      </div>
                      <div className="card-news-time">
                        {data[1].publishedAt}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div class="carousel-item">
              <div className="news-card row">
                {data && (
                  <>
                    <div className="card-left col-md-6">
                      <img src={data[2].urlToImage} alt=" Card resimi" />
                    </div>
                    <div className="card-right col-md-6">
                      <div className="card-title">Editor's pick</div>
                      <div className="card-news-title">{data[2].title}</div>
                      <div className="card-news-description">
                        {data[2].description}
                      </div>
                      <div className="card-news-author">
                        {data[2].source.name}
                      </div>
                      <div className="card-news-time">
                        {data[2].publishedAt}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Carousel;
