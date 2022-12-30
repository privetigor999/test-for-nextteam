import { FC } from "react";
import { ArrowBlock } from "./ArrowBlock/ArrowBlock";
import { Banner2 } from "./Banner2/Banner2";
import { Banner1 } from "./Banner1/Banner1";

import styles from "./styles.module.scss";

export const FirstBlock: FC = () => {
  return (
    <div className={styles.firstBlockWrrapper}>
      <div className={styles.title}>Всё для комфортной работы</div>
      <ArrowBlock />
      <Banner1 />
      <Banner2 />
    </div>
  );
};
