"use client";

import { FormEvent } from "react";
import styles from "./page.module.css";

export default function SignupCandidate() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Formulário enviado!");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Cadastro de Candidato</h1>
        <div className={styles.field}>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome completo"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Crie uma senha"
            pattern="(?=.*\d)(?=.*[A-Z]).{8,}"
            title="A senha deve ter pelo menos 8 caracteres, incluindo um número e uma letra maiúscula."
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="confirmPassword">Confirmação de Senha</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}
