import React from 'react'
import styles from './offshoreHire.module.scss'
import Image from 'next/image'

const ServiceDetails = () => {
  return (
    <div className={styles.serviceDetailsWrapper}>
      <div className={styles.serviceDetailsInnerWrapper}>
        <div className={styles.serviceDetailsCard}>
            <p>We offer software development services with industry driven top notch web and mobile app development that meet the demand globally.</p>
        </div>
        <div className={styles.serviceDetailsCard}>
            <p>We craft modern design by following innovative ideas to create scalable and user friendly interfaces to get a mesmerizing experience.</p>
        </div>
      </div>
      <div className={styles.serviceDetailsInnerWrapper}>
        <div className={styles.serviceDetailsCard}>
            <p>We offer highly interactive feature rich user interface (UI) design along with 2D/3D experience for game development solutions.</p>
        </div>
        <div className={styles.serviceDetailsCard}>
            <p>Get your business digitalized and make your multipurpose website and increase online visibility, more traffic and great revenues.</p>
        </div>
      </div>
      <div className={styles.serviceDetailsInnerWrapper}>
        <div className={styles.serviceDetailsCard}>
            <p>Develop high end customized featured mobile applications that break geographical barriers and give expected results.</p>
        </div>
      </div>
      <div className={styles.mainImageWrapper}>
        <Image
            className={styles.mainImage}
            src={`/assets/images/service-details.svg`}
            alt="service-details"
            width={400}
            height={400}
        />
      </div>
    </div>
  )
}

export default ServiceDetails
