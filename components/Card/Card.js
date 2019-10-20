import React from "react";

const Card = props => {
  const { shadow } = props;
  return (
    <div>
      {props.children}
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1.5em;
          background-color: white;
          box-shadow: ${shadow ? "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px" : ""};
        }
      `}</style>
    </div>
  );
};

export default Card;
