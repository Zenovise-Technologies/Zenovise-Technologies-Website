import React from 'react'
import styles from './careers.module.scss'
import { jobPositions } from '../helper/utils'
import Image from 'next/image'

const JobPositions = () => {
  return (
    <div className={styles.jobPositionMainWrapper}>
      {jobPositions.map((pos, index) => (
        <div key={index} className={styles.jobPositionCardWrapper}>
          <div className={styles.jobPositionContentWrapper}>
            <div className={styles.mainContent}>
              <Image
                className={styles.mainImage}
                src={`/assets/images/${pos.logo}.svg`}
                alt={pos.logo}
                width={52}
                height={52}
              />
              <p className={styles.mainContentText}>{pos.position}</p>
            </div>
            <p className={styles.vacancyText}><span className={styles.experienceText}>{pos.experience}</span> | Vacancy - {pos.vacancy}</p>
          </div>
          <button className={styles.getInTouchBtn}>Get In Touch</button>
        </div>
      ))}
    </div>
  )
}

export default JobPositions
