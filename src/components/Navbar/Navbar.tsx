"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { BsList } from "react-icons/bs";

export default function Navbar() {
  const navItems = [
    { text: "služby", link: "#co-pro-vas-napisu" },
    { text: "ukázky", link: "#ukazky" },
    { text: "ceník", link: "#cenik" },
    { text: "o mně", link: "#o-mne" },
    { text: "reference", link: "#reference" },
    { text: "kontakt", link: "#kontakt" },
  ];

  const [opened, setOpened] = useState(false);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navContent}>
          <div>
            <Link href={"#"}>
              <img src={"/upload/logo.png"} alt="" height={80} />
            </Link>
          </div>
          <div className={styles.navLinks}>
            {navItems.map((navItem, index) => (
              <div key={index}>
                <Link href={navItem.link}>{navItem.text}</Link>
              </div>
            ))}
          </div>

          <BsList
            className={styles.mobileIcon}
            onClick={() => setOpened(!opened)}
          />
        </div>
        {opened && (
          <div className={styles.navLinksMobile}>
            {navItems.map((navItem, index) => (
              <div key={index} onClick={() => setOpened(!opened)}>
                <Link href={navItem.link}>{navItem.text}</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
