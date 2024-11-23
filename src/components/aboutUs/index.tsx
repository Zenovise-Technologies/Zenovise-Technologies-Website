import React from 'react'
import HeroSection from '../HeroSection'
import Footer from '../footer/footer'
import SectionLayout from '../commonComponent/sectionLayout'
import styles from './aboutUs.module.scss'
import GlobalPresenceCard from '../commonComponent/globalPresenceCard'
import Image from 'next/image'
import { processCardItem, valuesCardList } from '../helper/utils'
import ProcessCard from '../commonComponent/processCard'
import AboutUsValues from './aboutUsValues'
import SquadProfileComponent from './squadProfileComponent'

const AboutUs = () => {
  return (
    <>
      <HeroSection 
        title={"Zenovise Story"}
        subTitle={`Zenovise technology “begins its journey” with the aspiration to achieve one of the top and finest software development companies around the globe. We develop unique and advanced mobile apps for all leading companies, brands, startups, and enterprises.<br/><br/>We are inclined to the culture of getting things done systematically at our workplace. We follow zero tolerance. We are committed to navigating with creativity in creating high-end web development solutions. We solve every usage problem of our clients and their customers. Our passion for developing solutions helps to achieve our goals year after year.`}
        hideInfoCard
      />
      <SectionLayout
        title='Our Vision, Mission & Core Values'
        subTitle='Our entire staff is passionately devoted to the underlying ideals.'
        titleBgWidth={300}
        titleBgPosition={{
          left: "32%",
          top: "58%",
          transform: "translateY(-42%)"
        }}
        mainContent={
          <AboutUsValues />
        }
      />
      <SectionLayout
        title='We believe our values'
        subTitle='We believe in each of our values and are inclined to fulfill those in any extreme situation. Our team is always prepared to make it possible to reach excellence in what they do.'
        buttonText='Explore More'
        backgroundColor='#F0F3F7'
        titleBgWidth={222}
        titleBgPosition={{
          right: "10px",
          top: "60%",
          transform: "translateY(-40%)"
        }}
        mainContent={
          <div className={styles.processCardWrapper}>
            {valuesCardList.map((item, index) => (
              <ProcessCard
                index={index}
                title={item.title}
                circlePosition={item.circlePosition}
                borderPosition={item.border}
              />
            ))}
          </div>
        }
      />
      <SectionLayout
        title='A Squad of Talented Professionals'
        subTitle='Highly talented professionals and engineers together help to succeed in our dream. Their technical knowledge and creative skills are recommendable.'
        titleBgWidth={300}
        titleBgPosition={{
          left: "32%",
          top: "58%",
          transform: "translateY(-42%)"
        }}
        mainContent={
          <SquadProfileComponent />
        }
      />
      <SectionLayout
        title='Global Presence'
        subTitle='With software development centre in India, we are proud to build long term relationships with clients, helping them attain their business goals.'
        className={styles.globalPresenceSection}
        backgroundColor='#F0F3F7'
        titleBgWidth={222}
        titleBgPosition={{
          left: "-10px",
          top: "60%",
          transform: "translateY(-40%)"
        }}
        mainContent={
          <GlobalPresenceCard />
        }
      />
      <SectionLayout
        title='Award & Membership'
        subTitle='Our dedication toward web and mobile app development and consistency towards building extensive design and functionalities help us to achieve our goals and improve our entrepreneur’s spirit. We have been privileged to make a mark and win trophies, which was not possible without your support.'
        titleBgWidth={190}
        titleBgPosition={{
          left: "-10px",
          top: "60%",
          transform: "translateY(-40%)"
        }}
        mainContent={
          <div className={`${styles.sectionCardWrapper} ${styles.onlyImage}`}>
            <Image
              className={styles.mainImage}
              src="/assets/images/technology-stack.svg"
              alt="technology-stack"
              width={140}
              height={43}
            />
          </div>
        }
      />
      <Footer />
    </>
  )
}

export default AboutUs
