"use client";
import data from "../../constants/data";
import { Card } from "../card/card";
import styles from "./cats.module.css";

const Cats: React.FC = () => {
  return (
    <article className={styles.cardContainer}>
      {data.map((catData, index) => {
        return (
          <Card
            key={catData.title}
            imageUrl={catData.imageUrl}
            title={catData.title}
            altText={catData.type}
          />
        );
      })}
    </article>
  );
};

export default Cats;
