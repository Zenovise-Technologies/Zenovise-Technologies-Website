"use client"
import React, { useState } from 'react'
import styles from './offshoreHire.module.scss'
import Image from 'next/image'

const HireUs = () => {

  const [state, setState] = useState({
    first_name: '',
    email: '',
    developer: '',
    last_name: '',
    startDuration: '',
    skype_id: '',
    budget: '',
    file: {
      name: ""
    },
    phoneNumber: '',
    message: '',
  })

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setState((prevState) => ({
        ...prevState,
        file: file,
      }));
    }
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(state)
    setState({
      first_name: '',
      email: '',
      last_name: '',
      developer: '',
      startDuration: '',
      skype_id: '',
      budget: '',
      file: {
        name: ""
      },
      phoneNumber: '',
      message: '',
    })
  }

  return (
    <section className={styles.contactUsSectionWrapper}>
      <div className={styles.contactUsRightSideWrapper}>
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
                value={state.first_name} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setState((prevState) => ({
                  ...prevState,
                  first_name: event.target.value,
                }))}
                type="text"
                placeholder='First Name*' 
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
                value={state.last_name} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setState((prevState) => ({
                  ...prevState,
                  last_name: event.target.value,
                }))} 
                type="text"
                placeholder='Last Name*' 
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
            <div className={styles.inputFieldWrapper}>
              <Image
                className={styles.titleObjImage}
                src="/assets/images/user-gray.svg"
                alt="user-gray"
                width={24}
                height={24}
              />
              <select
                className={styles.selectField}
                value={state.developer}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setState((prevState) => ({
                  ...prevState,
                  developer: event.target.value,
                }))}
                required
              >
                <option value="" disabled>Select Developer*</option>
                <option value="ReactJs">ReactJs</option>
                <option value="NextJs">NextJs</option>
                <option value="Manager">Manager</option>
              </select>
              <Image
                className={styles.titleObjImage}
                src="/assets/images/chevron-down-gray.svg"
                alt="chevron-down-gray"
                width={24}
                height={24}
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
              <select
                className={styles.selectField}
                value={state.startDuration}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setState((prevState) => ({
                  ...prevState,
                  startDuration: event.target.value,
                }))}
                required
              >
                <option value="" disabled>When you want to start*</option>
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="After 1 month">After 1 month</option>
              </select>
              <Image
                className={styles.titleObjImage}
                src="/assets/images/chevron-down-gray.svg"
                alt="chevron-down-gray"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.inputFieldWrapper}>
              <input 
                className={styles.inputField} 
                value={state.skype_id} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setState((prevState) => ({
                  ...prevState,
                  skype_id: event.target.value,
                }))} 
                type="text"
                placeholder='Skype ID (Optional)'
              />
            </div>
            <div className={styles.inputFieldWrapper}>
              <input 
                className={styles.inputField} 
                value={state.budget} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setState((prevState) => ({
                  ...prevState,
                  budget: event.target.value,
                }))} 
                type="text"
                placeholder='Your Budget*' 
                required
              />
            </div>
            <div className={`${styles.inputFieldWrapper} ${styles.filedUploadWrapper}`}>
              <label className={styles.fileUploadLabel}>
                <input
                  type="file"
                  className={styles.fileUploadInput}
                  onChange={handleFileChange}
                />
                {state.file.name ? `File Uploaded - ${state.file.name}` : "Upload File"}
              </label>
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

export default HireUs
