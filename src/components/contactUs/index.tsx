import React from 'react'
import HeroSection from '../HeroSection'
import Footer from '../footer/footer'
import ContactUsSection from '../commonComponent/contactUsSection'
import SectionLayout from '../commonComponent/sectionLayout'
import styles from './contactUs.module.scss'
import { processCardItem } from '../helper/utils'
import ProcessCard from '../commonComponent/processCard'
import GlobalPresenceCard from '../commonComponent/globalPresenceCard'

const ContactUs = () => {
  return (
    <>
      <HeroSection 
        title={"Grow Your Business With Our Expertise"}
        subTitle={"We understand the importance of approaching each work integrally and believe in the power of simple."}
        hideInfoCard
      />
      <ContactUsSection showCard />
      <SectionLayout
        title='Global Presence'
        subTitle='With software development centre in India, we are proud to build long term relationships with clients, helping them attain their business goals.'
        className={styles.globalPresenceSection}
        backgroundColor='#F0F3F7'
        titleBgWidth={222}
        titleBgPosition={{
          left: "-10px",
          top: "50%",
          transform: "translateY(-40%)"
        }}
        mainContent={
          <GlobalPresenceCard />
        }
      />
      <Footer />
    </>
  )
}

export default ContactUs
