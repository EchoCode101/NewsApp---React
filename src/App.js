import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress });
  };
  render() {
    let country = "us",
      pageSize = 6;

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
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
                  apikey={this.apikey}
                  setProgress={this.setProgress}
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
                  apikey={this.apikey}
                  setProgress={this.setProgress}
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
                  apikey={this.apikey}
                  setProgress={this.setProgress}
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
                  apikey={this.apikey}
                  setProgress={this.setProgress}
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
                  apikey={this.apikey}
                  setProgress={this.setProgress}
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
                  apikey={this.apikey}
                  setProgress={this.setProgress}
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
                  apikey={this.apikey}
                  setProgress={this.setProgress}
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
  }
}
