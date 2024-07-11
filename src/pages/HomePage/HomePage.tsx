import { FC } from "react";
import styles from "./HomePage.module.scss";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  return (
    <div className={styles.wrapper}>
      Это домашняя страница. Здесь пока ничего нет...
    </div>
  );
};

export default HomePage;
