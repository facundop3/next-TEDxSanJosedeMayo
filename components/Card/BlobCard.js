import React from "react";

const BolbCard = props => {
  const {
    text,
    children,
    bgColor = "#fff",
    color = "#000",
    left,
    bottom
  } = props;
  return (
    <div>
      <h1>{text}</h1>
      <svg
        width="600"
        height="500"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path
            d="M118.9,-93.5C142.5,-65.3,141.9,-16.5,127.1,21.3C112.3,59.1,83.3,85.8,50,100.7C16.6,115.6,-21,118.6,-72.4,109.5C-123.9,100.4,-189.2,79.3,-198.7,43.6C-208.2,8,-162,-42.2,-119.6,-74.7C-77.1,-107.2,-38.6,-122.1,4.6,-125.7C47.7,-129.4,95.4,-121.7,118.9,-93.5Z"
            fill={bgColor}
          />
        </g>
      </svg>
      {children}

      <style jsx>{`
        div {
          position: relative;
        }
        h1 {
          color: ${color};
          position: absolute;
          bottom: ${bottom}%;
          left: ${left}%;
        }
      `}</style>
    </div>
  );
};

export default BolbCard;
