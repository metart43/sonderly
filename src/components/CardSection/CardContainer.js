import React from "react";
import styled from "styled-components";
import Card from "../Card/CardWrapper";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  gap: 20px;
  margin: 75px auto 112px auto;
`;

const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const DoubleCardRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const cardsToRender = [];
const cardsArray = Array.from({ length: 9 }, (v, i) => ({}));

let rowCounter = 0;
for (let index = 0; index < cardsArray.length; index++) {
  const card = cardsArray[index];
  if (Array.isArray(cardsToRender[rowCounter])) cardsToRender[rowCounter] = [...cardsToRender[rowCounter]];
  else cardsToRender[rowCounter] = [];
  cardsToRender[rowCounter].push(card);
 
  if (index > 0 && (index + 1) % 3 === 0) {
    rowCounter += 1;
  }
}

console.log("cards", cardsToRender, cardsArray);
const CardContainer = () => {
  return (
    <Wrapper>
      {cardsToRender.map((row, rowIndex) => 
        <CardRow key={rowIndex}>
          {row.map((card, cardIndex) => {
            const alignment = cardIndex === 0 ? "column" : "row-reverse";
            const size = cardIndex === 0 ? 434 : 654;
            if (cardIndex === 0) {
              return (
                <Card
                  size={size}
                  key={cardIndex}
                  alignment={alignment}
                />
              );
            }
            else if (cardIndex === 1) {
              return (
                <DoubleCardRow>
                  <Card
                    size={size}
                    key={cardIndex}
                    alignment={alignment}
                  />
                  <Card
                    size={size}
                    key={cardIndex}
                    alignment={alignment}
                  />
                </DoubleCardRow>
              );
            }
            else return null;
          })}
        </CardRow>)}
    </Wrapper>
  );
};

export default CardContainer;