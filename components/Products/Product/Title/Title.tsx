import { FC } from "react";

import styles from "./styles.module.scss";

interface TitleProps {
  title: string;
}
export const Title: FC<TitleProps> = ({ title }) => {
  return <p className={styles.title}>{title}</p>;
};
