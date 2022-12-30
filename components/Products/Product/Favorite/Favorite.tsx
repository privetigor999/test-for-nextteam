import { FC, useState } from "react";
import Image from "next/image";
import { useAppDispatch } from "../../../../hooks/hooks";

import favoriteActiveSvg from "./../../../../assets/favorite/favoriteActive.svg";
import favoriteInactiveSvg from "./../../../../assets/favorite/favoriteInactive.svg";
import styles from "./styles.module.scss";

import { IProduct } from "../../../../store/products/product.type";

interface FavoriteProps {
  product: IProduct;
}
export const Favorite: FC<FavoriteProps> = ({ product }) => {
  const { addFavorite } = useAppDispatch();
  const [toggleFav, setToggleFav] = useState(false);
  const handleClickFavoriteBtn = () => {
    setToggleFav((prev) => !prev);
    addFavorite(product);
  };
  return (
    <div
      className={
        toggleFav ? styles.favoriteBlockActive : styles.favoriteBlockInactive
      }
      onClick={handleClickFavoriteBtn}
    >
      <Image
        src={toggleFav ? favoriteActiveSvg : favoriteInactiveSvg}
        width={40}
        height={40}
        alt="favorite"
      />
    </div>
  );
};
