"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { recentProjects } from '../helper/utils';
import ClientCommentCard from './clientCommentCard';
import styles from "./commonComponent.module.scss"
import RecentProjectDetails from './recentProjectDetails';
import Image from 'next/image';

const ProjectsCarouselComponent = () => {

    const [swiperInstance, setSwiperInstance] = useState<any>(null);    

  return (
    <>
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
            {recentProjects.map((item, index) => (
                <SwiperSlide key={index}>
                    <RecentProjectDetails
                        title={item.title}
                        description={item.description}
                        category={item.category}
                        imageSrc={item.imageSrc}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
        <div className={styles.buttonsContainer}>
        <button id="left" onClick={() => swiperInstance?.slidePrev()}>
          <Image
            src="/assets/images/left-arrow.svg"
            alt="left-arrow"
            height={30}
            width={30}
          />
        </button>
        <button id="right" onClick={() => swiperInstance?.slideNext()}>
          <Image
            src="/assets/images/right-arrow.svg"
            alt="right-arrow"
            height={30}
            width={30}
          />
        </button>
      </div>
    </>
  )
}

export default ProjectsCarouselComponent
