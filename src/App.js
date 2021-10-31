import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoadingSpinner from "./components/UI/LoadingSpinner";
const AllQuotes = lazy(() => import("./pages/AllQuotes"));
const QuoteDetail = lazy(() => import("./pages/QuoteDetail"));
const NewQuote = lazy(() => import("./pages/NewQuote"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Layout = lazy(() => import("./components/layout/Layout"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/newQuote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Suspense>
  );
}

export default App;
