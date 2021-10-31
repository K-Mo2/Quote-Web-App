import { useRef, Fragment, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [inputIsValid, setInputIsValid] = useState(true);
  const [inputTouched, setInputTouched] = useState(false);
  const invalidInputStyles =
    (inputTouched && !inputIsValid) || !inputIsValid
      ? classes.invalidInput
      : "";

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    if (!enteredAuthor || !enteredText) {
      setInputIsValid(false);
      return;
    }

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const inputBlurHandler = (event) => {
    setInputTouched(true);
    if (event.target.value.trim() === "" && inputTouched) {
      setInputIsValid(false);
    }
  };
  const inputFocusHandler = function () {
    setInputTouched(true);
    setInputIsValid(true);
  };

  return (
    <Fragment>
      <Prompt
        when={inputTouched && !inputIsValid}
        message="Are you sure you want to leave this page"
      />
      <Card>
        <form
          className={classes.form}
          onSubmit={inputIsValid ? submitFormHandler : null}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              ref={authorInputRef}
              onBlur={inputBlurHandler}
              onFocus={inputFocusHandler}
              className={invalidInputStyles}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              rows="5"
              ref={textInputRef}
              onBlur={inputBlurHandler}
              onFocus={inputFocusHandler}
              className={invalidInputStyles}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn">Add Quote</button>
          </div>
          {!inputIsValid && <h3>Please enter a valid input</h3>}
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
