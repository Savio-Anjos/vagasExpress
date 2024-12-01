"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation"; // Importa o hook useRouter
import { createRecruiter } from "@/services/recruiters";
import styles from "./page.module.css";

export default function SignupRecruiter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }

    try {
      await createRecruiter({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      alert("Cadastro realizado com sucesso!");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });

      router.push("/signup/recruiter/signin");
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.response?.data?.message || "Erro ao cadastrar.");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Cadastro de Recrutador</h1>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <div className={styles.field}>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome completo"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            title="A senha deve ter pelo menos 8 caracteres, incluindo um número e uma letra maiúscula."
            value={formData.password}
            onChange={handleChange}
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
            value={formData.confirmPassword}
            onChange={handleChange}
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
