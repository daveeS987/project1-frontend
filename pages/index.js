// import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Case, Default } from 'react-if';
import { useEffect } from 'react';

import ViewHome from '../components/ViewHome';
import ViewAccount from '../components/ViewAccount';
import ViewWithCategories from '../components/ViewWithCategories';
import { wrapper } from '../store/store';
import Layout from '../components/Layout';

import { changeview } from '../store/viewSlice';
import { getProducts } from '../store/productSlice';

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const response = await axios.get(`${process.env.NEXT_API}/api/v1/category`);

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

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Layout categories={categories}>
        <Switch>
          <Case condition={view === 'category'}>
            <ViewWithCategories />
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
