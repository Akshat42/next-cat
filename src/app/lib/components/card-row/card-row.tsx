import { DataModel } from "../../models/data-model";
import { Card } from "../card/card";
import classes from "./card-row.module.css";

interface CardRowProps {
  rowId: string;
  cards: DataModel[];
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
}

const CardRow: React.FC<CardRowProps> = ({
  cards,
  onDrop,
  onDragOver,
  rowId,
}) => {
  return (
    <div className={classes.cardRow} onDrop={onDrop} onDragOver={onDragOver}>
      {cards.map((card) => (
        <Card
          key={card.id}
          onDragStart={(e) => {
            e.dataTransfer.setData("cardId", card.id);
            e.dataTransfer.setData("sourceRow", rowId);
          }}
          title={card.title}
          imageUrl={card.imageUrl}
          altText={card.title}
        />
      ))}
    </div>
  );
};

export default CardRow;
