import React from 'react'
import styles from './commonComponent.module.scss'
import Image from 'next/image';

interface IRecentProjectDetailsProps {
    title: string;
    description: string;
    category: any;
    imageSrc: string;
}

const RecentProjectDetails = (props: IRecentProjectDetailsProps) => {

    const {
        title,
        description,
        category,
        imageSrc,
    } = props;

  return (
    <div className={styles.recentProjectsMainWrapper} id="inner-content">
      <div className={styles.recentProjectsContentWrapper}>
        <p className={styles.title}>{title}</p>
        <div className={styles.contentWrapper}>
            <div className={styles.innerContent}>
                <p className={styles.contentTitle}>Description</p>
                <p className={styles.contentDesc}>{description}</p>
            </div>
            <div className={styles.innerContent}>
                <p className={styles.contentTitle}>Category</p>
                <p className={styles.contentDesc}>{category}</p>
            </div>
        </div>
        <div className={styles.readMoreBtnWrapper}>
            <button className={styles.readMoreButton}>Explore More</button>
        </div>
      </div>
      <div className={styles.recentProjectsImageWrapper}>
        <Image 
            width={510}
            height={468}
            alt='project-image'
            src={`/assets/images/${imageSrc}.svg`}
        />
      </div>
    </div>
  )
}

export default RecentProjectDetails
