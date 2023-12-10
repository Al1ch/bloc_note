import SideBar from "@/components/SideBar/SideBar";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <main className={styles.main}>
      <SideBar />
      <div className={styles.body}>
        <p className={styles.sentence}>
          Click a note on the left to view something !
        </p>
      </div>
    </main>
  );
}
