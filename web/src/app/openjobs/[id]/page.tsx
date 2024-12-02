"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function JobDetails() {
  const job = {
    id: "1",
    title: "Desenvolvedor Front-end",
    description:
      "Estamos buscando um desenvolvedor Front-end para trabalhar com React e outras tecnologias modernas. O candidato deve ser capaz de criar interfaces de usuário responsivas e amigáveis.",
    requiredSkills: "React, HTML, CSS, JavaScript, Git",
    desiredSkills: "Node.js, TypeScript, Docker",
    experience: 12,
    location: "São Paulo, SP",
    salary: "R$ 5.000 - R$ 7.000",
    contractType: "CLT",
    openingDate: "2024-12-01",
    closingDate: "2024-12-15",
    recruiter: "João Souza",
    company: "Tech Solutions",
  };

  const [isApplied, setIsApplied] = useState(false);

  const handleApply = () => {
    setIsApplied(true);
    alert("Você se inscreveu na vaga!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.jobCard}>
        <h2>{job.title}</h2>
        <p>
          <strong>Descrição:</strong> {job.description}
        </p>
        <p>
          <strong>Habilidades Requeridas:</strong> {job.requiredSkills}
        </p>
        <p>
          <strong>Habilidades Desejáveis:</strong> {job.desiredSkills}
        </p>
        <p>
          <strong>Experiência Necessária:</strong> {job.experience} meses
        </p>
        <p>
          <strong>Localização:</strong> {job.location}
        </p>
        <p>
          <strong>Faixa Salarial:</strong> {job.salary}
        </p>
        <p>
          <strong>Tipo de Contrato:</strong> {job.contractType}
        </p>
        <p>
          <strong>Data de Abertura:</strong> {job.openingDate}
        </p>
        <p>
          <strong>Data de Fechamento:</strong> {job.closingDate}
        </p>
        <p>
          <strong>Recrutador:</strong> {job.recruiter}
        </p>
        <p>
          <strong>Empresa:</strong> {job.company}
        </p>
        <div className={styles.actions}>
          {isApplied ? (
            <span className={styles.appliedText}>
              Você já está inscrito nesta vaga!
            </span>
          ) : (
            <button className={styles.button} onClick={handleApply}>
              Inscrever-se
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
