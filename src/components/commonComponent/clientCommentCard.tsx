import React from 'react'
import styles from "./commonComponent.module.scss"
import { clientCommentCardItem } from '../helper/utils'
import Image from 'next/image';

interface ICliedCommentCardItemProps {
    item: { 
        name: string;
        comment: string;
    },
    borderPosition?: string,
}

const ClientCommentCard = (props: ICliedCommentCardItemProps) => {
    const { item, borderPosition } = props;
  return (
    <div className={styles.commentOuterWrapper}>        
        <div 
            className={styles.commentCardWrapper}
            style={{
                background: `linear-gradient(white, white) padding-box, linear-gradient(to ${borderPosition || "left"}, white, #8BBC3A) border-box`,
            }}
        >
            <div className={styles.commentTopImage}>
                <Image
                    width={40}
                    height={40}
                    alt='project-image'
                    src={`/assets/images/comment.svg`}
                />
            </div>
            <p className={styles.commentCardComment}>{item.comment}</p>
            <p className={styles.commentCardName}>{item.name}</p>
            <div className={styles.commentBottomImage}>
                <Image
                    width={40}
                    height={40}
                    alt='project-image'
                    src={`/assets/images/comment.svg`}
                    className={styles.industriesCardImg}
                />
            </div>
        </div>
    </div>
  )
}

export default ClientCommentCard
