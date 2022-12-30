import { FC } from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import banner2 from "./../../../../assets/banners/banner2.png";

export const Banner2: FC = () => {
  return (
    <div className={styles.banner2}>
      <div className={styles.bannerInfo}>
        <div className={styles.saleBlock2}>
          <div className={styles.saleWrapper}>
            <p className={styles.value}>10%</p>
          </div>
        </div>
        <p>
          Скидка <br /> на периферию для компьютера
        </p>
        <div className={styles.button}>
          <p className={styles.choose}>Выбрать</p>
          <div className={styles.circle} />
        </div>
      </div>
      <div className={styles.image}>
        <Image src={banner2} width={190} height={140} alt="banner2" />
      </div>
    </div>
  );
};
