import React from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

import styles from "./AddBtn.module.css";

function AddBtn(props) {
  return (
    <Card className={styles["btn-container"]}>
      <Button onClick={props.onClick}>{props.children}</Button>
    </Card>
  );
}

export default AddBtn;
