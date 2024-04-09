import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  let country = "us",
    pageSize = 6;

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country={country}
                category="general"
                badgeColor="info"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country={country}
                category="general"
                badgeColor="info"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country={country}
                category="business"
                badgeColor="dark"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="entertainmen"
                pageSize={pageSize}
                country={country}
                category="entertainment"
                badgeColor="danger"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country={country}
                category="sports"
                badgeColor="primary"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country={country}
                category="science"
                badgeColor="warning"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country={country}
                category="health"
                badgeColor="success"
              />
            }
          />

          <Route
            path="/technology"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country={country}
                category="technology"
                badgeColor="secondary"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
