import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head';

import s from "../styles/pages/Home.module.scss"
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

    <ExperienceBar/>
    <section>
      <div>
        <Profile />
        <CompletedChallenges />
        <Countdown />
      </div>
      <div>
        <ChallengeBox />
      </div>
    </section>
    </div>
  )
}
