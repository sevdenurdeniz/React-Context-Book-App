import React, { useState, createContext } from "react";

export const KitapContext = createContext();

export const KitapProvider = (props) => {
  const [kitaplar, setKitaplar] = useState([
    { kitapId: 1, kitapAd: "Pinokyo", kitapYazar: "carlo collodi" },
    { kitapId: 2, kitapAd: "Kaşağı", kitapYazar: "ömer seyfettin" },
  ]);
  return (
    <KitapContext.Provider value={[kitaplar,setKitaplar]}>
      {props.children}
    </KitapContext.Provider>
  );
};
