"use client";

import styles from "./page.module.css";

export default function JobCandidates() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Candidatos Inscritos</span>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Score</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>João Silva</td>
            <td>joao@email.com</td>
            <td>85</td>
            <td>
              <button className={styles.button}>Ver Detalhes</button>
            </td>
          </tr>

          <tr>
            <td>Maria Oliveira</td>
            <td>maria@email.com</td>
            <td>90</td>
            <td>
              <button className={styles.button}>Ver Detalhes</button>
            </td>
          </tr>

          <tr>
            <td>Maria Oliveira</td>
            <td>maria@email.com</td>
            <td>90</td>
            <td>
              <button className={styles.button}>Ver Detalhes</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
