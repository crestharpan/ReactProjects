import React from "react";
import NewsItem from "./news_list_item";
const NewsList = (props) => {
  //the props argument will hold the incoming json data form index.js
  const items = props.news.map((item) => {
    return <NewsItem key={item.id} item={item} />;
  });
  return (
    <div>
      {props.children}
      {items}
    </div>
  );
};
export default NewsList;
