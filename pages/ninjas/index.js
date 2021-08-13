import Head from "next/head";
import Link from "next/link";
import Styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  return {
    props: {
      ninjas: data,
    },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>Ninjas List</h1>

        {ninjas.map((ninja) => (
          <div key={ninja.id}>
            <Link href={`/ninjas/${ninja.id}`}>
              <a className={Styles.single}>
                <h3> {ninja.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
