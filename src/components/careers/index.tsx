import React from 'react'
import HeroSection from '../HeroSection'
import styles from './careers.module.scss'
import Footer from '../footer/footer'
import SectionLayout from '../commonComponent/sectionLayout'
import { hiringProcessSteps } from "../../components/helper/utils"
import Image from 'next/image'
import JobPositions from './jobPositions'
import JoinTeamComponent from './joinTeamComponent'

const Careers = () => {
  return (
    <>
      <HeroSection 
        title={"It’s Time to Grow your Career"}
        subTitle={"Are you looking for an opportunity to work in a real IT company? Start your career with us. At Zenovise we value passion and determination. We don’t just focus on an individual’s skill, talent, and potential. It’s not just about who you are today. But, what you can be! Our team-building activities concentrate on bringing out the best in every member by further developing their skills."}
        hideInfoCard
      />
      <SectionLayout
        title='Our Hiring Process'
        titleBgWidth={250}
        titleBgPosition={{
          left: "20%",
          top: "50%",
          transform: "translateY(-50%)"
        }}
        mainContent={
          <div className={styles.hiringProcessWrapper}>
            {hiringProcessSteps.map((processStep, index) => (
              <div key={index} className={styles.processWrapper}>
                <Image
                  className={styles.mainImage}
                  src={`/assets/images/${processStep.imgName}.svg`}
                  alt={processStep.imgName}
                  width={132}
                  height={140}
                />
                <p className={styles.processName}>{processStep.name}</p>
              </div>
            ))}
          </div>
        }
      />
      <SectionLayout
        title='Job Positions'
        subTitle='Requirement for January 2023'
        backgroundColor='#F9FAFB'
        titleBgWidth={250}
        titleBgPosition={{
          left: "28%",
          top: "50%",
          transform: "translateY(-50%)"
        }}
        mainContent={
          <JobPositions />
        }
      />
      <SectionLayout
        title='Join Our Team'
        titleBgWidth={250}
        titleBgPosition={{
          left: "25%",
          top: "50%",
          transform: "translateY(-50%)"
        }}
        mainContent={
          <JoinTeamComponent />
        }
      />
      <Footer />
    </>
  )
}

export default Careers
