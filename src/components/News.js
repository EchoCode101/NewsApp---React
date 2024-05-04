import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading({ loading: true });
    props.setProgress(30);

    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(60);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);

    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
    document.title = `NewsApp - ${capitalizeFirstLetter(props.category)}`;
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h2 className="text-center">
        NewsApp - Top Headlines from {capitalizeFirstLetter(props.category)}
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles && articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container my-4">
          <div className="row">
            {articles.map((element) => {
              if (element.title !== "[Removed]") {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description
                          : "There is no discription for this News."
                      }
                      urlToImage={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                      source={element.source.name}
                      badgeColor={props.badgeColor}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  categoty: "general",
  badgeColor: "dark",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  categoty: PropTypes.string,
  badgeColor: PropTypes.string,
};
export default News;
