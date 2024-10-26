"use client";
import { useState } from "react";
import data from "../../constants/data";
import { Card } from "../card/card";
import styles from "./cats.module.css";
import CardRow from "../card-row/card-row";

const Cats: React.FC = () => {
  const [firstRow, setFirstRow] = useState(data.slice(0, 3));
  const [secondRow, setSecondRow] = useState(data.slice(3, 5));

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent, targetRow: "1" | "2") => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("cardId");
    const sourceRow = e.dataTransfer.getData("sourceRow");

    const sourceCards = sourceRow === "1" ? firstRow : secondRow;
    const targetCards = targetRow === "1" ? firstRow : secondRow;

    const [movedCard] = sourceCards.filter((card) => card.id === cardId);

    if (!movedCard) return;

    if (sourceRow === targetRow) {
      const updatedCards = sourceCards.filter((card) => card.id !== cardId);
      const dropIndex = targetCards.findIndex(
        (card) => card.id === (e.target as HTMLElement).id
      );
      updatedCards.splice(dropIndex, 0, movedCard);

      if (targetRow === "1") {
        setFirstRow(updatedCards);
      } else {
        setSecondRow(updatedCards);
      }
    } else {
      const updatedSourceCards = sourceCards.filter(
        (card) => card.id !== cardId
      );
      const updatedTargetCards = [...targetCards, movedCard];

      if (sourceRow === "1") {
        setFirstRow(updatedSourceCards);
        setSecondRow(updatedTargetCards);
      } else {
        setSecondRow(updatedSourceCards);
        setFirstRow(updatedTargetCards);
      }
    }
  };

  return (
    <article className={styles.cardContainer}>
      <CardRow
        rowId="1"
        cards={firstRow}
        onDrop={(e) => onDrop(e, "1")}
        onDragOver={onDragOver}
      />

      <CardRow
        rowId="2"
        cards={secondRow}
        onDrop={(e) => onDrop(e, "2")}
        onDragOver={onDragOver}
      />
    </article>
  );
};

export default Cats;
