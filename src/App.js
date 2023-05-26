import "./reset.css";
import "./Css/App.css";
import dummydata from "./data";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Destekçiler from "./components/Destekçiler";
import Aksiyonlar from "./components/Aksiyonlar";
import Haberler from "./components/Haberler";
import Bilgiler from "./components/Bilgiler";
import Hakkımızda from "./components/Hakkımızda";
import Gönüllü from "./components/Gönüllü";
import Etkinlikler from "./components/Etkinlikler";
import { getKuruluslarAPI, getEtkinliklerAPI } from "./Reducer/action";
import { useDispatch } from "react-redux";

function App() {
  const [data] = useState(dummydata);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getKuruluslarAPI());
  }, []);
  useEffect(() => {
    dispatch(getEtkinliklerAPI());
  });
  return (
    <div className="App">
      <Header data={data} />
      <Switch>
        <Route exact path="/">
          <Aksiyonlar aksiyon={data} />
          <Haberler />
          <Bilgiler />
          <Destekçiler />
        </Route>
        <Route path="/Giriş Yap">
          <Login />
        </Route>
        <Route path="/Hakkımızda">
          <Hakkımızda data={data.Aksiyonlar} />
        </Route>
        <Route path="/Gönüllü Ol">
          <Gönüllü />
        </Route>
        <Route path="/Etkinlik Takvimi">
          <Etkinlikler data={data.Aksiyonlar} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
