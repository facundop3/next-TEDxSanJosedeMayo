import React from "react";
import Card from "./Card";
import WabyCard from "./WabyCard";

const MediaCard = props => {
  const { title, content, youtubeUrl } = props;
  return (
    <Card>
      <div>
        <div>
          <iframe
            width="100%"
            height="100%"
            src={youtubeUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <style jsx>
        {`
          div {
            display: inline-flex;
            flex-direction: column;
            max-width: 570px;
            align-items: baseline;
          }
          div div {
            height: 315px;
            width: 560px;
          }
          p {
            min-height: 270px;
          }
        `}
      </style>
    </Card>
  );
};

export default MediaCard;
