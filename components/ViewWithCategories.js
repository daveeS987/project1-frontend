import React from 'react';
// import { When } from 'react-if';

import CategoryBreadCrumb from './CategoryBreadCrumb';
import CategoryMain from './CategoryMain';

function ViewWithCategories() {
  return (
    <div>
      <CategoryBreadCrumb />
      <CategoryMain />
    </div>
  );
}

export default ViewWithCategories;
