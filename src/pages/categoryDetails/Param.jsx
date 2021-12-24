import React from "react";
import { useParams } from "react-router-dom";
import CategoryDetails from "./CategoryDetails";
const Param = () => {
  const props = useParams();
  console.log(props);
  return <CategoryDetails details={props} />;
};
export default Param;
