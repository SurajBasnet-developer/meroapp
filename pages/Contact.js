import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { hello: data },
  };
};

const Contact = ({ hello }) => {
  return (
    <>
      <Head>
        <title>Suraj | Contact</title>
        <meta name="keywords" content="suraj"></meta>
      </Head>
      <div>
        <h3>9842008190</h3>
        {hello.map((sur) => (
          <div key={sur.id}>
            <h3>{sur.name}</h3>
            <h3>{sur.email}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contact;
