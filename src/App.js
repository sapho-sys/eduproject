import React from "react";
import Heading from './components/heading/header';
import Categories from './components/categories/topcategory';
import SubCategories from './components/addcategories/add-cat';

const App = () =>{
  return (
    <>
    <Heading />
    <Categories />
    <SubCategories />
    </>
  );
};

export default App;