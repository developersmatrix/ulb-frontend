import { useRef } from "react";

import { useDispatch } from "react-redux";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Form from "../UI/Form/Form";
import Select from "../UI/Select/Select";
import styles from "./GetDataForm.module.css";

// import { addPtax } from "../../store/ptax/ptaxSlice";
import { getPtaxCollection } from "../../store/ptax/ptaxAction";

export const GetDataForm = (props) => {
  const collectionTypeRef = useRef(null);
  const financialYearRef = useRef(null);

  const dispatch = useDispatch();

  const getDataHandler = (event) => {
    event.preventDefault();

    const collectionType = collectionTypeRef.current.value;

    const financialYear = financialYearRef.current.value;
    // const startYear = financialYear.split("-")[0];
    const startYear = financialYear;
    const endYear = Number(startYear) + 1;

    console.log(collectionType);
    console.log(startYear, endYear);
    const params = {
      collectionType,
      startYear,
    };

    console.log(params);

    // dispatch(
    //   addPtax({
    //     id: 1,
    //     userId: 0,
    //     ptax: "21.25",
    //     startYear,
    //     endYear,
    //   })
    // );
    dispatch(getPtaxCollection(params));
  };

  const optionsCT = [
    {
      label: "Property Tax",
      value: "sas",
    },
    {
      label: "Water Tax",
      value: "water",
    },
    {
      label: "Lease & Rent",
      value: "rent",
    },
    {
      label: "Advertisement",
      value: "ad",
    },
    {
      label: "Trade License",
      value: "trade",
    },
  ];

  const optionsFY = [
    {
      label: "2022-23",
      value: 2022,
    },
    {
      label: "2021-22",
      value: 2021,
    },
    {
      label: "2020-21",
      value: 2020,
    },
    {
      label: "2019-20",
      value: 2019,
    },
    {
      label: "2018-19",
      value: 2018,
    },
  ];

  return (
    <Card>
      <Form onSubmit={getDataHandler}>
        <h1 className={styles.title}>Update Daily Collection Book</h1>
        <div className={styles.inputContainer}>
          <Select
            id="ctype"
            ref={collectionTypeRef}
            label="Collection Type"
            options={optionsCT}
          />
          <Select
            id="year"
            ref={financialYearRef}
            label="Financial Year"
            options={optionsFY}
          />
        </div>
        <Button type="submit">Get Data</Button>
      </Form>
    </Card>
  );
};
