import React from 'react'
import styles from './commonComponent.module.scss'
import Image from 'next/image'

interface IIndustriesCardProps {
    index: number,
    title: string,
    imageSrc: string,
    circlePosition: any,
    borderPosition: string,
}

const IndustriesCard = (props: IIndustriesCardProps) => {

    const {
        index,
        title,
        borderPosition,
        circlePosition,
        imageSrc
    } = props

    return (
        <div key={index} className={styles.industriesCardOuterWrapper}>
            <div 
                className={styles.industriesCardCircle}
                style={circlePosition}
            ></div>
            <div 
                className={styles.industriesCardInnerWrapper}
                style={{
                    background: `linear-gradient(white, white) padding-box, linear-gradient(to ${borderPosition || "left"}, white, #8BBC3A) border-box`,
                }}
            >
                <div 
                    className={styles.industriesCardText}
                    style={{
                        background: `linear-gradient(${borderPosition === "top" ? "180" : "0"}deg, rgba(240,243,247,1) 0%, rgba(240,243,247,0) 100%)`
                    }}
                >
                    <div className={styles.industriesCardImgWrapper}>
                        <Image
                            fill
                            alt='project-image'
                            src={`/assets/images/${imageSrc}.svg`}
                            className={styles.industriesCardImg}
                        />
                    </div>
                    {title}
                </div>
            </div>
        </div>
    )
}

export default IndustriesCard
