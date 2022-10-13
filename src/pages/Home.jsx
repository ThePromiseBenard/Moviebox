import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import request from "../request";

const Home = () => {
  return (
    <div className="space-y-4">
      <Main />
      <Row rowId="1" title="upcoming" fetchURL={request.requestUpcoming} />
      {/* <Row title="lates" fetchURL={request.requestLatest} /> */}
      <Row rowId="2" title="trending" fetchURL={request.requestTrending} />
      <Row rowId="3" title="top rated" fetchURL={request.requestTopRated} />
      <Row rowId="4" title="popular" fetchURL={request.requestPopular} />
    </div>
  );
};

export default Home;
