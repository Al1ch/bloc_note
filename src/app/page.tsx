import Button from "@/components/Buttons/Button/Button";
import styles from "./page.module.scss";
import AddNoteButton from "@/components/Buttons/Button/AddNoteButton.tsx/AddNoteButton";
export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <AddNoteButton />
      </header>
      <main className={styles.main}>
        <p className={styles.sentence}>
          Click a note on the left to view something !
        </p>
      </main>
    </div>
  );
}
