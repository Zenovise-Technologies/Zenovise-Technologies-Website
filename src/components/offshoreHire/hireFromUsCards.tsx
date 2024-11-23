import React from 'react'
import styles from './offshoreHire.module.scss'
import { hireFromUsReasons } from '../helper/utils'
import Image from 'next/image'

const HireFromUsCards = () => {
  return (
    <div className={styles.hireFromUsMainWrapper}>
      {hireFromUsReasons.map((reasons, index) => (
        <div key={index} className={styles.hireFromUsCardWrapper}>
          <div className={styles.hireFromUsContentWrapper}>
            <p className={styles.mainContentText}>{reasons.title}</p>
            <p className={styles.mainContentSubText}>{reasons.subTitle}</p>
          </div>
          <div className={styles.hireFromUsImage}>
            <Image
                className={styles.mainImage}
                src={`/assets/images/${reasons.imgName}.svg`}
                alt={reasons.imgName}
                width={100}
                height={100}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default HireFromUsCards
