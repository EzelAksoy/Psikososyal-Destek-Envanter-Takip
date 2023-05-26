import React from "react";
import Header from "./Header";
import Aksiyonlar from "./Aksiyonlar";
function Gönüllü() {
  return (
    <div>
      <Aksiyonlar />
      <label>Kullanıcı Adı</label>
      <input type="text" />
    </div>
  );
}

export default Gönüllü;
