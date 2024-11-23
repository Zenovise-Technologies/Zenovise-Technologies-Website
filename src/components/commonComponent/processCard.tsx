import React from 'react'
import styles from './commonComponent.module.scss'

interface IProcessCardProps {
    index: number,
    title: string,
    circlePosition: any,
    borderPosition: string,
}

const ProcessCard = (props: IProcessCardProps) => {

    const {
        index,
        title,
        borderPosition,
        circlePosition
    } = props

    return (
        <div key={index} className={styles.cardOuterWrapper}>
            <div 
                className={styles.cardCircle}
                style={circlePosition}
            ></div>
            <div 
                className={styles.cardInnerWrapper}
                style={{
                    background: `linear-gradient(white, white) padding-box, linear-gradient(to ${borderPosition || "left"}, white, #8BBC3A) border-box`,
                }}
            >
                <div className={styles.cardText}>
                    {title}
                </div>
            </div>
        </div>
    )
}

export default ProcessCard
