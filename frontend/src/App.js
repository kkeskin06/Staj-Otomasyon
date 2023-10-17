import React from "react";
import {Topline,UserHome,BasvuruForm, Home,BasvuruListe ,Ogrenciform,
  Login,Akademisyen,BasvuruBelgesi,OgrenciListesi,SirketListesi,SirketYetkilisi,
  OgrenciListesiBySirket,TeslimBelgeleri,TeslimBelgesiListe,Sicilfisi,TeslimBelgeleriAkademisyen,TeslimBelgeDetay,SirketBilgileri
,OgrenciEskiBasvuru,Uyeol,Forbidden} from "./components";
import {TokenProvider} from "./components/TokenContext"
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <TokenProvider>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<><Topline/><Home/></>}></Route>
          <Route path="userhome" element={<><Topline/><UserHome /></>}/>        
          <Route path="basvuru" element={<><Topline/><BasvuruForm /></>} />
          <Route path="ogrenciform/:id" element={<><Topline/><Ogrenciform /></>} />
          <Route path="basvuruliste" element={<><Topline/><BasvuruListe /></>} />
          <Route path="Login" element={<Login />} />
          <Route path="Akademisyen" element={<><Topline/><Akademisyen /></>} />
          <Route path="BasvuruBelgesi/:id" element={<><Topline/><BasvuruBelgesi /></>} />
          <Route path="ogrencilistesi" element={<><Topline/><OgrenciListesi /></>} />
          <Route path="sirketlistesi" element={<><Topline/><SirketListesi /></>} />
          <Route path="sirketyetkilisi" element={<><Topline/><SirketYetkilisi /></>} />
          <Route path="teslimbelgeleri" element={<><Topline/><TeslimBelgeleri /></>} />
          <Route path="ogrencilistesibysirket" element={<><Topline/><OgrenciListesiBySirket /></>} />
          <Route path="teslimbelgesiliste/:id" element={<><Topline/><TeslimBelgesiListe/></>} />
          <Route path="sicilfisi/:id" element={<><Topline/><Sicilfisi/></>} />
          <Route path="teslimbelgeleriakademisyen" element={<><Topline/><TeslimBelgeleriAkademisyen/></>} />
          <Route path="teslimbelgedetay/:id" element={<><Topline/><TeslimBelgeDetay/></>} />
          <Route path="sirketbilgileri" element={<><Topline/><SirketBilgileri/></>} />
          <Route path="ogrencieskibasvuru" element={<><Topline/><OgrenciEskiBasvuru/></>} />
          <Route path="uyeol" element={<Uyeol/>} />
          <Route path="forbidden" element={<Forbidden/>} />
      </Routes>
    </BrowserRouter>
    </TokenProvider>
  );
}

export default App;
