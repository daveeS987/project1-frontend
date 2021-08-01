import React from 'react';
// import { When } from 'react-if';

import CategoryBreadCrumbs from './CategoryBreadCrumbs';
import CategoryMain from './CategoryMain';

function ViewWithCategories() {
  return (
    <div>
      <CategoryBreadCrumbs />
      <CategoryMain />
    </div>
  );
}

export default ViewWithCategories;
