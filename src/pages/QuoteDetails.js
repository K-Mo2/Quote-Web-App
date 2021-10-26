import React from "react";
import { useParams, Route, Link } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

export default function QuoteDetails({ quotes }) {
  const { quoteId } = useParams();

  const quote = quotes.find((quote) => quote.id === quoteId);

  if (!quote) {
    return <p>No quotes found !</p>;
  }

  return (
    <div>
      <h3>QuoteDetails</h3>
      <HighlightedQuote {...quote} />
      <Route to={`/quotes/${quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${quoteId}/comments`} exact>
        <Comments />
      </Route>
    </div>
  );
}
