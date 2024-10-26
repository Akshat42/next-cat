"use client";
import Image from "next/image";
import styles from "./card.module.css";
import cloudinaryLoader from "../../util/cloudinary-loader";
import { grayPlaceholder } from "../../util/blur-data-url";
import { useImageOverlay } from "../../hooks/useKyedownClick";
import CardModal from "../card-modal/card-modal";

interface CardProps {
  title: string;
  imageUrl: string;
  altText: string;
  onDragStart: (e: React.DragEvent) => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  altText,
  onDragStart,
}) => {
  const { isOverlayOpen, openOverlay } = useImageOverlay();
  function handleOpenOverlay() {
    openOverlay();
  }

  return (
    <>
      <div className={styles.card} draggable onDragStart={onDragStart}>
        <h2 className={styles.header}>{title}</h2>
        <div className={styles.cardContainer}>
          <Image
            className={styles.image}
            onClick={handleOpenOverlay}
            src={imageUrl}
            alt={altText}
            quality={100}
            width={200}
            height={200}
            loader={cloudinaryLoader}
            placeholder="blur"
            blurDataURL={grayPlaceholder}
            sizes="33vw"
          />
        </div>
      </div>
      {isOverlayOpen && (
        <CardModal
          imageUrl={imageUrl}
          altText={altText}
          handleOpenOverlay={handleOpenOverlay}
        />
      )}
    </>
  );
};
