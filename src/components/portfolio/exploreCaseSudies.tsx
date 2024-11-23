"use client"
import React, { useState } from 'react'
import styles from './portfolio.module.scss'
import { caseStudiesCategories } from '../helper/utils'
import Image from 'next/image'

interface IExploreCaseSudiesState {
  selectedCategory: {
    category?: string;
    items?: { name: string; imgName: string; }[]
  }
}

const ExploreCaseSudies = () => {

  const [state, setState] = useState<IExploreCaseSudiesState>({
    selectedCategory: caseStudiesCategories[0]
  })

  return (
    <div className={styles.exploreCaseSudiesWrapper}>
      <div className={styles.exploreCaseStudiesHeaderWrapper}>
        {caseStudiesCategories.map((data, index) => (
            <p 
              key={index}
              className={`${styles.exploreCaseHeaderText} ${state.selectedCategory?.category === data.category ? styles.selectedCategory : ""}`}
              onClick={() => setState((prevState) => ({
                ...prevState,
                selectedCategory: data,
              }))}
            >
              {data.category}
            </p>
        ))}
      </div>
      <div className={styles.exploreCaseContentWrapper}>
        <div className={styles.exploreCaseContent}>
          {state.selectedCategory?.items?.filter((_, index) => index%2 === 0).map((data, index) => (
            <div key={index} className={styles.content}>
              <Image
                className={styles.contentImg}
                width={505}
                height={468}
                src={`/assets/images/${data.imgName}.svg`}
                alt={data.imgName}
              />
              <p className={styles.label}>{data.name}</p>
            </div>
          ))}
        </div>
        <div className={`${styles.exploreCaseContent} ${styles.rightSideContent}`}>
          {state.selectedCategory?.items?.filter((_, index) => index%2 !== 0).map((data, index) => (
            <div key={index} className={styles.content}>
              <Image
                className={styles.contentImg}
                width={505}
                height={468}
                src={`/assets/images/${data.imgName}.svg`}
                alt={data.imgName}
              />
              <p className={styles.label}>{data.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.portfolioSubmitBtn}>
        <button className={styles.readMoreButton}>See More</button>
      </div>
    </div>
  )
}

export default ExploreCaseSudies
