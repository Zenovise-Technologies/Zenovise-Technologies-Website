import React from 'react'
import Image from 'next/image'
import styles from "./commonComponent.module.scss"

interface IServiceInfoCardProps {
    index: number;
    title: string;
    description: string;
    color: string;
}

const ServiceInfoCard = (props: IServiceInfoCardProps) => {

    const {
        title,
        description,
        color,
        index
    } = props;

    return (
        <div 
            className={styles.sectionCardInnerInfo}
            style={{
                background: `linear-gradient(99deg, ${color + "4d"} 10%, ${color + "00"} 100%)`,
            }}
            key={index}
        >
            <div 
                className={styles.sectionCardEllipse}
                style={{
                    background: `linear-gradient(140deg, ${color + "4d"} 31%, ${color + "00"} 100%)`,
                }}
                ></div>
            <div className={styles.sectionCardImage}>
                <Image
                    className={styles.titleObjImage}
                    src="/assets/images/service-card-image.svg"
                    alt="service-card-image"
                    width={241}
                    height={152}
                    />
            </div>
            <p className={styles.sectionCardCount}>{index + 1}.</p>
            <div className={styles.sectionCardContent}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}

export default ServiceInfoCard
