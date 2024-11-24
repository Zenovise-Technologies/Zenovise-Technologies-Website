import React from 'react'
import styles from './commonComponent.module.scss'
import Image from 'next/image'

const GlobalPresenceCard = () => {
  return (
    <div className={styles.globalPresenceOuterWrapper}>
        <div className={styles.globalPresenceCircle}></div>
        <div className={styles.globalPresenceInnerWrapper}>
            <div className={styles.globalPresenceTextWrapper}>
                <Image 
                    width={80}
                    height={80}
                    src="/assets/images/india-badge.svg"
                    alt='india-badge'
                />
                <p className={styles.globalPresenceTitle}>India</p>
                <p className={styles.globalPresenceSubtitle}>O-1, 1st Floor, Silver Palm, Bldg, Besides, Kadampally Society, Timaliawad, Dhanmora, Surat, Gujarat 395001</p>
            </div>
        </div>
    </div>
  )
}

export default GlobalPresenceCard
