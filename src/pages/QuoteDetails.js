import React from "react";
import { useParams, Route } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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
      <Route path={`/quotes/${quoteId}/comment`}>
        <Comments />
      </Route>
    </div>
  );
}
