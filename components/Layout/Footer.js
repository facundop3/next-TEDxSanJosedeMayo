import React from "react";

const Footer = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e82a0f"
          fillOpacity="1"
          d="M0,224L68.6,224L137.1,32L205.7,192L274.3,32L342.9,224L411.4,256L480,192L548.6,64L617.1,96L685.7,96L754.3,192L822.9,0L891.4,32L960,288L1028.6,0L1097.1,128L1165.7,64L1234.3,256L1302.9,288L1371.4,96L1440,128L1440,320L1371.4,320L1302.9,320L1234.3,320L1165.7,320L1097.1,320L1028.6,320L960,320L891.4,320L822.9,320L754.3,320L685.7,320L617.1,320L548.6,320L480,320L411.4,320L342.9,320L274.3,320L205.7,320L137.1,320L68.6,320L0,320Z"
        ></path>
      </svg>
      <footer>
        <div>icons goes here</div>
        <div>
          <h3>Ideas que conquistan</h3>
        </div>
      </footer>
      <style jsx>{`
        footer {
          background-color: #e82a0f;
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
        svg {
          margin-bottom: -46px;
        }
      `}</style>
    </div>
  );
};

export default Footer;
