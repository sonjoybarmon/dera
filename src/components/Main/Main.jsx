// import components
import Header from "./Header/Header";
import styles from "./Main.module.scss";
import CustomTable from "./Table/Table";

const Main = () => {
  return (
    <div className={styles._wrapper}>
      <Header />
      <CustomTable />
    </div>
  );
};

export default Main;
