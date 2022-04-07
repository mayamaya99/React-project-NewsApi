import React from 'react'
import './ContentCard.css'
const ContentCard = ({ newsItem }) => {
    const fulldate = new Date(newsItem.publishedAt);
    console.log(fulldate);
    const date = fulldate.toString().split(" ");
    console.log(date);
    const hour = parseInt(date[4].substring(0, 2));
    const time = hour > 12 ? true : false;
    return (
        <div className='contentCard'>
            <img
                src={
                    newsItem.urlToImage
                        ? newsItem.urlToImage
                        : `https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:1400/p:16x9/news_1920x1080.webp`
                }
                className="newsImage"
            />

            <div className="newsText">
                <span className="title">
                    {newsItem.title}

                </span>
                <br />
                <span className="author">

                    <a href={newsItem.url} target="_blank">
                        source
                    </a>
                    {" "}
                    <span className="muted">
                        by {newsItem.author ? newsItem.author : "Unknown"} /{" "}
                        {
                            time
                                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                                : `${hour}:${date[4].substring(3, 5)} am`
                        }{" "}
                        on {date[2]} {date[1]} {date[3]}, {date[0]}

                    </span>
                </span>
                <div className="contentText">
                    <div className="description">
                        {newsItem.description}{" "}
                        <span className="detail">
                            <br />
                            {" "}
                            Read more at {" "}

                            <a href={newsItem.url} target="_blank" style={{ fontFamily: 'cursive' }}>
                                <b>{newsItem.source.name}</b>
                            </a>
                        </span>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default ContentCard