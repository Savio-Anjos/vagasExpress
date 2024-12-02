"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { updateCandidate } from "@/services/candidates";
import styles from "./page.module.css";

export default function CompleteProfile() {
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [experienceTime, setExperienceTime] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!experience || !experienceTime || !phone) {
      setErrorMessage("Preencha todos os campos obrigatórios!");
      return;
    }

    try {
      const candidateId = localStorage.getItem("candidateId");
      const token = localStorage.getItem("token");

      if (!candidateId || !token) {
        setErrorMessage("Usuário não autenticado.");
        return;
      }

      await updateCandidate({
        id: candidateId,
        experience,
        skills,
        experienceTime,
        salaryMin,
        salaryMax,
        phone,
      });

      alert("Perfil atualizado com sucesso!");
      router.push("/profile/candidate");
    } catch (error: any) {
      console.error(error);
      setErrorMessage(
        error.response?.data?.message || "Erro ao salvar o perfil."
      );
    }
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
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Completar Perfil</h1>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <div className={styles.field}>
          <label htmlFor="experience">Experiência Profissional *</label>
          <textarea
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Descreva seu histórico profissional"
            required
          ></textarea>
        </div>

        <div className={styles.field}>
          <label htmlFor="skills">Habilidades</label>
          <div className={styles.skillsContainer}>
            {skills.map((skill) => (
              <span
                key={skill}
                className={styles.skillTag}
                onClick={() => handleRemoveSkill(skill)}
              >
                {skill} ×
              </span>
            ))}
          </div>
          <input
            type="text"
            id="skills"
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

        <div className={styles.field}>
          <label htmlFor="experienceTime">Tempo de Experiência *</label>
          <select
            id="experienceTime"
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

        <div className={styles.field}>
          <label htmlFor="salary">Faixa Salarial Esperada</label>
          <div className={styles.salaryContainer}>
            <input
              type="number"
              id="salaryMin"
              value={salaryMin}
              onChange={(e) => setSalaryMin(e.target.value)}
              placeholder="Mínimo"
            />
            <input
              type="number"
              id="salaryMax"
              value={salaryMax}
              onChange={(e) => setSalaryMax(e.target.value)}
              placeholder="Máximo"
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="phone">Telefone *</label>
          <input
            type="text"
            id="phone"
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
