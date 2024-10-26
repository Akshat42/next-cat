import Image from "next/image";
import React from "react";
import cloudinaryLoader from "../../util/cloudinary-loader";
import styles from "./card-modal.module.css";
import { grayPlaceholder } from "../../util/blur-data-url";

interface CardModalProps {
  imageUrl: string;
  altText: string;
  handleOpenOverlay: () => void;
}

const CardModal: React.FC<CardModalProps> = ({
  imageUrl,
  altText,
  handleOpenOverlay,
}) => {
  return (
    <div className={styles.overlay} onClick={handleOpenOverlay}>
      <div className={styles.overlayContent}>
        <Image
          src={imageUrl}
          alt={altText}
          sizes="80vw"
          fill
          objectFit="contain"
          loader={cloudinaryLoader}
          placeholder="blur"
          blurDataURL={grayPlaceholder}
        />
      </div>
    </div>
  );
};

export default CardModal;
