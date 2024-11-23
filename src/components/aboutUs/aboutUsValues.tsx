import React from 'react'
import styles from './aboutUs.module.scss'
import { aboutUsValuesItem, valuesCardList } from '../helper/utils'
import Image from 'next/image'

const AboutUsValues = () => {
  return (
    <div className={styles.aboutValuesMainWrapper}>
        {aboutUsValuesItem.map((value, index) => (
            <div 
                key={index} 
                className={styles.aboutValuesWrapper}
                style={{
                    flexDirection: value.position === "right" ? "row-reverse" : "row",
                }}
            >
                <div className={styles.aboutValuesImageWrapper}>
                    <Image
                        width={100}
                        height={100}
                        src={`/assets/images/${value.imgName}.svg`}
                        alt={value.imgName}
                    />
                </div>
                <div 
                    className={styles.aboutValuesContentBox}
                    style={{
                        background: `linear-gradient(white, white) padding-box, linear-gradient(to ${value.position}, white, #8BBC3A) border-box`,
                    }}
                >
                    <p className={styles.title}>{value.title}</p>
                    <p className={styles.description}>{value.description}</p>
                    {value.title === "Core Values" 
                        ? <div className={styles.coreValuesInnerContent}>
                            <div className={styles.coreValuesContent}>
                                <p>Attitude</p>
                                <p>Transparency</p>
                                <p>Excellence</p>
                            </div>
                            <div className={styles.coreValuesContent}>
                                <p>Professionalism</p>
                                <p>Integrity</p>
                            </div>
                        </div>
                        : null
                    }
                </div>
                <div 
                    className={styles.bgBox}
                    style={{
                        left: value.position === "left" ? "40px" : undefined,
                        right: value.position === "right" ? "40px" : undefined
                    }}
                ></div>
            </div>
        ))}
    </div>
  )
}

export default AboutUsValues
