import SideBar from "@/components/SideBar/SideBar";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.sentence}>
        Click a note on the left to view something !
      </p>
    </main>
  );
}
