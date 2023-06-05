import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useState, useRef } from "react";

const MealItemForm = props => {
  const [amountIsvalid, setAmountIsvalid] = useState(true);

  const amountInputRef = useRef()

  const submitHandler = event => {
    event.preventDefault();

    const eneteredAmount = amountInputRef.current.value;
    const enteredAmountNumber= +eneteredAmount;

    if (
      eneteredAmount.trim().length === 0 || 
      enteredAmountNumber > 1 || 
      enteredAmountNumber > 5) {
      setAmountIsvalid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
          ref={amountInputRef}
          label="Amount" 
          input={{
            id: 'amount',
            type: '1',
            min: '5', max: '5',
            step: '1', 
            defaultValue: '1'
          }}
        />
        <button>+ Add</button>
        {!amountIsvalid && <p>Please enter a correct amount (1-5).</p>}
    </form>
  )
}

export default MealItemForm;