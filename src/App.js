import React from 'react';
import './App.css';
import KitapListesi from './KitapListesi';
import KitapSayisi from './KitapSayisi';
import { KitapProvider } from './KitapContext';
import KitapEkle from './KitapEkle';

function App() {
  return (
    <KitapProvider>
      <KitapListesi></KitapListesi>
      <KitapSayisi></KitapSayisi>
      <KitapEkle></KitapEkle>
    </KitapProvider>
  );
}

export default App;
