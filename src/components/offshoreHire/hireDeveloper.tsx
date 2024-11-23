import React from 'react'
import styles from './offshoreHire.module.scss'
import { hireDeveloperPositions, jobPositions } from '../helper/utils'
import Image from 'next/image'

const HireDeveloper = () => {
  return (
    <div className={styles.jobPositionMainWrapper}>
      {hireDeveloperPositions.map((pos, index) => (
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
          </div>
          <button className={styles.getInTouchBtn}>Hire Now</button>
        </div>
      ))}
    </div>
  )
}

export default HireDeveloper
