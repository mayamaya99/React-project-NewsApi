import React from "react";
import ContentCard from "../ContentCard";
import { Container } from '@material-ui/core'
import './content.css'
const NewsContents = ({ newsArray, newsResults, loadItems, setLoadItems}) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="loadMessage">
          <span className="loadText">Democracy Dies in the dark</span>
        </div>
        {newsArray.map((newsItem) => (
          <ContentCard newsItem={newsItem} key={newsItem.title} />
        ))}

        {loadItems <= newsResults && (
          <>
            <button
              className="button"
              onClick={() => setLoadItems(loadItems + 10)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContents;
