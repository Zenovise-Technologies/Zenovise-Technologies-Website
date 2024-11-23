import Image from 'next/image'
import React from 'react'
import styles from "./commonComponent.module.scss"

const HireDeveloperSection = () => {
    return (
        <section className={styles.hireDeveloperMainWrapper}>
            <div className={styles.hireDeveloperInnerWrapper}>
                <div className={styles.hireDeveloperContent}>
                    <div className={styles.hireDeveloperContentInner}>
                        <h1 className={styles.title}>Hire Dedicated Developer</h1>
                        <p className={styles.label}>You can hire dedicated designer & developers to develop the website and mobile application. They are technically sound and knowledgeable in various development platforms and coding.</p>
                    </div>
                    <div className={styles.hireButtonWrapper}>
                        <button className={styles.hireButton}>Hire Now</button>
                    </div>
                </div>
                <div className={styles.developerImgWrapper}>
                    <Image
                        className={styles.dedicatedImg}
                        src="/assets/images/dedicated-developer.svg"
                        alt="service-card-image"
                        width={415}
                        height={360}
                    />
                </div>
            </div>
            <div className={styles.vectorImageWrapper}>
                <Image
                    className={styles.vectorImage}
                    src="/assets/images/vector-stroke.svg"
                    alt="vector-stroke"
                    width={100}
                    height={60}
                />
            </div>
        </section>
    )
}

export default HireDeveloperSection
