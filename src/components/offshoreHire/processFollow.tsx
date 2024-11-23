import React from 'react'
import styles from './offshoreHire.module.scss'
import { processFollowSteps } from '../helper/utils'
import Image from 'next/image'

const ProcessFollow = () => {
  return (
    <div className={styles.processFollowWrapper}>
      {processFollowSteps.map((step, index) => (
        <div key={index} className={styles.bgBox}>
            <div className={styles.processFollowBoxOuterWrapper}>
                <div className={styles.processFollowBoxWrapper}>
                    <div className={styles.processFollowBullet}>{index + 1}</div>
                    <p className={styles.processFollowTitle}>{step.title}</p>
                    <p className={styles.processFollowSubTitle}>{step.subTitle}</p>
                    <div className={styles.imageWrapper}>
                        <Image 
                            width={182}
                            height={182}
                            src={`/assets/images/${step.imgName}.svg`}
                            alt={step.imgName}
                        />
                    </div>
                </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default ProcessFollow
