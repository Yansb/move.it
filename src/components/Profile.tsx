import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import s from '../styles/components/Profile.module.scss';

export function Profile(){
  const {level} = useContext(ChallengesContext);

  return(
    <div className={s.profileContainer}>
      <img src="https://github.com/yansb.png" alt="Yan Santana" width={"5.5rem"} height={"5.5rem"}/>
      <div>
        <strong>Yan Santana</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}