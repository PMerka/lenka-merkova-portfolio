"use client";
import React from "react";
import { FaRegCopy } from "react-icons/fa";
import styles from "./CopyEmail.module.css";

export default function CopyEmail() {
  return (
    <FaRegCopy
      className={styles.copyIcon}
      onClick={() =>
        navigator.clipboard.writeText("lenka.svidrnochova@gmail.com")
      }
    />
  );
}
