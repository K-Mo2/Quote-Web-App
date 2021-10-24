import { Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
const DUMMY_QUOTES = [
  { id: "q1", author: "Well Smith", text: "Learning is fun." },
  { id: "q2", author: "John Doe", text: "React is a great framework." },
];
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/quotes" exact>
          <AllQuotes quotes={DUMMY_QUOTES} />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails quotes={DUMMY_QUOTES} />
        </Route>
        <Route path="/newQuote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
