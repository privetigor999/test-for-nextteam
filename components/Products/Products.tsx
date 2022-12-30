import { FC } from "react";
import { IProduct } from "../../store/products/product.type";
import { FirstBlock } from "./FirstBlock/FirstBlock";
import { Product } from "./Product/Product";

import styles from "./styles.module.scss";

interface ProductsProps {
  products: IProduct[];
}

export const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <div className={styles.prodcutsWrapper}>
      <FirstBlock />
      {products.map((prod) => (
        <Product key={prod.id} product={prod} />
      ))}
    </div>
  );
};
