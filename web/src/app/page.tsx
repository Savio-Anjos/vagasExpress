import Image from "next/image";
import styles from "./page.module.css";
import Logo from "../../public/logo.png";

export default function Home() {
  return (
    <main className={styles.container}>
      <Image width={350} src={Logo} alt="Logo" />
      <div className={styles.buttonsContainer}>
        <button type="button" className={styles.buttonRecruiter}>
          Quero me candidatar como Recrutador
        </button>
        <button type="button" className={styles.buttonCandidate}>
          Quero me candidatar como Candidato
        </button>
      </div>
    </main>
  );
}
