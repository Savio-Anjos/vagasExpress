"use client";

import { useState, FormEvent } from "react";
import styles from "./page.module.css";

export default function CompleteProfile() {
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [experienceTime, setExperienceTime] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!experience || !experienceTime || !phone) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    console.log({
      experience,
      skills,
      experienceTime,
      salaryMin,
      salaryMax,
      phone,
    });
  };

  const handleAddSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) {
      setSkills((prev) => [...prev, skill]);
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills((prev) => prev.filter((s) => s !== skill));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Completar Perfil</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="experience" className={styles.label}>
            Experiência Profissional *
          </label>
          <textarea
            id="experience"
            className={styles.textarea}
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Descreva seu histórico profissional"
            required
          ></textarea>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="skills" className={styles.label}>
            Habilidades
          </label>
          <div className={styles.tagsContainer}>
            {skills.map((skill) => (
              <span
                key={skill}
                className={styles.tag}
                onClick={() => handleRemoveSkill(skill)}
              >
                {skill} ×
              </span>
            ))}
          </div>
          <input
            type="text"
            id="skills"
            className={styles.input}
            placeholder="Digite uma habilidade e pressione Enter"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddSkill(e.currentTarget.value);
                e.currentTarget.value = "";
              }
            }}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="experienceTime" className={styles.label}>
            Tempo de Experiência *
          </label>
          <select
            id="experienceTime"
            className={styles.select}
            value={experienceTime}
            onChange={(e) => setExperienceTime(e.target.value)}
            required
          >
            <option value="">Selecione uma opção</option>
            <option value="lessThan6">Menos de 6 meses</option>
            <option value="6-12">6-12 meses</option>
            <option value="12-24">12-24 meses</option>
            <option value="moreThan24">+24 meses</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="salaryMin" className={styles.label}>
            Faixa Salarial Esperada
          </label>
          <div className={styles.salaryContainer}>
            <input
              type="number"
              id="salaryMin"
              className={styles.input}
              value={salaryMin}
              onChange={(e) => setSalaryMin(e.target.value)}
              placeholder="Mínimo"
            />
            <input
              type="number"
              id="salaryMax"
              className={styles.input}
              value={salaryMax}
              onChange={(e) => setSalaryMax(e.target.value)}
              placeholder="Máximo"
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phone" className={styles.label}>
            Telefone *
          </label>
          <input
            type="text"
            id="phone"
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(XX) XXXXX-XXXX"
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
