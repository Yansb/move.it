import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import s from "../styles/components/Countdown.module.scss";


export function Countdown(){
  const {
    minutes, 
    seconds, 
    resetCountdown, 
    startCountdown, 
    isActive, 
    hasFinished
  } = useContext(CountdownContext)

  

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');



  return(
    <div>
      <div className={s.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
          <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? 
        (
          <button disabled type="button" className={s.countDownButton} onClick={resetCountdown}>
            Ciclo encerrado
          </button>
        ) : (
          <>
            {
              isActive ?
                <button type="button" className={`${s.countDownButton} ${s.countDownButtonActive}`} onClick={resetCountdown}>
                  Abandonar ciclo
                </button>
              :
                <button type="button" className={s.countDownButton} onClick={startCountdown}>
                  Iniciar um ciclo
                </button>
            }
          </>
        )}

      
    </div>
  )
}