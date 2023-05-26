import React from "react";
import Aksiyonlar from "./Aksiyonlar";
import Header from "./Header";

function Hakkımızda(props) {
  const { data } = props;

  return (
    <div>
      <Aksiyonlar />
      <div className="Hakkımızda">
        <p className="Hakkımızda Yazı">{data.Hakkimizda}</p>
      </div>
    </div>
  );
}

export default Hakkımızda;
