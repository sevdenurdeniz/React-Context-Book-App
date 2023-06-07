import React, { useState, useEffect, useContext } from "react";
import Kitap from "./Kitap";
import { KitapContext } from "./KitapContext";

export default function KitapListesi() {
  var [kitaplar, setKitaplar] = useContext(KitapContext);

  const baslikStyle = {
    color: "coral",
  };
  useEffect(() => {});

  return (
    <div>
      <h1 style={baslikStyle}>Kitap Listesi</h1>
      {kitaplar.map((kitap) => (
        <Kitap ad={kitap.kitapAd} yazar={kitap.kitapYazar} key={kitap.kitapId}></Kitap>
      ))}
 
 
    </div>
  );
}
