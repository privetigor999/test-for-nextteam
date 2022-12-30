import { FC } from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import banner1 from "./../../../../assets/banners/banner1.png";

export const Banner1: FC = () => {
  return (
    <div className={styles.banner1}>
      <div className={styles.image}>
        <Image src={banner1} width={170} height={140} alt="banner1" />
      </div>
      <div className={styles.bannerInfo}>
        <div className={styles.saleBlock}>
          <div className={styles.saleWrapper}>
            <p className={styles.value}>-25%</p>
          </div>
        </div>
        <p>
          на товары <br /> для кабинета
        </p>
        <div className={styles.button}>
          <p className={styles.choose}>Выбрать</p>
          <div className={styles.circle} />
        </div>
      </div>
    </div>
  );
};
