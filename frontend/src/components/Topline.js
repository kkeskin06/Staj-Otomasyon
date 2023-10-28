
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useToken } from './TokenContext';
import React, { useEffect, useState } from "react";
function Topline(args) {

  const { token, getHeadersWithToken, isReady } = useToken();
  const [role, setRole] = useState([]);
  useEffect(() => {
    if (isReady == true) {
      fetch("http://localhost:8080/api/user/role", getHeadersWithToken())
        .then(reponse => reponse.json())
        .then(response => setRole(response))
    }
  }, [token])
  //console.log(role[0].name)
  const setLogOutToken = () => {
    localStorage.setItem("AuthInfo", null)

  };

  let content = null;

  if (role && role[0] && role[0].name && role[0].name === "Sirket") {
    content = (
      <Link to="/sirketyetkilisi" className="btn btn-primary">Profil</Link>
    );
  }

  if (role && role[0] && role[0].name && role[0].name === "Akademisyen") {
    content = (
      <Link to={"/Akademisyen"} class="btn btn-primary">Profil</Link>
    );
  }

  if (role && role[0] && role[0].name && role[0].name === "Ogrenci") {
    content = (
      <Link to={"/UserHome"} class="btn btn-primary">Profil</Link>
    );
  }

  return (
    <nav class="navbar navbar-expand-lg " style={{ marginBottom: 25, backgroundColor: "#C9DFF1" }}>
      <div class="container">
        <div className="col ">
          <img src="/ktunlogo.png" style={{ height: 70, weight: 70 }}></img>
        </div>
        <div className="col">

          <a class="navbar-brand" href="/" style={{ color: "#005D8E", fontWeight: "bold" }}>Konya Teknik Üniversitesi Staj Otomasyonu</a>
        </div>
        

        {/* <div className="col">
          {(role && role[0] && role[0].name && role[0].name==="Sirket") ? (
            <Link to="/sirketyetkilisi" className="btn btn-primary">Şirket Yetkilisi Profil</Link>
          ) : null}
        </div>
        <div className="col">
          {(role && role[0] && role[0].name && role[0].name==="Akademisyen") ? (
           <Link to={"/Akademisyen"} class="btn btn-primary">Akademisyen Profil</Link>
          ) : null}
        </div>
        <div className="col">
          {(role && role[0] && role[0].name && role[0].name==="Ogrenci") ? (
            <Link to={"/UserHome"} class="btn btn-primary">Öğrenci Profil</Link>
          ) : null}
        </div> */}
        
        <div className='col-1'>
          {content}
        </div>

        <div className="col-2">
          <Link to={"/Login"} class="btn btn-primary" onClick={setLogOutToken}>Çıkış</Link>
        </div>
       
        


        {/* 
        <div className="col">
          <Link to={"/Akademisyen"} class="btn btn-primary">Akademisyen Profil</Link>
        </div>
        <div className="col">
          <Link to={"/UserHome"} class="btn btn-primary">Öğrenci Profil</Link>
        </div> */}

      </div>
      <br></br>
    </nav>
  );
}

export default Topline;