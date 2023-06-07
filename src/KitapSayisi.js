import React ,{useState,useContext} from 'react'
import { KitapContext } from './KitapContext';

export default function KitapSayisi() {
    var [kitaplar, setKitaplar] = useContext(KitapContext);

  return (
    <div>
      {kitaplar.length}
    </div> 
  )
}
