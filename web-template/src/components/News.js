import React, { useEffect, useState } from "react";
import "./News.css";

export default function News() {
  let [newsObj, setNewsObj] = useState(null);
  let [newsError, setNewsError] = useState(false);
  useEffect(() => {
    getNews();
  }, []);
  function getNews() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=0f41f42b6f3a496a935ec2581c884696"
    )
      .then((data) => data.json())
      .then((data) => {
        setNewsObj(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setNewsError(true);
      });
    // console.log(newsObj);
  }
  return (
    <div className="news-cont">
      {newsObj ? (
        <div>
          {" "}
          <CreateNews newsObjs={newsObj} />{" "}
        </div>
      ) : (
        <div>{newsError ? "Something Unexpected happend" : "Loading"}</div>
      )}
    </div>
  );
}

function CreateNews({ newsObjs }) {
  return (
    <div className="news-div">
        <h1 className="news-div-title">Top News </h1>
      <div className="news-place">
        {/* {newsObjs.articles.slice(0, 9).map((article, index) => (
          
        ))} */}
        <div className="cards-row">
          <div key="" className="cards">
            <h1 className="title">{newsObjs.articles[0].title}</h1>
            <div className="img-cont">
              <img
                src={newsObjs.articles[0].urlToImage}
                alt={newsObjs.articles[0].title}
              />
            </div>
            <div className="author">Author: {newsObjs.articles[0].author}</div>
            <p className="para">{(newsObjs.articles[0].description).split(/\s+/).slice(0, 20).join(' ') + " ................"}</p>
            <a href={newsObjs.articles[0].url} target="_blank">
              Read more
            </a>
          </div>
          <div key="" className="cards">
            <h1 className="title">{newsObjs.articles[1].title}</h1>
            <div className="img-cont">
              <img
                src={newsObjs.articles[1].urlToImage}
                alt={newsObjs.articles[1].title}
              />
            </div>
            <p className="author">Author: {newsObjs.articles[1].author}</p>
            <p className="para">{(newsObjs.articles[1].description).split(/\s+/).slice(0, 20).join(' ') + " ................"}</p>
            <a href={newsObjs.articles[1].url} target="_blank" >
              Read more
            </a>
          </div>
          <div key="" className="cards">
            <h1 className="title">{newsObjs.articles[2].title}</h1>
            <div className="img-cont">
              <img
                src={newsObjs.articles[2].urlToImage}
                alt={newsObjs.articles[2].title}
              />
            </div>
            <p className="author">Author: {newsObjs.articles[2].author}</p>
            <p className="para">{(newsObjs.articles[2].description).split(/\s+/).slice(0, 20).join(' ') + " ................"}</p>
            <a href={newsObjs.articles[2].url} target="_blank">
              Read more
            </a>
          </div>
        </div>
        <div className="cards-row">
          <div key="" className="cards">
            <h1 className="title">{newsObjs.articles[3].title}</h1>
            <div className="img-cont">
              <img
                src={newsObjs.articles[3].urlToImage}
                alt={newsObjs.articles[3].title}
              />
            </div>
            <p className="author">Author: {newsObjs.articles[3].author}</p>
            <p className="para">{(newsObjs.articles[3].description).split(/\s+/).slice(0, 20).join(' ') + " ................"}</p>
            <a href={newsObjs.articles[3].url} target="_blank">
              Read more
            </a>
          </div>
          <div key="" className="cards">
            <h1 className="title">Author: {newsObjs.articles[4].title}</h1>
            <div className="img-cont">
              <img
                src={newsObjs.articles[4].urlToImage}
                alt={newsObjs.articles[4].title}
              />
            </div>
            <p className="author">Author: {newsObjs.articles[4].author}</p>
            <p className="para">{(newsObjs.articles[4].description).split(/\s+/).slice(0, 20).join(' ') + " ................"}</p>
            <a href={newsObjs.articles[4].url} target="_blank">
              Read more
            </a>
          </div>
          <div key="" className="cards">
            <h1 className="title">{newsObjs.articles[2].title}</h1>
            <div className="img-cont">
              <img
                src={newsObjs.articles[2].urlToImage}
                alt={newsObjs.articles[2].title}
              />
            </div>
            <p className="author">Author: {newsObjs.articles[2].author}</p>
            <p className="para">{(newsObjs.articles[2].description).split(/\s+/).slice(0, 20).join(' ') + " ................"}</p>
            <a href={newsObjs.articles[2].url} target="_blank">
              Read more
            </a>
          </div>
        </div>
        <div className="cards-row">
          <div key="" className="cards">
            <h1 className="title">{newsObjs.articles[6].title}</h1>
            <div className="img-cont">
              <img
                src={newsObjs.articles[6].urlToImage}
                alt={newsObjs.articles[6].title}
              />
            </div>
            <p className="author">Author: {newsObjs.articles[6].author}</p>
            <p className="para">{(newsObjs.articles[6].description).split(/\s+/).slice(0, 20).join(' ') + " ................"}</p>
            <a href={newsObjs.articles[6].url} target="_blank">
              Read more
            </a>
          </div>
          <div key="" className="cards">
            <h1 className="title">{newsObjs.articles[7].title}</h1>
            <div className="img-cont">
              <img
                src={newsObjs.articles[7].urlToImage}
                alt={newsObjs.articles[7].title}
              />
            </div>
            <p className="author">Author: {newsObjs.articles[7].author}</p>
            <p className="para">{(newsObjs.articles[7].description).split(/\s+/).slice(0, 20).join(' ') + " ................"}</p>
            <a href={newsObjs.articles[7].url} target="_blank">
              Read more
            </a>
          </div>
          <div key="" className="cards">
            <h1 className="title">{newsObjs.articles[8].title}</h1>
            <div className="img-cont">
              <img
                src={newsObjs.articles[8].urlToImage}
                alt={newsObjs.articles[8].title}
              />
            </div>
            <p className="author">Author: {newsObjs.articles[8].author}</p>
            <p className="para">{(newsObjs.articles[8].description).split(/\s+/).slice(0, 20).join(' ') + " ................"}</p>
            <a href={newsObjs.articles[8].url} target="_blank">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
