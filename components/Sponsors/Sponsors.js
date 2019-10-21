import React from "react";
import BlobCard from "../Card/BlobCard";
const Sponsors = props => {
  return (
    <div>
      <BlobCard text="Sponsors:" left={33} bottom={44} />

      <style jsx>{`
        div div {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0.5em;
        }
        div h1 {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Sponsors;
