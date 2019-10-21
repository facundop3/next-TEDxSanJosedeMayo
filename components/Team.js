import React from "react";
import Card from "./Card/Card";
import BlobCard from "./Card/BlobCard";
const Team = () => {
  const members = ["Diego Barboza", "Héctor Cotelo", "Facundo Petre"];

  return (
    <div>
      <BlobCard text="Nuestro Equipo: " left={25} bottom={50}>
        <div>
          {members.map(memberName => (
            <Card key={memberName} shadow>
              {memberName}
            </Card>
          ))}
        </div>
      </BlobCard>

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
