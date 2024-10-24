"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./card.module.css";
import cloudinaryLoader from "../../util/cloudinary-loader";
import { grayPlaceholder } from "../../util/blur-data-url";

interface CardProps {
  title: string;
  imageUrl: string;
  altText: string;
}

export const Card: React.FC<CardProps> = ({ title, imageUrl, altText }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOverlayOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOverlayOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOverlayOpen, handleKeyDown]);

  return (
    <>
      <div className={styles.card} onClick={() => setIsOverlayOpen(true)}>
        <h2 className={styles.header}>{title}</h2>
        <div className={styles.cardContainer}>
          <Image
            className={styles.image}
            src={imageUrl}
            alt={altText}
            quality={100}
            width={200}
            height={200}
            loader={cloudinaryLoader}
            placeholder="blur"
            blurDataURL={grayPlaceholder}
            sizes="33vw"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
      {isOverlayOpen && (
        <div className={styles.overlay} onClick={() => setIsOverlayOpen(false)}>
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
      )}
    </>
  );
};
