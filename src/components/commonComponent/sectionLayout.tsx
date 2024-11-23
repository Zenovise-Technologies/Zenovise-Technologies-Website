import React from 'react'
import styles from "./commonComponent.module.scss"
import Image from 'next/image'

interface ISectionLayoutProps {
    title: string;
    subTitle?: string;
    mainContent?: any;
    buttonText?: string;
    titleBgWidth?: number;
    backgroundColor?: string;
    titleBgPosition?: {
        top?: string;
        left?: string;
        right?: string;
        transform?: string;
    };
    titleColor?: string;
    subTitleColor?: string;
    className?: string;
    showVectorImage?: boolean;
    vectorImageStyle?: any;
}

const SectionLayout = (props: ISectionLayoutProps) => {

    const {
        title,
        subTitle,
        mainContent,
        titleBgPosition,
        backgroundColor,
        buttonText,
        titleBgWidth,
        titleColor,
        subTitleColor,
        className,
        showVectorImage,
        vectorImageStyle
    } = props;

    return (
        <section className={styles.sectionLayoutMainWrapper}>
            <div
                className={`${styles.sectionLayoutInnerMainWrapper} ${className}`}
                style={{
                    backgroundColor: backgroundColor,
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {showVectorImage && 
                    <div 
                        className={styles.vectorImageWrapper}
                        style={{...vectorImageStyle}}
                    >
                        <Image
                            className={styles.vectorImage}
                            src="/assets/images/vector-stroke.svg"
                            alt="vector-stroke"
                            width={100}
                            height={60}
                        />
                    </div>
                }
                <div className={styles.sectionLayoutContentWrapper}>
                    <div className={styles.layoutInnerContent}>
                        <h1 
                            className={styles.titleWrapper}
                            style={titleColor ? {
                                color: titleColor,
                            } : {}}
                        >
                            {title}
                            {titleBgWidth && <div 
                                className={styles.titleObjectWrapper}
                                style={titleBgPosition}
                            >
                                <Image
                                    className={styles.titleObjImage}
                                    src="/assets/images/text-bg-object.svg"
                                    alt="text-bg-object"
                                    width={titleBgWidth}
                                    height={60}
                                />
                            </div>}
                        </h1>
                        <div className={styles.divider}></div>
                        {subTitle && <p 
                            className={styles.subTitleWrapper}
                            style={subTitleColor ? {
                                color: subTitleColor,
                            } : {}}
                        >
                            {subTitle}
                        </p>}
                        {buttonText && <button className={styles.readMoreButton}>{buttonText}</button>}
                    </div>
                    {mainContent}
                </div>
            </div>
        </section>
    )
}

export default SectionLayout
