"use client"
import React, { useState } from 'react'
import styles from './commonComponent.module.scss'
import Image from 'next/image'
import { contactUsInfo } from '../helper/utils'

const ContactUsSection = ({ showCard }: { showCard?: boolean }) => {

  const [state, setState] = useState({
    name: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    message: '',
  })

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(state)
    setState({
      name: '',
      email: '',
      companyName: '',
      phoneNumber: '',
      message: '',
    })
  }

  return (
    <section className={styles.contactUsSectionWrapper}>
      {showCard 
        ? <div className={styles.contactCardWrapper}>
          {contactUsInfo.map((data, index) => (
            <div key={index} className={styles.cardWrapper}>
              <Image
                className={styles.titleObjImage}
                src={`/assets/images/${data.imgName}.svg`}
                alt={data.imgName}
                width={45}
                height={45}
              />
              <div className={styles.cardContentWrapper}>
                <p className={styles.title}>{data.title}</p>
                <p className={styles.infoText}>{data.info}</p>
              </div>
            </div>
          ))}
        </div>
        : <div className={styles.contactUsImgWrapper}>
          <Image
            className={styles.contactUsImg}
            src="/assets/images/contact-us.svg"
            alt="service-card-image"
            width={590}
            height={480}
          />
        </div>
      }
      <div className={styles.contactUsRightSideWrapper}>
        <div className={styles.contactUsRightSideTitleWrapper}>
          <h1 className={styles.titleWrapper}>
            Let's talk!
            <div className={styles.titleObjectWrapper}>
              <Image
                className={styles.titleObjImage}
                src="/assets/images/text-bg-2.svg"
                alt="text-bg-2"
                width={140}
                height={43}
              />
            </div>
          </h1>
          <p className={styles.subTitleWrapper}>
            Tell us all about your project right here, or send us an email at <a href='/' target='_blank' className={styles.subTitleLink}>info@zenovise.in</a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className={styles.contactUsFormWrapper}>
          <div className={styles.contactFormInputWrapper}>
            <div className={styles.inputFieldWrapper}>
              <Image
                className={styles.titleObjImage}
                src="/assets/images/user-gray.svg"
                alt="user-gray"
                width={24}
                height={24}
              />
              <input 
                className={styles.inputField} 
                value={state.name} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setState((prevState) => ({
                  ...prevState,
                  name: event.target.value,
                }))}
                type="text"
                placeholder='Your name*' 
                required
              />
            </div>
            <div className={styles.inputFieldWrapper}>
              <Image
                className={styles.titleObjImage}
                src="/assets/images/user-gray.svg"
                alt="user-gray"
                width={24}
                height={24}
              />
              <input 
                className={styles.inputField} 
                value={state.companyName} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setState((prevState) => ({
                  ...prevState,
                  companyName: event.target.value,
                }))} 
                type="text"
                placeholder='Company name*' 
                required
              />
            </div>
            <div className={styles.inputFieldWrapper}>
              <Image
                className={styles.titleObjImage}
                src="/assets/images/mail-gray.svg"
                alt="mail-gray"
                width={24}
                height={24}
              />
              <input 
                className={styles.inputField} 
                value={state.email} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setState((prevState) => ({
                  ...prevState,
                  email: event.target.value,
                }))} 
                type="email"
                placeholder='Your email*' 
                required
              />
            </div>
            <div className={styles.inputFieldWrapper}>
              <Image
                className={styles.titleObjImage}
                src="/assets/images/phone-gray.svg"
                alt="phone-gray"
                width={24}
                height={24}
              />
              <input 
                className={styles.inputField} 
                value={state.phoneNumber} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setState((prevState) => ({
                  ...prevState,
                  phoneNumber: event.target.value,
                }))} 
                type="number"
                placeholder='Phone number*' 
                required
              />
            </div>
          </div>
          <div className={`${styles.inputFieldWrapper} ${styles.textAreaWrapper}`}>
            <Image
              className={styles.titleObjImage}
              src="/assets/images/message-gray.svg"
              alt="message-gray"
              width={24}
              height={24}
            />
            <textarea 
              className={`${styles.inputField} ${styles.textAreaDesc}`} 
              rows={5}
              value={state.message} 
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setState((prevState) => ({
                ...prevState,
                message: event.target.value,
              }))}
              placeholder='Description' 
            />
          </div>
          <div className={styles.contactFormSubmitBtn}>
            <button className={styles.readMoreButton}>Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactUsSection
