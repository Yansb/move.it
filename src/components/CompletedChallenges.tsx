import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import s from '../styles/components/CompletedChallenges.module.scss';

export function CompletedChallenges(){
  const {challengesCompleted} = useContext(ChallengesContext);
  return(
    <div className={s.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}