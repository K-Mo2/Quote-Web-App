import React, { useState, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../components/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

export default function QuoteDetails({ quotes }) {
  const { quoteId } = useParams();
  const match = useRouteMatch();
  const [loadCommentBtn, setLoadCommentBtn] = useState(true);
  const loadCommentBtnHandler = () => {
    setLoadCommentBtn(false);
  };
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

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
  if (!loadedQuotes.text) {
    return <p>No quotes found !</p>;
  }

  return (
    <div>
      <h3>QuoteDetails</h3>
      <HighlightedQuote {...loadedQuotes} />
      <Route to={`${match.path}`} exact>
        {loadCommentBtn && (
          <div className="centered">
            <Link
              className="btn--flat"
              to={`${match.url}/comments`}
              onClick={loadCommentBtnHandler}
            >
              Load Comments
            </Link>
          </div>
        )}
      </Route>
      <Route path={`${match.path}/comments`} exact>
        <Comments quoteId={quoteId} />
      </Route>
    </div>
  );
}
