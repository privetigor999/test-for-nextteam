import { FC, useState } from "react";
import { useAppDispatch } from "../../../../hooks/hooks";
import { IProduct } from "../../../../store/products/product.type";

import styles from "./styles.module.scss";

interface CartProps {
  product: IProduct;
}

export const Cart: FC<CartProps> = ({ product }) => {
  const { addProduct } = useAppDispatch();
  const [count, setCount] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const decrementCountProduct = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const toggleCart = (): void => {
    setAddedToCart((prev) => !prev);
    if (!addedToCart) {
      addProduct({ ...product, count });
    }
  };

  if (addedToCart) {
    return (
      <div className={styles.addedToCart} onClick={toggleCart}>
        В корзине
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.toCart} onClick={toggleCart}>
        В корзину
      </div>
      <div className={styles.countBlock}>
        <div
          className={styles.minusAndPlusBlock}
          onClick={decrementCountProduct}
        >
          <div className={styles.minus} />
        </div>

        <div className={styles.countOfProd}>{count}</div>

        <div
          className={styles.minusAndPlusBlock}
          onClick={() => setCount((prv) => prv + 1)}
        >
          <div className={styles.plus} />
        </div>
      </div>
    </div>
  );
};
