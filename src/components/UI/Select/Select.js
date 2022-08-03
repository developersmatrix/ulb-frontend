import { forwardRef } from "react";
import styles from "./Select.module.css";

const Select = forwardRef((props, ref) => {
  const options = props.options.map((option) => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div className={`${styles["select_container"]} ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <select ref={ref} id={props.id} name={props.id} className={styles.select}>
        {options}
      </select>
    </div>
  );
});

export default Select;
