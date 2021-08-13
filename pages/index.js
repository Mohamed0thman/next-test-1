import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
          orci lacus, non vestibulum tellus imperdiet sit amet. Sed ut libero
          nec mauris placerat fermentum nec non libero. Ut nec mi enim. Donec
          pharetra est in imperdiet lobortis. Duis eget libero id nisl aliquam
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
          orci lacus, non vestibulum tellus imperdiet sit amet. Sed ut libero
          nec mauris placerat fermentum nec non libero. Ut nec mi enim. Donec
          pharetra est in imperdiet lobortis. Duis eget libero id nisl aliquam
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
