import React from 'react';
// import Link from 'next/link';
import axios from 'axios';

import { wrapper } from '../store/store';
import Layout from '../components/Layout';

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const response = await axios.get(`${process.env.API}/api/v1/category`);

  const categories = response.data.results.map((obj) => {
    return {
      id: obj._id.toString(),
      name: obj.name,
      subCategory: obj.subCategory,
    };
  });

  return {
    props: { categories },
  };
});

function Home({ categories }) {
  return (
    <>
      <Layout categories={categories}>
        <h1>Home Page</h1>
      </Layout>
    </>
  );
}

export default Home;
