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
                <p className={styles.globalPresenceSubtitle}>Sahara Darwaja, Ring Road, Surat, Gujarat, India-395101</p>
            </div>
        </div>
    </div>
  )
}

export default GlobalPresenceCard
