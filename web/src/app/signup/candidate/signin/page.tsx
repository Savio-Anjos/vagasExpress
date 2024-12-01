"use client";

import { FormEvent } from "react";
import styles from "./page.module.css";

export default function SignInCandidate() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Formulário enviado!");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <p className={styles.subtitle}>Acesse sua conta de candidato</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={styles.input}
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className={styles.input}
            placeholder="Digite sua senha"
          />
        </div>
        <button type="submit" className={styles.button}>
          Entrar
        </button>
      </form>
    </div>
  );
}
