import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>icons goes here</div>
      <div>Ideas que conquistsjhshhs</div>
      <style jsx>{`
        footer {
          background-color: rgb(232, 42, 15);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: white;
        }
        footer div {
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
