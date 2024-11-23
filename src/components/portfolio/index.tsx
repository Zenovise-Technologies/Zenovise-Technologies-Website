import React from 'react'
import HeroSection from '../HeroSection'
import styles from './portfolio.module.scss'
import Footer from '../footer/footer'
import SectionLayout from '../commonComponent/sectionLayout'
import ExploreCaseSudies from './exploreCaseSudies'

const Portfolio = () => {
  return (
    <>
      <HeroSection 
        title={"Our Best Work"}
        subTitle={"Explore Our Case Studies & Latest Success Best Work."}
        hideInfoCard
      />
      <SectionLayout
        title='Explore Our Case Studies & Latest Sucess Stories.'
        backgroundColor='#F9FAFB'
        titleBgWidth={300}
        titleBgPosition={{
          left: "35%",
          top: "20%",
          transform: "translateY(-40%)"
        }}
        mainContent={
          <ExploreCaseSudies />
        }
      />
      <Footer />
    </>
  )
}

export default Portfolio
