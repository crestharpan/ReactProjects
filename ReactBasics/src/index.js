import React, { Component } from "react"; //comes from the node_modules
import { createRoot } from "react-dom/client";
//INCLUDING COMPONENTS
import Header from "./components/header";
import JSON from "./components/db.json";
import NewsList from "./components/news_list";
class App extends Component {
  state = {
    news: JSON,
  };
  render() {
    return (
      <div>
        <Header />
        <NewsList news={this.state.news}>
          <h3>The News are</h3>
        </NewsList>
      </div>
    );
  }
} //passing the json data to the news-list
let myDiv = document.querySelector("#root");
let root = createRoot(myDiv);
root.render(<App />);
