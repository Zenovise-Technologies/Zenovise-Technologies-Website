import React from 'react'
import HeroSection from '../HeroSection'
import Footer from '../footer/footer'
import SectionLayout from '../commonComponent/sectionLayout'
import HireDeveloper from './hireDeveloper'
import ProcessFollow from './processFollow'
import styles from './offshoreHire.module.scss'
import HireFromUsCards from './hireFromUsCards'
import ServiceDetails from './serviceDetails'
import ContactUsSection from '../commonComponent/contactUsSection'
import HireUs from './hireUs'

const OffshoreHire = () => {
  return (
    <>
      <HeroSection 
        title={"Offshore Team"}
        subTitle={"We offer cost effective IT solutions for you with high performing trending features."}
        hideInfoCard
      />
      <SectionLayout
        className={styles.processFollowSection}
        title='Process We Follow'
        titleBgWidth={300}
        titleBgPosition={{
          left: "2%",
          top: "50%",
          transform: "translateY(-50%)"
        }}
        mainContent={
          <ProcessFollow />
        }
      />
      <SectionLayout
        title='Hire Dedicated Developer'
        subTitle="Are you looking for an opportunity to hire Zenovise's well-versed dedicated developers? Start your brand new project with a dedicated, passionate team of developers. We have various models for hiring developers. Hire dedicated designer and developers on an hourly, monthly, or full-time basis as per your business need."
        titleBgWidth={300}
        titleBgPosition={{
          left: "4%",
          top: "50%",
          transform: "translateY(-50%)"
        }}
        mainContent={
          <HireDeveloper />
        }
      />
      <SectionLayout
        title='Why Hire From Us?'
        titleColor='#FFFFFF'
        backgroundColor='#020912'
        showVectorImage
        vectorImageStyle={{
          top: "auto",
          bottom: "0",
          right: "0",
          left: "auto",
          transform: "rotate(180deg)",
        }}
        mainContent={
          <HireFromUsCards />
        }
      />
      <SectionLayout
        title='Service Details'
        backgroundColor='#F9FAFB'
        titleBgWidth={300}
        titleBgPosition={{
          left: "0",
          top: "50%",
          transform: "translateY(-50%)"
        }}
        mainContent={
          <ServiceDetails />
        }
      />
      <SectionLayout
        title='Hire Dedicated Developer'
        titleBgWidth={300}
        titleBgPosition={{
          left: "20%",
          top: "50%",
          transform: "translateY(-50%)"
        }}
        mainContent={
          <HireUs />
        }
      />
      <Footer />
    </>
  )
}

export default OffshoreHire
