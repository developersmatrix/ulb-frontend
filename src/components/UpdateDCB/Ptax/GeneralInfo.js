import React, { useState } from "react";

import Card from "../../UI/Card/Card";
import Form from "../../UI/Form/Form";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

import styles from "./GeneralInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updatePtaxCollection } from "../../../store/ptax/ptaxAction";

const GeneralInfo = (props) => {
  const info = useSelector((state) => state.ptax.ptaxData);
  const startYear = useSelector((state) => state.ptax.fetchedYear);
  const endYear = Number(startYear) + 1;
  const dispatch = useDispatch();

  //states of property types
  const [residential, setResidential] = useState(info.residential);

  const [commercial, setCommercial] = useState(info.commercial);
  const [vacant, setVacant] = useState(info.vacant);
  const tnp =
    Number(info.commercial) + Number(info.vacant) + Number(info.residential);
  const [totalProperties, setTotalProperties] = useState(tnp);

  const [openingBalance, setOpeningBalance] = useState(info.openingBalance);
  const [currentYearDemand, setCurrentYearDemand] = useState(
    info.currentYearDemand
  );
  const [totalDemand, setTotalDemand] = useState(
    +openingBalance + +currentYearDemand
  );
  const [isDisabled, setIsDisabled] = useState(false);

  const residentialHandler = (event) => {
    setResidential(event.target.value);
    const tnp =
      Number(event.target.value) + Number(commercial) + Number(vacant);
    setTotalProperties(tnp);
  };

  const commercialHandler = (event) => {
    setCommercial(event.target.value);
    const tnp =
      Number(event.target.value) + Number(residential) + Number(vacant);
    setTotalProperties(tnp);
  };

  const vacantHandler = (event) => {
    setVacant(event.target.value);
    const tnp =
      Number(event.target.value) + Number(residential) + Number(commercial);
    setTotalProperties(tnp);
  };

  const openingBalanceHandler = (event) => {
    console.log(event.target.value);
    setOpeningBalance(event.target.value);
    setTotalDemand(Number(event.target.value) + Number(currentYearDemand));
  };

  const currentYearDemandHandler = (event) => {
    setCurrentYearDemand(event.target.value);
    setTotalDemand(+openingBalance + +event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      residential.toString().trim().length === 0 ||
      commercial.toString().trim().length === 0 ||
      vacant.toString().trim().length === 0 ||
      openingBalance.toString().trim().length === 0 ||
      currentYearDemand.toString().trim().length === 0
    ) {
      return;
    }

    const generalData = {
      id: info._id,
      residential: Number(residential),
      commercial: Number(commercial),
      vacant: Number(vacant),
      openingBalance: Number(openingBalance),
      currentYearDemand: Number(currentYearDemand),
    };

    if (!isDisabled) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      return;
    }
    console.log(generalData);
    dispatch(updatePtaxCollection(generalData));
  };

  return (
    <Card className={styles.container__general}>
      <Form onSubmit={submitHandler}>
        <h1 className={styles.heading__primary}>
          Property Tax Collection - {` ${startYear}- ${endYear}`}
        </h1>
        <div className={styles["form__general--info"]}>
          <Input
            label="Residential Properties"
            type="number"
            id="residential"
            value={residential}
            onChange={residentialHandler}
            disabled={isDisabled}
            errorMsg={"wrong"}
          />
          <Input
            label="Commercial Properties"
            type="number"
            id="commercial"
            value={commercial}
            onChange={commercialHandler}
            disabled={isDisabled}
          />
          <Input
            label="Vacant Properties"
            type="number"
            id="vacant"
            value={vacant}
            onChange={vacantHandler}
            disabled={isDisabled}
          />

          <Input
            label="Total No of properties"
            type="number"
            id="totalnoofproperties"
            value={totalProperties}
            disabled={true}
          />

          <Input
            label="Opening Balance"
            type="number"
            id="openingbalance"
            value={openingBalance}
            onChange={openingBalanceHandler}
            disabled={isDisabled}
          />

          <Input
            label="Current year Demand"
            type="number"
            id="currentyearDemand"
            value={currentYearDemand}
            onChange={currentYearDemandHandler}
            disabled={isDisabled}
          />

          <Input
            label="Total Demand"
            type="number"
            id="totalDemand"
            value={totalDemand}
            disabled={true}
          />
        </div>
        <Button type="submit">{isDisabled ? "Edit" : "Update"}</Button>
      </Form>
    </Card>
  );
};

export default GeneralInfo;
