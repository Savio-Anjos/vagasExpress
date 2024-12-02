import Image from "next/image";
import styles from "./page.module.css";
import Logo from "../../public/logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <Image width={250} src={Logo} alt="Logo" className={styles.logo} />
      <h1 className={styles.title}>Bem-vindo ao Vagas Express</h1>
      <p className={styles.subtitle}>Escolha como deseja se cadastrar:</p>
      <div className={styles.buttonsContainer}>
        <Link href="signup/recruiter/signup">
          <button type="button" className={styles.buttonRecruiter}>
            Quero me cadastrar como Recrutador
          </button>
        </Link>
        <Link href="signup/candidate/signup">
          <button type="button" className={styles.buttonCandidate}>
            Quero me cadastrar como Candidato
          </button>
        </Link>
      </div>
    </main>
  );
}
