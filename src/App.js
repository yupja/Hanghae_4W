import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { loadMainFB } from "./redux/modules/main";
import {db} from "./firebase"; ///......

import Add from "./Add";
import Main from "./Main";
import { Style } from "@material-ui/icons";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadMainFB());
  }, [dispatch]);
  

  return (
    <div className="App">
      <Title
        onClick={() => {
          history.push("/");
        }}
      >
        사전
      </Title>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/Add" exact>
          <Add />
        </Route>
      </Switch>
    </div>
  );
}

const Title = styled.div`
  max-width: 100%;
  background-color: #f5f5f5;
  color: #2e2d2e;
  font-size: 55px;
  font-weight: 900;
  margin: 0px;
  padding: 20px;
  border-bottom: 3px solid #2e2d2e;
`;

export default App;
