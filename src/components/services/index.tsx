import React from 'react'
import HeroSection from '../HeroSection'
import Footer from '../footer/footer'
import styles from './services.module.scss'
import ServiceInfoCard from '../commonComponent/serviceInfoCard'
import { servicesCardItem } from '../helper/utils'
import SectionLayout from '../commonComponent/sectionLayout'
import CommentCarouselComponent from '../commonComponent/commentsCarouselComponent'
import Image from 'next/image'

const Services = () => {
  return (
    <>
      <HeroSection 
        title={"Get our best design and development services to accelerate your business growth"}
        subTitle={"We are a web and mobile app development company focused on building quality software products. Our dedicated development teams are experts in numerous technology stacks. We offer end-to-end application development services which include designing, prototyping, building, and migrating to new web architecture. Our web design and development experts are tech-savvy enthusiasts who focus on creating custom web apps. We build apps that are secure, scalable, and responsive."}
        hideInfoCard
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
        title='Our Technology Stack'
        subTitle='Selecting the right tech stack is a real challenge but our team of professional web developers will help you choose the right tools for delivering a top-notch web application with all the functionality you need.'
        backgroundColor='#F9FAFB'
        titleBgWidth={300}
        titleBgPosition={{
          right: "70px",
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
      <SectionLayout
        title='Our Clients Say'
        subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eureh lit anim id est laborum.'
        titleBgWidth={222}
        titleBgPosition={{
          left: "25%",
          top: "60%",
          transform: "translateY(-40%)"
        }}
        mainContent={
          <div className={styles.processCardWrapper}>
            <CommentCarouselComponent />
          </div>
        }
      />
      <Footer />
    </>
  )
}

export default Services
