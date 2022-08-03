import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetDataForm } from "./GetDataForm";
import { resetPtax } from "../../store/ptax/ptaxSlice";

import styles from "./UpdateDCB.module.css";
import UpdateDCBForm from "./UpdateDCBForm";

export const UpdateDCB = () => {
  const gotData = useSelector((state) => state.ptax.dataFetched);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetPtax());
    };
  }, [dispatch]);

  return (
    <div className={styles["container"]}>
      <GetDataForm />
      {gotData && <UpdateDCBForm />}
    </div>
  );
};
