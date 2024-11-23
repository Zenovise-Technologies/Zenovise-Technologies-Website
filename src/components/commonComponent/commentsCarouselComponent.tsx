"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { clientCommentCardItem } from '../helper/utils';
import ClientCommentCard from './clientCommentCard';
import styles from "./commonComponent.module.scss"

const CommentCarouselComponent = () => {

  return (
    <>
        <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                200: {
                    slidesPerView: 1,
                },
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
        >
            {clientCommentCardItem.map((item, index) => (
                <SwiperSlide key={index}>
                    <ClientCommentCard 
                        item={item}
                        borderPosition={index%2 === 0 ? "top" : "bottom"}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
        <button className={styles.readMoreButton}>Explore More</button>
    </>
  )
}

export default CommentCarouselComponent
