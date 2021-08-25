import { useEffect } from "react";
import styles from "./filter.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Filter = ({ setFilter }) => {
  function All() {
    useEffect(() => {
      setFilter(null);
    });

    return null;
  }

  function Сompleted() {
    useEffect(() => {
      setFilter(true);
    });

    return null;
  }

  function Uncompleted() {
    useEffect(() => {
      setFilter(false);
    });

    return null;
  }

  return (
    <Router>
      <ul className={`${styles.filterList}`}>
        <li>
          <Link to="/">All tasks</Link>
        </li>
        <li>
          <Link to="/completed">Сompleted tasks</Link>
        </li>
        <li>
          <Link to="/uncompleted">Uncompleted tasks</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <All />
        </Route>
        <Route path="/completed">
          <Сompleted />
        </Route>
        <Route path="/uncompleted">
          <Uncompleted />
        </Route>
      </Switch>
    </Router>
  );
};
