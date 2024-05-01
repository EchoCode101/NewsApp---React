import React from "react";

const NewsItem = (props) => {
  let {
    title,
    description,
    urlToImage,
    url,
    author,
    publishedAt,
    source,
    badgeColor,
  } = props;
  return (
    <div className="card my-4" style={{ height: "35rem", marginEnd: "auto" }}>
      <img
        style={{ height: "200px", objectFit: "cover" }}
        src={
          !urlToImage
            ? "https://media.istockphoto.com/id/1313303632/video/breaking-news-template-intro-for-tv-broadcast-news-show-program-with-3d-breaking-news-text.jpg?s=640x640&k=20&c=S0dTZp37XKVcCAnoguMnRatvv4Nkp2cjmA5aYOOrJs8="
            : urlToImage
        }
        className="card-img-top"
        alt={title}
      />
      <div
        className="card-body"
        style={{
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: "0.3rem !important" ,
          },
        }}
      >
        <h5 className="card-title">
          {title}{" "}
          <span
            className={`badge rounded-pill text-bg-${
              badgeColor ? badgeColor : "dark"
            }`}
            style={{ width: "fit-content" }}
          >
            {source}
          </span>
        </h5>
        <hr />
        <p className="card-text">{description}</p>
        <a
          href={url}
          target="_blank"
          className="btn btn-sm btn-dark"
          rel="noreferrer"
          style={{ position: "absolute", bottom: "50px" }}
        >
          See Details
        </a>
      </div>
      <hr style={{ margin: "0 " }} />
      <p
        className="card- text-center"
        style={{
          textAlign: "right",
          margin: "0 10px 5px 0",
          fontSize: ".9rem",
        }}
      >
        <small className="text-muted ">
          By {!author ? "Unknown" : author} on{" "}
          {publishedAt ? new Date(publishedAt).toGMTString() : "Invalid Date"}
        </small>
      </p>
    </div>
  );
};

export default NewsItem;
