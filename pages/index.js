import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Case, Default } from 'react-if';

import ViewHome from '../components/ViewHome';
import ViewAccount from '../components/ViewAccount';
import ViewCategory from '../components/ViewCategory';
import { wrapper } from '../store/store';
import Layout from '../components/Layout';

import { changeview } from '../store/viewSlice';

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
  let view = useSelector((state) => state.view.show);
  console.log('🚀 ~ view: ', view);
  const dispatch = useDispatch();

  function changeView(view) {
    dispatch(changeview(view));
  }

  return (
    <>
      <Layout categories={categories}>
        <Switch>
          <Case condition={view === 'category'}>
            <ViewCategory />
          </Case>
          <Case condition={view === 'accounts'}>
            <ViewAccount />
          </Case>
          <Default>
            <ViewHome />
          </Default>
        </Switch>
      </Layout>
    </>
  );
}

export default Home;
