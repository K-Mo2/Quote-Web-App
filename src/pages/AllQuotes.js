import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../components/hooks/use-http";
import { getAllQuotes } from "../components/lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

export default function AllQuotes(props) {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest(getAllQuotes);
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="" centered>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if ((status === "completed" && !loadedQuotes) || loadedQuotes.length === 0) {
    return <NoQuotesFound />;
  }
  return (
    <div>
      <QuoteList quotes={loadedQuotes} />
    </div>
  );
}
