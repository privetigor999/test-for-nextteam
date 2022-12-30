import { FC } from "react";
import Image from "next/image";
import { IProduct } from "../../../store/products/product.type";
import { Cart } from "./Cart/Cart";
import { Favorite } from "./Favorite/Favorite";
import { Title } from "./Title/Title";
import { CategoryBlock } from "./CategoryBlock/CategoryBlock";
import { Hit } from "./Hit/Hit";
import { Price } from "./Price/Price";

import styles from "./styles.module.scss";

interface ProductProps {
  product: IProduct;
}

export const Product: FC<ProductProps> = ({ product }) => {
  const { title, image, category, rating, price } = product;

  return (
    <div className={styles.productWrapper}>
      <Image
        src={image}
        width={220}
        height={220}
        alt={title}
        priority={true}
        className={styles.image}
      />
      <CategoryBlock category={category} rating={rating} />
      <Title title={title} />
      <Price price={price} />
      <div className={styles.cartAndFavoriteBlock}>
        <Cart product={product} />
        <Favorite product={product} />
      </div>
      {rating.count > 300 && <Hit />}
    </div>
  );
};
