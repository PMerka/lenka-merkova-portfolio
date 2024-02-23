import { ReactNode } from "react";
import styles from "./Button.module.css";
import Link from "next/link";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <Link href={"#kontakt"} className={styles.button}>
      {children}
    </Link>
  );
}
