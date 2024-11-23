import React from 'react'
import HeroSection from '../HeroSection'
import SectionLayout from '../commonComponent/sectionLayout'
import { industriesCardItem, processCardItem, servicesCardItem } from '../helper/utils'
import ServiceInfoCard from '../commonComponent/serviceInfoCard'
import styles from './home.module.scss'
import ProcessCard from '../commonComponent/processCard'
import IndustriesCard from '../commonComponent/industriesCard'
import CommentCarouselComponent from '../commonComponent/commentsCarouselComponent'
import HireDeveloperSection from '../commonComponent/hireDeveloperSection'
import ProjectsCarouselComponent from '../commonComponent/projectsCarouselComponent'
import ContactUsSection from '../commonComponent/contactUsSection'
import Footer from '../footer/footer'

const Home = () => {
  return (
    <>
      <HeroSection 
        title={"Zenovise Digital Marketing Services Assist You To Reach More People"}
        subTitle={"Grow your business and increase revenues with our digital marketing campaigns"}
      />
      <SectionLayout
        title='Get High-End Custom IT Solutions'
        subTitle='We specializes in tailor-made technology solutions for startups, small and medium businesses, and enterprises to achieve operational excellence.'
        buttonText='Read More'
        backgroundColor='#fff'
        titleBgWidth={300}
        titleBgPosition={{
          right: "20px",
          top: "60%",
          transform: "translateY(-40%)"
        }}
        mainContent={
          <div className={styles.sectionCardWrapper}>
            {servicesCardItem.map((item, index) => (
              <ServiceInfoCard
                index={index}
                title={item.title}
                description={item.description}
                color={item.color}
              />
            ))}
          </div>
        }
      />
      <SectionLayout
        title='Process We Follow'
        subTitle='We follow a diligent and systematic method for each assigned project. Our efficient team provides customized solutions as per the requirement we received from clients.'
        buttonText='Explore More'
        backgroundColor='#F0F3F7'
        titleBgWidth={222}
        titleBgPosition={{
          left: "10px",
          top: "60%",
          transform: "translateY(-40%)"
        }}
        mainContent={
          <div className={styles.processCardWrapper}>
            {processCardItem.map((item, index) => (
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
        title='Our Recent Projects'
        subTitle='Checkout our recent design and development works'
        backgroundColor='#0B0F13'
        titleColor='#FFFFFF'
        subTitleColor='#8EA6BF'
        showVectorImage
        mainContent={
          <div className={styles.processCardWrapper}>
            <ProjectsCarouselComponent />
          </div>
        }
      />
      <SectionLayout
        title='Industries We Serve'
        subTitle='We’re Zenovise in serving a multitude of industries. We’ve rendered our expertise to the industry verticals.'
        buttonText='Explore More'
        titleBgWidth={222}
        titleBgPosition={{
          left: "10px",
          top: "60%",
          transform: "translateY(-40%)"
        }}
        mainContent={
          <div className={styles.processCardWrapper}>
            {industriesCardItem.map((item, index) => (
              <IndustriesCard
                index={index}
                title={item.title}
                circlePosition={item.circlePosition}
                borderPosition={item.border}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        }
      />
      <SectionLayout
        title='Our Clients Say'
        subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eureh lit anim id est laborum.'
        titleBgWidth={222}
        titleBgPosition={{
          left: "25%",
          top: "60%",
          transform: "translateY(-40%)"
        }}
        backgroundColor='#F9FAFB'
        mainContent={
          <div className={styles.processCardWrapper}>
            <CommentCarouselComponent />
          </div>
        }
      />
      <HireDeveloperSection />
      <ContactUsSection />
      <Footer />
    </>
  )
}

export default Home
