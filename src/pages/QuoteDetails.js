import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

export default function QuoteDetails({ quotes }) {
  const { quoteId } = useParams();
  const match = useRouteMatch();
  const quote = quotes.find((quote) => quote.id === quoteId);

  if (!quote) {
    return <p>No quotes found !</p>;
  }

  return (
    <div>
      <h3>QuoteDetails</h3>
      <HighlightedQuote {...quote} />
      <Route to={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`} exact>
        <Comments />
      </Route>
    </div>
  );
}
