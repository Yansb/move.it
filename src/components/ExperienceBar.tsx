import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import s from '../styles/components/ExperienceBar.module.scss'

export function ExperienceBar() {
  const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return(
    <header className={s.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{width: `${percentToNextLevel}%`}} />

        <span className={s.currentExperience} style={{left: `${percentToNextLevel}%`}}>{currentExperience} xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}