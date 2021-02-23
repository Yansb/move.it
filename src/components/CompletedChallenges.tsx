import s from '../styles/components/CompletedChallenges.module.scss';

export function CompletedChallenges(){
  return(
    <div className={s.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  )
}