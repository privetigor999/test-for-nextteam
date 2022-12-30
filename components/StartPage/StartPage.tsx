import { FC } from "react";
import { useGetProductsQuery } from "../../store/products/products.api";
import { Loading } from "../Loading/Loading";
import { Products } from "../Products/Products";

import styles from "./styles.module.scss";

export const StartPage: FC = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  return (
    <div className={styles.wrapper}>
      {isLoading && <Loading />}
      {data && <Products products={data} />}
    </div>
  );
};
