import React from "react";

const Card = props => {
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
          box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
          margin: 0.25em;
        }
      `}</style>
    </div>
  );
};

export default Card;
