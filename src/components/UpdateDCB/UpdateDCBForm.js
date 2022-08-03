import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateGenInfoStatus } from "../../store/ptax/ptaxSlice";
import AddBtn from "./Ptax/AddBtn";
import GeneralInfo from "./Ptax/GeneralInfo";
import PtaxCollectionList from "./Ptax/PtaxCollectionList";

function UpdateDCBForm() {
  const ptaxData = useSelector((state) => state.ptax.ptaxData);
  const isGenInfoEmpty = useSelector((state) => state.ptax.giIsEmpty);
  const isMonColEmpty = useSelector((state) => state.ptax.mcIsEmpty);
  const isMonColFull = useSelector((state) => state.ptax.mcIsFull);
  //   const [isGenInfoEmpty, setGenInfoEmpty] = useState();

  const dispatch = useDispatch();

  const showGIForm = (event) => {
    event.preventDefault();
    console.log("dispatch");
    dispatch(updateGenInfoStatus());
  };

  return (
    <Fragment>
      {isGenInfoEmpty && (
        <AddBtn onClick={showGIForm}>Add General details</AddBtn>
      )}

      {!isGenInfoEmpty && isMonColEmpty && (
        <Fragment>
          <GeneralInfo id={ptaxData._id} />
          {ptaxData._id === null && <AddBtn>Add Monthly Collection</AddBtn>}
        </Fragment>
      )}

      {!isGenInfoEmpty && !isMonColEmpty && !isMonColFull && (
        <Fragment>
          <GeneralInfo id={ptaxData._id} />
          <AddBtn>Add Monthly Collection</AddBtn>
          <PtaxCollectionList />
        </Fragment>
      )}
      {!isGenInfoEmpty && !isMonColEmpty && isMonColFull && (
        <Fragment>
          <GeneralInfo id={ptaxData._id} />
          <AddBtn>Add Monthly Collection</AddBtn>
          <PtaxCollectionList />
        </Fragment>
      )}
    </Fragment>
  );
}

export default UpdateDCBForm;
