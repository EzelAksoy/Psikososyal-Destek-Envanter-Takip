import React from "react";
import Aksiyonlar from "./Aksiyonlar";
import Header from "./Header";

function Etkinlik(props) {
  const { etkinlik } = props;
  return (
    <div>
      <Aksiyonlar />
      <div className="Etkinlik">
        {etkinlik.map((item, indeks) => (
          <p key={indeks} className="Etkinlik_yazi">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Etkinlik;
