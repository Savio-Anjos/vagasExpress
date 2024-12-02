"use client";

import styles from "./page.module.css";

export default function MyJobs() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Minhas Vagas</span>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Localização</th>
            <th>Status</th>
            <th>Candidatos</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvedor Front-end</td>
            <td>São Paulo</td>
            <td>Aberto</td>
            <td>5</td>
            <td>
              <button className={styles.button}>Editar</button>
              <button className={styles.button}>Excluir</button>
              <button className={styles.button}>Ver Candidatos</button>
            </td>
          </tr>

          <tr>
            <td>Desenvolvedor Front-end</td>
            <td>São Paulo</td>
            <td>Aberto</td>
            <td>5</td>
            <td>
              <button className={styles.button}>Editar</button>
              <button className={styles.button}>Excluir</button>
              <button className={styles.button}>Ver Candidatos</button>
            </td>
          </tr>

          <tr>
            <td>Desenvolvedor Front-end</td>
            <td>São Paulo</td>
            <td>Aberto</td>
            <td>5</td>
            <td>
              <button className={styles.button}>Editar</button>
              <button className={styles.button}>Excluir</button>
              <button className={styles.button}>Ver Candidatos</button>
            </td>
          </tr>

          <tr>
            <td>Desenvolvedor Front-end</td>
            <td>São Paulo</td>
            <td>Aberto</td>
            <td>5</td>
            <td>
              <button className={styles.button}>Editar</button>
              <button className={styles.button}>Excluir</button>
              <button className={styles.button}>Ver Candidatos</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
