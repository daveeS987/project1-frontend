import React from 'react';
import Link from 'next/link';

import { wrapper } from '../store/store';
import Layout from '../components/Layout';
// import Counter from '../components/Counter';

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  return {
    props: {},
  };
});

function Home(props) {
  return (
    <>
      <Layout>
        <h1>Home Page</h1>
        {/* <Counter /> */}
      </Layout>
    </>
  );
}

export default Home;
