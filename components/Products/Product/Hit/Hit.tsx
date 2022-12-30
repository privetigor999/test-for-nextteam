import { FC } from "react";

import styles from "./styles.module.scss";

export const Hit: FC = () => {
  return (
    <div className={styles.hitWrapper}>
      <div className={styles.hitDark} />
      <p>Хит</p>
    </div>
  );
};
