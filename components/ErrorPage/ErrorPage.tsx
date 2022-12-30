import { FC } from "react";

import styles from "./styles.module.scss";

export const ErrorPage: FC = () => {
  return <div className={styles.errorWrapper}>Ошибка загрузки данных</div>;
};
