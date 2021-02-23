import s from '../styles/components/Profile.module.scss';

export function Profile(){
  return(
    <div className={s.profileContainer}>
      <img src="https://github.com/yansb.png" alt="Yan Santana"/>
      <div>
        <strong>Yan Santana</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}