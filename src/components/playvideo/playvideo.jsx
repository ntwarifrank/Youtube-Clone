import like from "../../assets/image/like.png";
import dislike from "../../assets/image/dislike.png";
import share from "../../assets/image/images.png";
import save from "../../assets/image/save.png";
import profile from "../../assets/image/profile.jpg";
import reply from "../../assets/image/reply.png";
import "./video.css";
import { useState, useEffect } from "react";
import { API_KEY, value_converter } from "../../../api-key";
import moment from "moment";
import { Link } from "react-router-dom";

const Playvideo = ({ channelid, categoryid, videoid }) => {
  const [data, setData] = useState([]);
  const [channelData, setChannelData] = useState([]);
  const [comment, setComment] = useState([]);

  // Fetch channel data
  function channel() {
    const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelid}&key=${API_KEY}`;

    fetch(channelUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setChannelData(data.items);
        } else {
          console.error("No channel data found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching channel data:", error);
      });
  }

  // Fetch single video data
  function singleData() {
    const singleDataUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&categoryId=${categoryid}&id=${videoid}&key=${API_KEY}`;

    fetch(singleDataUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setData(data.items);
        } else {
          console.error("No video data found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching video data:", error);
      });
  }

  // Fetch comments for the video
  function commentFetcher() {
    const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoid}&key=${API_KEY}`;

    fetch(commentUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setComment(data.items);
        } else {
          console.error("No comments found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }

  // UseEffect hooks for data fetching
  useEffect(() => {
    if (videoid) {
      commentFetcher();
    }
  }, [videoid]);

  useEffect(() => {
    if (categoryid && videoid) {
      singleData();
    }
  }, [categoryid, videoid]);

  useEffect(() => {
    if (channelid) {
      channel();
    }
  }, [channelid]);





    const [relatedData, setRelatedData] = useState([]);

    // Fetch video data from YouTube API
    function fetchData() {
      const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${API_KEY}`;

      fetch(videoUrl)
        .then((res) => res.json())
        .then((data) => setRelatedData(data.items))
        .catch((error) => console.log(error));
    }

    // Fetch data on category change
    useEffect(() => {
      fetchData();
    });


  return (
    <div className="video-container">
      <div className="video">
        <div className="iframe">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoid}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="description">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div className="container" key={index}>
                <div className="title">
                  <h2>{item.snippet.title}</h2>
                </div>

                <div className="channel">
                  {channelData.length > 0 &&
                    channelData.map((channel, index) => (
                      <div className="profile" key={index}>
                        <div className="profil">
                          <img
                            src={channel.snippet.thumbnails.medium.url}
                            alt=""
                          />
                        </div>
                        <div className="prof">
                          <p>{channel.snippet.title.slice(0, 8)}</p>
                          <p className="channelsub">
                            {value_converter(
                              channel.statistics.subscriberCount
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  <div className="subscribe">
                    <div className="button">
                      <button>Subscribe</button>
                    </div>
                  </div>

                  <div className="liking">
                    <div className="like">
                      <img src={like} alt="" />
                      <span>{value_converter(item.statistics.likeCount)}</span>
                    </div>
                    <div className="dislike">
                      <img src={dislike} alt="" />
                      <span>0</span>
                    </div>
                    <div className="share">
                      <img src={share} alt="" />
                      <span>1k</span>
                    </div>
                    <div className="save">
                      <img src={save} alt="" />
                    </div>
                  </div>
                </div>

                <div className="desc">
                  <p>
                    <span className="spans">
                      {value_converter(item.statistics.viewCount)}
                      <span> views </span>
                      <span> {moment(item.snippet.publishedAt).fromNow()}</span>
                    </span>
                    <br />
                    <br />
                    {item.snippet.description}
                    <br />
                    <br />
                    {item.snippet.tags.join("#")}
                  </p>
                </div>

                <div className="comment">
                  <div className="count">
                    <h2>{item.statistics.commentCount}</h2>
                  </div>
                  {comment.length > 0 &&
                    comment.map((item, index) => (
                      <div className="single-comment" key={index}>
                        <div className="comment-profile">
                          <div className="image">
                            <img
                              src={
                                item.snippet.topLevelComment.snippet
                                  .authorProfileImageUrl
                              }
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="comment-content">
                          <div className="channel-name-comment">
                            <h3>
                              {
                                item.snippet.topLevelComment.snippet
                                  .authorDisplayName
                              }
                            </h3>
                          </div>
                          <div>
                            {item.snippet.topLevelComment.snippet.textOriginal}
                          </div>
                          <div className="impression">
                            <div className="like">
                              <img src={like} alt="" />
                              <span>
                                {item.snippet.topLevelComment.snippet.likeCount}
                              </span>
                            </div>

                            <div className="reply">
                              <img src={reply} alt="" />
                              <span>{item.snippet.totalReplyCount}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))
          ) : (
            <p>Loading video details...</p>
          )}
        </div>
      </div>

      <div className="video-related">
        <h2>Related Videos</h2>
        {relatedData.map((item, index) => (
          <Link
            key={index}
            to={`/video/${item.snippet.channelId}/${item.snippet.categoryId}/${item.id}`}
          >
            <div className="related-vid">
              <div className="related-iframe">
                <img src={item.snippet.thumbnails.medium.url} alt="" />
              </div>
              <div className="related-description">
                <div className="title">
                  <h3>{item.snippet.title.slice(0, 60)}</h3>
                </div>
                <div className="tradind">
                  <div className="channel-name">
                    {item.snippet.channelTitle}
                  </div>
                  <div className="view">
                    <span className="related-trading">
                      {value_converter(item.statistics.viewCount)} views &bull;
                    </span>
                    <span className="related-trading">
                      {moment(item.snippet.publishedAt).fromNow()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Playvideo;
