import React from "react";
import Card from "./Card/Card";
const Team = () => {
  const members = ["Diego Barboza", "Héctor Cotelo", "Facundo Petre"];

  return (
    <div>
      <h1>Nuestro Equipo: </h1>
      <div>
        {members.map(memberName => (
          <Card key={memberName}>{memberName}</Card>
        ))}
      </div>

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

export default Team;
