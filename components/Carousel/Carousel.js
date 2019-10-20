import React, { useEffect, useState } from "react";
import images2018 from "./2018";
const Carouserl = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setCurrentIndex((currentIndex + 1) % images2018.length),
      3000
    );
    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <style jsx>{`
        div {
          height: 100vh;
          width: 100%;
          background-image: url(${images2018[currentIndex]});
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

export default Carouserl;
