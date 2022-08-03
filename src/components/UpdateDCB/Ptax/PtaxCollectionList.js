import { Fragment } from "react";
import { useSelector } from "react-redux";
import PtaxCollection from "./PtaxCollection";

const PtaxCollectionList = (props) => {
  const collectionAmt = useSelector(
    (state) => state.ptax.ptaxData.monthlyCollection
  );

  console.log(collectionAmt);

  if (collectionAmt === undefined) {
    return <div></div>;
  }

  const ptaxCollection = collectionAmt.map((collection) => (
    <PtaxCollection key={collection._id} data={collection} />
  ));

  return <Fragment>{ptaxCollection}</Fragment>;
};

export default PtaxCollectionList;
