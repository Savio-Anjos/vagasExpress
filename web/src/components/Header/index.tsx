"use client";

import Link from "next/link";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <img src="/logo.png" alt="Logo" className={styles.logoImage} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href="/" className={styles.navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/myjobs" className={styles.navItem}>
              Minhas Vagas
            </Link>
          </li>
          <li>
            <Link href="/openjobs" className={styles.navItem}>
              Vagas Abertas
            </Link>
          </li>
          <li>
            <Link href="/profile" className={styles.navItem}>
              Meu Perfil
            </Link>
          </li>
          <li>
            <Link href="/logout" className={styles.navItem}>
              Sair
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
