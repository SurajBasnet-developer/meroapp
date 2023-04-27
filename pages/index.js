import Head from "next/head";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import React from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Suraj | Blog</title>
        <meta name="keywords" content="suraj"></meta>
      </Head>
      <div>
        <h2 className={styles.title}>Homepage</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex a
          expedita molestiae. Deserunt veritatis voluptas minus, cumque vitae
          dolore id omnis soluta, at voluptatum, nobis animi aliquid reiciendis
          quaerat.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          architecto amet sed delectus ratione vitae ex labore consequuntur.
          Aspernatur impedit, enim nulla dolor illo neque deserunt inventore
          magnam exercitationem doloremque.
        </p>
        <Link href="/Contact">See Contact Information</Link>
      </div>
    </>
  );
};

export default Home;
