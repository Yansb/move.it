import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import s from '../styles/components/ChallengeBox.module.scss';

export function ChallengeBox(){
  const {activeChallenge, resetChallenge} = useContext(ChallengesContext);


  return (
    <div className={s.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={s.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={s.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
              className={s.challengeCompletedButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (  
        <div className={s.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="/icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  )
}