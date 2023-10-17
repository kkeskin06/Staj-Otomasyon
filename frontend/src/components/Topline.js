import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useToken } from './TokenContext';
function Topline(args) {

  const {token} = useToken();

  const setLogOutToken = () =>{
    localStorage.setItem("AuthInfo" , null)
    
  };

  return (
    <nav class="navbar navbar-expand-lg " style={{ marginBottom: 25, backgroundColor: "#C9DFF1" }}>
      <div class="container">
        <div className="col ">
          <img src="/ktunlogo.png" style={{ height: 70, weight: 70 }}></img>
        </div>
        <div className="col">
          <a class="navbar-brand" href="/" style={{ color: "#005D8E", fontWeight: "bold" }}>Konya Teknik Üniversitesi Staj Otomasyonu</a>
        </div>
        <div className="col">

        </div>
        <div className="col">
          <Link to={"/sirketyetkilisi"} class="btn btn-primary">Şirket Yetkilisi Profil</Link>
        </div>
        <div className="col">
          <Link to={"/Akademisyen"} class="btn btn-primary">Akademisyen Profil</Link>
        </div>
        <div className="col">
          <Link to={"/UserHome"} class="btn btn-primary">Öğrenci Profil</Link>
        </div>
        <div className="col">
          <Link to={"/Login"} class="btn btn-primary" onClick={setLogOutToken}>Çıkış</Link>
        </div>
      </div>
      <br></br>
    </nav>
  );
}

export default Topline;