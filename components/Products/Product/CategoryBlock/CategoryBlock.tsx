import { FC } from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import filledStar from "./../../../../assets/star/filledStar.svg";
import emptyStar from "./../../../../assets/star/emptyStar.svg";

interface CategoryBlockProps {
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const CategoryBlock: FC<CategoryBlockProps> = ({ category, rating }) => {
  const fillStars = (num: number): string[] => {
    const result = [];
    for (let i = 0; i < num; i++) {
      result.push("+");
    }

    if (result.length < 5) {
      for (let i = result.length; i < 5; i++) {
        result.push("-");
      }
    }
    return result;
  };

  const checkCountOfRate = (num: number): string => {
    const lastNumber = +String(num)[String(num).length - 1];
    switch (lastNumber) {
      case 1:
        return "отзыв";
      case 2:
      case 3:
      case 4:
        return "отзыва";
      default:
        return "отзывов";
    }
  };
  return (
    <div className={styles.categoryBlock}>
      <p className={styles.category}>{category}</p>
      <div className={styles.ratingBlock}>
        <div className={styles.rateBlock}>
          {fillStars(Math.round(rating.rate)).map((elem) => (
            <div key={Math.random()} className={styles.rate}>
              {elem === "+" ? (
                <Image
                  height={10}
                  width={10}
                  src={filledStar}
                  alt="+"
                  className={styles.star}
                />
              ) : (
                <Image
                  height={10}
                  width={10}
                  src={emptyStar}
                  alt="-"
                  className={styles.star}
                />
              )}
            </div>
          ))}
        </div>
        <p className={styles.count}>
          {rating.count} {checkCountOfRate(rating.count)}
        </p>
      </div>
    </div>
  );
};
