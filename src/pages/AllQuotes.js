import React from "react";
import QuoteList from "../components/quotes/QuoteList";


export default function AllQuotes(props) {
  return (
    <div>
      <QuoteList quotes={props.quotes} />
    </div>
  );
}
