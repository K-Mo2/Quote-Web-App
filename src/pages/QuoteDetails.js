import React from "react";
import { useParams, Route } from "react-router";
import Comments from "../components/comments/Comments";

export default function QuoteDetails() {
  const { quoteId } = useParams();
  console.log(quoteId);
  return (
    <div>
      <h3>QuoteDetails</h3>
      <Route path={`/quotes/${quoteId}/comment`}>
        <Comments />
      </Route>
    </div>
  );
}
