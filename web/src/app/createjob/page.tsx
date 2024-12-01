"use client";

import { useState, FormEvent } from "react";
import styles from "./page.module.css";

export default function CreateJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState(0);
  const [openingDate, setOpeningDate] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [contractType, setContractType] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const jobData = {
      title,
      description,
      requiredSkills,
      location,
      experience,
      openingDate,
      closingDate,
      salaryMin,
      salaryMax,
      contractType,
    };

    console.log("Vaga cadastrada:", jobData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Cadastrar Nova Vaga</span>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Título da vaga"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Descrição da vaga"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <textarea
          placeholder="Habilidades Requeridas"
          value={requiredSkills}
          onChange={(e) => setRequiredSkills(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Localização"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Experiência Mínima (meses)"
          value={experience}
          onChange={(e) => setExperience(Number(e.target.value))}
          required
        />
        <input
          type="date"
          value={openingDate}
          onChange={(e) => setOpeningDate(e.target.value)}
          required
        />
        <input
          type="date"
          value={closingDate}
          onChange={(e) => setClosingDate(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Faixa Salarial Mínima"
          value={salaryMin}
          onChange={(e) => setSalaryMin(e.target.value)}
        />
        <input
          type="number"
          placeholder="Faixa Salarial Máxima"
          value={salaryMax}
          onChange={(e) => setSalaryMax(e.target.value)}
        />
        <select
          value={contractType}
          onChange={(e) => setContractType(e.target.value)}
          required
        >
          <option value="">Tipo de Contrato</option>
          <option value="CLT">CLT</option>
          <option value="PJ">PJ</option>
          <option value="Estágio">Estágio</option>
          <option value="Temporário">Temporário</option>
        </select>
        <button type="submit" className={styles.button}>
          Cadastrar Vaga
        </button>
      </form>
    </div>
  );
}
