"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { authenticateCandidate } from "@/services/candidates";
import styles from "./page.module.css";

export default function SignInCandidate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await authenticateCandidate({ email, password });

      const { id, token } = response;

      if (id && token) {
        localStorage.setItem("candidateId", id);
        localStorage.setItem("token", token);

        router.push("/signup/candidate/complete");
      } else {
        setErrorMessage("Erro ao obter o token ou ID.");
      }
    } catch (error: any) {
      console.error("Erro ao autenticar:", error);
      setErrorMessage(error.response?.data?.message || "Erro ao autenticar.");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Login</h1>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <div className={styles.field}>
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Senha *</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          Entrar
        </button>
      </form>
    </div>
  );
}
