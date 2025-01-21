import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer>
      <div className={styles.footerMainInfoBoxWrapper}>
        <div className={styles.footerMainInfoWrapper}>
          <div className={styles.infoTitleWrapper}>
            <div className={styles.infoTitleIconWrapper}>
              <Image
                className={styles.titleObjImage}
                src="/assets/images/location-white.svg"
                alt="location-white"
                width={24}
                height={24}
              />
            </div>
            <p className={styles.infoText}>Address</p>
          </div>
          <div className={styles.infoTitleWrapper}>
            <Image
              className={styles.titleObjImage}
              src="/assets/images/india-badge.svg"
              alt="india-badge"
              width={16}
              height={16}
            />
            <p className={styles.infoSubText}>
              O-1, 1st Floor, Silver Palm Bldg,
              <br />
              Besides, Kadampally Society,
              <br />
              Timaliawad, Surat, Gujarat 395001
            </p>
          </div>
        </div>
        <div className={styles.footerMainInfoWrapper}>
          <div className={styles.infoTitleWrapper}>
            <div className={styles.infoTitleIconWrapper}>
              <Image
                className={styles.titleObjImage}
                src="/assets/images/phone-white.svg"
                alt="phone-white"
                width={24}
                height={24}
              />
            </div>
            <p className={styles.infoText}>Call</p>
          </div>
          <div className={styles.infoTitleWrapper}>
            <Image
              className={styles.titleObjImage}
              src="/assets/images/india-badge.svg"
              alt="india-badge"
              width={16}
              height={16}
            />
            <p className={styles.infoSubText}>(+91) 90230-31034</p>
          </div>
        </div>
        <div className={styles.footerMainInfoWrapper}>
          <div className={styles.infoTitleWrapper}>
            <div className={styles.infoTitleIconWrapper}>
              <Image
                className={styles.titleObjImage}
                src="/assets/images/headphone-white.svg"
                alt="headphone-white"
                width={24}
                height={24}
              />
            </div>
            <p className={styles.infoText}>Get Free Estimation</p>
          </div>
          <div className={styles.infoTitleWrapper}>
            <div className={styles.infoInnerTitle}>
              <a href="/" target="_blank" className={styles.infoSubText}>
                info@zenovise.in
              </a>
              <a href="/" target="_blank" className={styles.infoSubText}>
                sales@zenovise.in
              </a>
            </div>
          </div>
        </div>
        <div className={styles.leftVectionImageWrapper}>
          <Image
            className={styles.vectorImgLeft}
            src="/assets/images/vector-stroke.svg"
            alt="vector-stroke"
            width={420}
            height={100}
          />
        </div>
        <div className={styles.rightVectionImageWrapper}>
          <Image
            className={styles.vectorImgRight}
            src="/assets/images/vector-stroke.svg"
            alt="vector-stroke"
            width={420}
            height={100}
          />
        </div>
      </div>
      <div className={styles.footerBottomPartWrapper}>
        <div className={styles.footerSiteMapListWrapper}>
          <div className={styles.footerSiteMapList}>
            <p className={styles.footerSiteMapListTitle}>Company</p>
            <div className={styles.footerSiteMapListItemWrapper}>
              <div className={styles.footerSiteMapListItem}>
              <a href="/" target="_blank">
                  About Us
                </a>
                <a href="/" target="_blank">
                  Work
                </a>
                <a href="/" target="_blank">
                  FAQs
                </a>
                <a href="/" target="_blank">
                  Contact
                </a>
              </div>
              <div className={styles.footerSiteMapListItem}>
                <a href="/" target="_blank">
                  Services
                </a>
                <a href="/" target="_blank">
                  Offshore & Hire
                </a>
                <a href="/" target="_blank">
                  Careers
                </a>
                <a href="/" target="_blank">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerSiteMapList}>
            <p className={styles.footerSiteMapListTitle}>Services</p>
            <div className={styles.footerSiteMapListItemWrapper}>
              <div className={styles.footerSiteMapListItem}>
                <a href="/" target="_blank">
                  Web Development
                </a>
                <a href="/" target="_blank">
                  Mobile Development
                </a>
                <a href="/" target="_blank">
                  UI/UX Design
                </a>
                <a href="/" target="_blank">
                  Graphic Design
                </a>
              </div>
              <div className={styles.footerSiteMapListItem}>
                <a href="/" target="_blank">
                  Digital Marketing
                </a>
                <a href="/" target="_blank">
                  Sales Funnel
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerSiteMapListInnerWrapper}>
            <div className={styles.footerSiteMapListInner}>
              <div className={styles.footerSiteMapList}>
                <p className={styles.footerSiteMapListTitle}>Work</p>
                <div className={styles.footerSiteMapListItemWrapper}>
                  <div className={styles.footerSiteMapListItem}>
                    <a href="/" target="_blank">
                      Portfolio
                    </a>
                    <a href="/" target="_blank">
                      Testimonials
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.footerSiteMapList}>
                <p className={styles.footerSiteMapListTitle}>We are Hiring!</p>
                <div className={styles.footerSiteMapListItemWrapper}>
                  <div className={styles.footerSiteMapListItem}>
                    <div className={styles.footerSiteMapListIconWrapper}>
                      <Image
                        className={styles.vectorImgRight}
                        src="/assets/images/mail-gray.svg"
                        alt="mail-gray"
                        width={16}
                        height={16}
                      />
                      <a href="/" target="_blank">
                        hr@zenovise.in
                      </a>
                    </div>
                    <div className={styles.footerSiteMapListIconWrapper}>
                      <Image
                        className={styles.vectorImgRight}
                        src="/assets/images/phone-gray.svg"
                        alt="phone-gray"
                        width={16}
                        height={16}
                      />
                      <a href="/" target="_blank">
                        (+91) 90230-31034
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerButtonWrapper}>
            <a href="https://www.facebook.com/profile.php?id=61563350815684" target="_blank" className={styles.footerButton}>
                <Image
                  className={styles.vectorImgRight}
                  src="/assets/logos/footer-facebook.svg"
                  alt="headphone-white"
                  width={20}
                  height={20}
                />
              </a>
              <a href="https://www.instagram.com/zenovisetechnologies/" target="_blank" className={styles.footerButton}>
                <Image
                  className={styles.vectorImgRight}
                  src="/assets/logos/footer-instagram.svg"
                  alt="headphone-white"
                  width={20}
                  height={20}
                />
              </a>
              <a href="https://www.linkedin.com/company/zenovise-technologies/" target="_blank" className={styles.footerButton}>
                <Image
                  className={styles.vectorImgRight}
                  src="/assets/logos/footer-linkedin.svg"
                  alt="headphone-white"
                  width={20}
                  height={20}
                />
              </a>
              <a href="https://x.com/ZenoviseTech" target="_blank" className={styles.footerButton}>
                <Image
                  className={styles.vectorImgRight}
                  src="/assets/logos/footer-twitter.svg"
                  alt="headphone-white"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerCopyrightWrapper}>
          <div className={styles.footerBottomImage}>
            <Image
              src="/assets/logos/footer-logo.svg"
              alt="header-logo"
              width={20}
              height={20}
            />
          </div>
          <p className={styles.copyRightReservedText}>
            © 2024 Zenovise Technologies. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
