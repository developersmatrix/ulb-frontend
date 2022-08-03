import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Form from "../../UI/Form/Form";
import Input from "../../UI/Input/Input";
import styles from "./PtaxCollection.module.css";

const PtaxCollection = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[props.data.month];

  const test = () => {};

  return (
    <Card>
      <Form>
        <h1 className={styles.heading__primary}>
          {month} {props.data.year}
        </h1>
        <div className={styles.inputContainer}>
          <Input
            label="OB Collection"
            type="number"
            id="obcollection"
            value={props.data.OBC}
            onChange={test}
            disabled={false}
          />
          <Input
            label="Demand Collection"
            type="number"
            id="cydcollection"
            value={props.data.CYD}
            onChange={test}
            disabled={false}
          />
          <Input
            label="Total collection"
            type="number"
            id="totalcollection"
            value={22}
            onChange={test}
            disabled={true}
          />
        </div>
        <Button type="submit">Update</Button>
      </Form>
    </Card>
  );
};

export default PtaxCollection;
