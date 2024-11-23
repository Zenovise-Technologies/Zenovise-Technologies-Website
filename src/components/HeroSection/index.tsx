"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./heroSection.module.scss";
import { usePathname } from "next/navigation";
import CountUp from "react-countup";

interface IHeroSectionProps {
  title: string;
  subTitle: string;
  hideInfoCard?: boolean;
}

const HeroSection = (props: IHeroSectionProps) => {
  const { title, subTitle, hideInfoCard } = props;

  const path = usePathname().split("/");
  const [isOpened, setIsOpened] = useState(false);

  const handleToggle = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <>
      <header className={styles.heroSectionHeaderWrapper}>
        <div className={styles.innerHeaderDivWrapper}>
          <div className={styles.headerLogo}>
            <Image
              src={"/assets/logos/header-logo.svg"}
              width={285}
              height={36}
              alt="logo"
              onClick={() => window.open("/", "_self")}
            />
          </div>
          <div className={styles.headerMenuWrapper}>
            <Link
              className={`${styles.headerNavLink} ${
                path[1] === "services" ? styles.headerNavSelected : ""
              }`}
              href={"/services"}
            >
              Our services
            </Link>
            <Link
              className={`${styles.headerNavLink} ${
                path[1] === "portfolio" ? styles.headerNavSelected : ""
              }`}
              href={"/portfolio"}
            >
              Portfolio
            </Link>
            <Link
              className={`${styles.headerNavLink} ${
                path[1] === "offshore-hire" ? styles.headerNavSelected : ""
              }`}
              href={"/offshore-hire"}
            >
              Offshore & Hire
            </Link>
            <Link
              className={`${styles.headerNavLink} ${
                path[1] === "careers" ? styles.headerNavSelected : ""
              }`}
              href={"/careers"}
            >
              Careers
            </Link>
            <Link
              className={`${styles.headerNavLink} ${
                path[1] === "about-us" ? styles.headerNavSelected : ""
              }`}
              href={"/about-us"}
            >
              About us
            </Link>
            <Link
              className={`${styles.headerNavLink} ${
                path[1] === "contact-us" ? styles.headerNavSelected : ""
              }`}
              href={"/contact-us"}
            >
              Contact us
            </Link>
          </div>
          <button
            className={styles.getInTouchBtn}
            onClick={() =>
              window.open(
                "https://meet.brevo.com/zenovise-technologies/30-minute-meeting",
                "_blank"
              )
            }
          >
            Get in touch
          </button>
          <button
            className={`${styles.menu} ${isOpened ? styles.opened : ""}`}
            onClick={handleToggle}
            aria-expanded={isOpened}
            aria-label="Main Menu"
          >
            <svg width="50" height="50" viewBox="0 0 100 100">
              <path
                className={`${styles.line} ${styles.line1}`}
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path
                className={`${styles.line} ${styles.line2}`}
                d="M 20,50 H 80"
              />
              <path
                className={`${styles.line} ${styles.line3}`}
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${styles.headerMenu2Wrapper} ${
            isOpened ? styles.openMenu : ""
          }`}
        >
          <Link
            className={`${styles.headerNavLink} ${
              path[1] === "services" ? styles.headerNavSelected : ""
            }`}
            href={"/services"}
          >
            Our services
          </Link>
          <Link
            className={`${styles.headerNavLink} ${
              path[1] === "portfolio" ? styles.headerNavSelected : ""
            }`}
            href={"/portfolio"}
          >
            Portfolio
          </Link>
          <Link
            className={`${styles.headerNavLink} ${
              path[1] === "offshore-hire" ? styles.headerNavSelected : ""
            }`}
            href={"/offshore-hire"}
          >
            Offshore & Hire
          </Link>
          <Link
            className={`${styles.headerNavLink} ${
              path[1] === "careers" ? styles.headerNavSelected : ""
            }`}
            href={"/careers"}
          >
            Careers
          </Link>
          <Link
            className={`${styles.headerNavLink} ${
              path[1] === "about-us" ? styles.headerNavSelected : ""
            }`}
            href={"/about-us"}
          >
            About us
          </Link>
          <Link
            className={`${styles.headerNavLink} ${
              path[1] === "contact-us" ? styles.headerNavSelected : ""
            }`}
            href={"/contact-us"}
          >
            Contact us
          </Link>
        </div>
      </header>
      <section className={styles.heroSectionMainWrapper}>
        <div className={styles.socialWrapper}>
          <button
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=61563350815684"
              )
            }
          >
            <Image
              src={"/assets/logos/facebook.svg"}
              width={14}
              height={14}
              alt="facebook"
            />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/zenovise-technologies/"
              )
            }
          >
            <Image
              src={"/assets/logos/linkedin.svg"}
              width={14}
              height={14}
              alt="linkdin"
            />
          </button>
          <button
            onClick={() =>
              window.open("https://www.instagram.com/zenovisetechnologies/")
            }
          >
            <Image
              src={"/assets/logos/instagram.svg"}
              width={14}
              height={14}
              alt="instagram"
            />
          </button>
          <button onClick={() => window.open("https://x.com/ZenoviseTech")}>
            <Image
              src={"/assets/logos/twitter.svg"}
              width={14}
              height={14}
              alt="twitter"
            />
          </button>
        </div>
        <div className={styles.heroSectionContentWrapper}>
          <div className={styles.heroInnerContent}>
            <div className={styles.titleWrapper}>{title}</div>
            <div className={styles.divider}></div>
            <div
              className={styles.subTitleWrapper}
              dangerouslySetInnerHTML={{ __html: subTitle }}
            />
          </div>
          {!hideInfoCard && (
            <div className={styles.infoCardWrapper}>
              <div className={styles.cardInnerWrapper}>
                <div className={styles.countText}>
                  <CountUp start={1} end={200} />+
                </div>
                <div className={styles.cardText}>Completed Projects</div>
              </div>
              <div className={styles.cardInnerWrapper}>
                <div className={styles.countText}>
                  <CountUp start={1} end={5} />+
                </div>
                <div className={styles.cardText}>Years Of Experience</div>
              </div>
              <div className={styles.cardInnerWrapper}>
                <div className={styles.countText}>
                  <CountUp start={1} end={50} />+
                </div>
                <div className={styles.cardText}>IT Experts Team</div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
