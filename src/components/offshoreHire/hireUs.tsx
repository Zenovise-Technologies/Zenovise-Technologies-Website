"use client";
import React, { useState } from "react";
import styles from "./offshoreHire.module.scss";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

const HireUs = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phoneNumber: "",
    developer: "",
    startDuration: "",
    skype_id: "",
    budget: "",
    file: { name: "" },
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setState((prevState) => ({
        ...prevState,
        file,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!captchaValue) {
      setError("Please complete the reCAPTCHA before submitting.");
      return;
    }

    console.log(state);
    setState({
      first_name: "",
      last_name: "",
      email: "",
      phoneNumber: "",
      developer: "",
      startDuration: "",
      skype_id: "",
      budget: "",
      file: { name: "" },
      message: "",
    });
    setCaptchaValue(null);
    setError("");
  };

  return (
    <section className={styles.contactUsSectionWrapper}>
      <div className={styles.contactUsRightSideWrapper}>
        <form onSubmit={handleSubmit} className={styles.contactUsFormWrapper}>
          <div className={styles.contactFormInputWrapper}>
            {/** First Name */}
            <div className={styles.inputFieldWrapper}>
              <Image src="/assets/images/user-gray.svg" alt="user" width={24} height={24} />
              <input
                className={styles.inputField}
                name="first_name"
                value={state.first_name}
                onChange={handleChange}
                type="text"
                placeholder="First Name*"
                required
              />
            </div>

            {/** Last Name */}
            <div className={styles.inputFieldWrapper}>
              <Image src="/assets/images/user-gray.svg" alt="user" width={24} height={24} />
              <input
                className={styles.inputField}
                name="last_name"
                value={state.last_name}
                onChange={handleChange}
                type="text"
                placeholder="Last Name*"
                required
              />
            </div>

            {/** Email */}
            <div className={styles.inputFieldWrapper}>
              <Image src="/assets/images/mail-gray.svg" alt="mail" width={24} height={24} />
              <input
                className={styles.inputField}
                name="email"
                value={state.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email*"
                required
              />
            </div>

            {/** Phone Number */}
            <div className={styles.inputFieldWrapper}>
              <Image src="/assets/images/phone-gray.svg" alt="phone" width={24} height={24} />
              <input
                className={styles.inputField}
                name="phoneNumber"
                value={state.phoneNumber}
                onChange={handleChange}
                type="number"
                placeholder="Phone Number*"
                required
              />
            </div>

            {/** Developer Selection */}
            <div className={styles.inputFieldWrapper}>
              <Image src="/assets/images/user-gray.svg" alt="user" width={24} height={24} />
              <select className={styles.selectField} name="developer" value={state.developer} onChange={handleChange} required>
                <option value="" disabled>Select Developer*</option>
                <option value="ReactJs">ReactJs</option>
                <option value="NextJs">NextJs</option>
                <option value="Manager">Manager</option>
              </select>
            </div>

            {/** Start Duration */}
            <div className={styles.inputFieldWrapper}>
              <Image src="/assets/images/user-gray.svg" alt="user" width={24} height={24} />
              <select className={styles.selectField} name="startDuration" value={state.startDuration} onChange={handleChange} required>
                <option value="" disabled>When you want to start*</option>
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="After 1 month">After 1 month</option>
              </select>
            </div>

            {/** Skype ID */}
            <div className={styles.inputFieldWrapper}>
              <input
                className={styles.inputField}
                name="skype_id"
                value={state.skype_id}
                onChange={handleChange}
                type="text"
                placeholder="Skype ID (Optional)"
              />
            </div>

            {/** Budget */}
            <div className={styles.inputFieldWrapper}>
              <input
                className={styles.inputField}
                name="budget"
                value={state.budget}
                onChange={handleChange}
                type="text"
                placeholder="Your Budget*"
                required
              />
            </div>

            {/** File Upload */}
            <div className={`${styles.inputFieldWrapper} ${styles.filedUploadWrapper}`}>
              <label className={styles.fileUploadLabel}>
                <input type="file" className={styles.fileUploadInput} onChange={handleFileChange} />
                {state.file.name ? `File Uploaded - ${state.file.name}` : "Upload File"}
              </label>
            </div>
          </div>

          {/** Message TextArea */}
          <div className={`${styles.inputFieldWrapper} ${styles.textAreaWrapper}`}>
            <Image src="/assets/images/message-gray.svg" alt="message" width={24} height={24} />
            <textarea
              className={`${styles.inputField} ${styles.textAreaDesc}`}
              name="message"
              rows={5}
              value={state.message}
              onChange={handleChange}
              placeholder="Description"
            />
          </div>

          {/** reCAPTCHA */}
          <div className={styles.recaptchaWrapper}>
            <ReCAPTCHA sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY" onChange={(value) => setCaptchaValue(value)} />
          </div>

          {/** Error Message */}
          {error && <p className={styles.errorMessage}>{error}</p>}

          {/** Submit Button */}
          <div className={styles.contactFormSubmitBtn}>
            <button className={styles.readMoreButton}>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HireUs;
