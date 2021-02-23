import s from '../styles/components/ExperienceBar.module.scss'

export function ExperienceBar() {
  return(
    <header className={s.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{width: "50%"}} />

        <span className={s.currentExperience} style={{left: "50%"}}>300 xp</span>
      </div>
      <span>600 xp</span>
    </header>
  );
}