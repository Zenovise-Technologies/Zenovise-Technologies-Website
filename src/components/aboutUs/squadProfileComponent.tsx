"use client"
import React, { useState } from 'react'
import styles from './aboutUs.module.scss'
import { squadMembersItem } from '../helper/utils'
import Image from 'next/image'

const SquadProfileComponent = () => {

    const [selectedCategory, setSelectedCategory] = useState(squadMembersItem[0])

  return (
    <div className={styles.squadProfileComponentWrapper}>
        <div className={styles.squadProfileMainWrapper}>
            {squadMembersItem.map((list, index) => (
                <div 
                    key={index}
                    className={`${styles.squadMemberCategory} ${selectedCategory.category === list.category ? styles.squadSeleted : ""}`}
                    onClick={() => setSelectedCategory(list)}
                >
                    <p className={styles.categoryName}>{list.category}</p>
                </div>
            ))}
        </div>
        <div className={styles.selectedMembersCategoryContent}>
            {selectedCategory.members.map((member, index) => (
                <div key={index} className={styles.memberCategoryContent}>
                    <Image
                        width={160}
                        height={160}
                        src={`/assets/images/${member.imgName}.svg`}
                        alt={member.imgName}
                    />
                    <div className={styles.memberInfo}>
                        <p className={styles.memberName}>{member.name}</p>
                        <p className={styles.memberDesignation}>{member.designation}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SquadProfileComponent
