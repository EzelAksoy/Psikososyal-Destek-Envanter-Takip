import React from "react";
import Bilgi from "./Bilgi";
import "../Css/Bilgiler.css";
import { useSelector } from "react-redux";

function Bilgiler() {
  const data = useSelector((state) => state.UlaşılanKisi);
  const data1 = useSelector((state) => state.Destek);
  const data2 = useSelector((state) => state.Etkinlikler.length);
  return (
    <div className="Bilgiler">
      <div className="UlaşılanKişi">
        <p>Ulaşılan Kişi</p>
        <img src={require("../photo/image9.png")} />
        <p>{data}</p>
      </div>
      <div className="UlaşılanKişi">
        <p>Destek Sayısı</p>
        <img src={require("../photo/image7.png")} />
        <p>{data1}</p>
      </div>
      <div className="UlaşılanKişi">
        <p>Etkinlik Sayısı</p>
        <img src={require("../photo/image8.png")} />
        <p>{data2}</p>
      </div>
    </div>
  );
}

export default Bilgiler;
