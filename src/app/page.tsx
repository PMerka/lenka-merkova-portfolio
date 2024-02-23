import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import PriceList from "@/components/PriceList/PriceList";
import Footer from "@/components/Footer/Footer";
import WhoAmI from "@/components/WhoAmI/WhoAmI";
import References from "@/components/References/References";
import MyWork from "@/components/MyWork/MyWork";
import ContactMe from "@/components/ContactMe/ContactMe";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.mainContainer}>
        <HeroSection />
        <Services />
        <PriceList />
        <WhoAmI />
        <References />
        <MyWork />
        <ContactMe />
      </div>
      <Footer />
    </main>
  );
}
