import { FC } from "react";

import styles from "./styles.module.scss";

interface PriceProps {
  price: number;
}
export const Price: FC<PriceProps> = ({ price }) => {
  return (
    <p className={styles.price}>
      {Math.floor(price * 70)} ₽ <span>/шт.</span>
    </p>
  );
};
