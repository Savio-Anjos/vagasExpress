"use client";

import { useState, FormEvent } from "react";
import styles from "./page.module.css";

export default function CompleteRecruiterProfile() {
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!phone || !jobTitle || !company) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    console.log({ phone, jobTitle, company });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Completar Perfil de Recrutador</h1>

        <div className={styles.field}>
          <label htmlFor="phone">Telefone para Contato *</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(XX) XXXXX-XXXX"
            required
            pattern="^\(\d{2}\) \d{5}-\d{4}$"
            title="Formato inválido. Exemplo: (11) 98765-4321"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="jobTitle">Cargo/Função no RH *</label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Ex: Gerente de RH"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="company">Empresa *</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Nome da empresa"
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          Salvar
        </button>
      </form>
    </div>
  );
}
