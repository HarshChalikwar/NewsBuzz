import React from "react";

const NewsItem = (props) => {
  const badgeStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: '1',
    backgroundColor: 'red',
    padding: '5px 10px',
    borderRadius: '5px',
    color: 'white',
  };

  const cardStyle = {
    height: '400px', // Fixed height for the card
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  };

  const imageStyle = {
    height: '150px',
    objectFit: 'cover',
  };

  const cardBodyStyle = {
    flex: '1 1 auto',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const textStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3, // Number of lines to show before truncating
    WebkitBoxOrient: 'vertical',
  };

  const { title, description, ImageUrl, newsUrl, author, date, source } = props;
  const defaultImage = "/NewsBuzz.png";

  return (
    <div className="my-3">
      <div className="card" style={cardStyle}>
        <span className="badge" style={badgeStyle}>
          {source}
        </span>
        <img src={ImageUrl || defaultImage} className="card-img-top" alt="..." style={imageStyle} />
        <div className="card-body" style={cardBodyStyle}>
          <h5 className="card-title" style={textStyle}>{title}...</h5>
          <p className="card-text" style={textStyle}>{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
