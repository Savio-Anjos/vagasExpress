"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "João da Silva",
    email: "joao.silva@email.com",
    phone: "123-456-7890",
    experience: "Desenvolvedor Front-end",
    skills: ["React", "JavaScript", "CSS"],
    salaryExpectation: "5000",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Meu Perfil</h1>
      <div className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="phone">Telefone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="experience">Experiência Profissional</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="skills">Habilidades</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills.join(", ")}
            onChange={(e) =>
              setFormData({
                ...formData,
                skills: e.target.value.split(", "),
              })
            }
            disabled={!isEditing}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="salaryExpectation">Faixa Salarial Esperada</label>
          <input
            type="text"
            id="salaryExpectation"
            name="salaryExpectation"
            value={formData.salaryExpectation}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        <div className={styles.buttons}>
          {isEditing ? (
            <>
              <button onClick={handleSave} className={styles.saveButton}>
                Salvar
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className={styles.cancelButton}
              >
                Cancelar
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className={styles.editButton}
            >
              Editar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
