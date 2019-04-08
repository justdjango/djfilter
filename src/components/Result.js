import React from "react";

const Result = ({ journal }) => {
  return (
    <div>
      <li>
        <span>
          <b>Title:</b> {journal.title}{" "}
        </span>
        <span>
          <b>Author:</b> {journal.author.name}{" "}
        </span>
        <span>
          <b>Categories:</b>
          {journal.categories.map(c => {
            return <span key={c}>{c} </span>;
          })}
        </span>
        <span>
          <b>Publish date:</b> {journal.publish_date}{" "}
        </span>
        <span>
          <b>View count:</b> {journal.views}{" "}
        </span>
        <span>
          <b>Reviewed: </b>
          {`${journal.reviewed}`}{" "}
        </span>
      </li>
      <hr />
    </div>
  );
};

export default Result;
