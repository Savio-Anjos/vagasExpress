"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function OpenJobs() {
  const [jobs, setJobs] = useState([
    {
      id: "1",
      title: "Desenvolvedor Front-end",
      location: "São Paulo",
      salary: "R$ 5.000 - R$ 7.000",
      closingDate: "2024-12-15",
      recruiter: "João Souza",
      company: "Tech Solutions",
    },
    {
      id: "2",
      title: "Analista de Sistemas",
      location: "Remoto",
      salary: "R$ 4.000 - R$ 6.000",
      closingDate: "2024-12-20",
      recruiter: "Maria Oliveira",
      company: "Web Solutions",
    },
    {
      id: "1",
      title: "Desenvolvedor Front-end",
      location: "São Paulo",
      salary: "R$ 5.000 - R$ 7.000",
      closingDate: "2024-12-15",
      recruiter: "João Souza",
      company: "Tech Solutions",
    },
    {
      id: "2",
      title: "Analista de Sistemas",
      location: "Remoto",
      salary: "R$ 4.000 - R$ 6.000",
      closingDate: "2024-12-20",
      recruiter: "Maria Oliveira",
      company: "Web Solutions",
    },
  ]);

  const handleApply = (jobId: string) => {
    console.log(`Candidato se inscreveu na vaga com ID: ${jobId}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Vagas Abertas</span>
      </div>
      <div className={styles.jobsList}>
        {jobs.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <h2>{job.title}</h2>
            <p>
              <strong>Localização:</strong> {job.location}
            </p>
            <p>
              <strong>Faixa Salarial:</strong> {job.salary}
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
            <button
              className={styles.button}
              onClick={() => handleApply(job.id)}
            >
              Inscrever-se
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
