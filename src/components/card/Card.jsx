import profile from "../../assets/image/profile.jpg";
import { value_converter } from "../../../api-key";
import "./card.css";
import { Link } from "react-router-dom";
import { API_KEY } from "../../../api-key";
import { useEffect, useState } from "react";
import moment from "moment/moment";

const Card = ({ navbar, category }) => {
  const [data, setData] = useState([]);

  // Fetch video data from YouTube API
  function fetchData() {
    const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

    fetch(videoUrl)
      .then((res) => res.json())
      .then((data) => setData(data.items))
      .catch((error) => console.log(error));
  }

  // Fetch data on category change
  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div>
      <div className={`card-container ${navbar ? "" : "large-container"}`}>
        {data.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/video/${item.snippet.channelId}/${item.snippet.categoryId}/${item.id}`}
            >
              <div className="card">
                <div className="image">
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    alt="videothumbnail"
                  />
                </div>
                <div className="content">
                  <div className="title">
                    <div className="title-image">
                      <img src={profile} alt="" />
                    </div>
                    <p>{item.snippet.title.slice(0, 60)}</p>
                  </div>
                  <div className="channel">
                    <div className="name">{item.snippet.channelTitle}</div>
                    <div className="level">
                      <span>
                        {value_converter(item.statistics.viewCount)} views
                      </span>
                      &bull;{" "}
                      <span>{moment(item.snippet.publishedAt).fromNow()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
