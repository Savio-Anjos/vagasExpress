"use client";

import { useState, FormEvent, useEffect } from "react";
import { updateRecruiter } from "@/services/recruiters";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function CompleteRecruiterProfile() {
  const [recruiterId, setRecruiterId] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedRecruiterId = localStorage.getItem("recruiterId");
    if (storedRecruiterId) {
      setRecruiterId(storedRecruiterId);
    } else {
      setErrorMessage("Recrutador não identificado. Faça login novamente.");
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!recruiterId || !phone || !jobTitle || !company) {
      setErrorMessage("Preencha todos os campos obrigatórios!");
      return;
    }

    try {
      await updateRecruiter({ id: recruiterId, phone, jobTitle, company });
      alert("Perfil atualizado com sucesso!");
      router.push("/myjobs");
    } catch (error: any) {
      console.error(
        "Erro na requisição:",
        error.response?.data || error.message
      );
      setErrorMessage(
        error.response?.data?.message || "Erro ao salvar o perfil."
      );
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Completar Perfil de Recrutador</h1>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

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
