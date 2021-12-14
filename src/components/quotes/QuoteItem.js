import classes from "./QuoteItem.module.css";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { deleteSingleQuote } from "../lib/api";
import { useEffect } from "react";

const QuoteItem = ({ text, author, id, setUpdateState }) => {
  const { sendRequest, status, error } = useHttp(deleteSingleQuote, true);

  const deleteQuoteHandler = function () {
    sendRequest(id);
    setUpdateState(true);
  };

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link to={`/quotes/${id}`} className="btn">
        View Fullscreen
      </Link>
      <div className={classes.delete} onClick={deleteQuoteHandler}>
        <DeleteIcon color="error" />
      </div>
    </li>
  );
};

export default QuoteItem;
