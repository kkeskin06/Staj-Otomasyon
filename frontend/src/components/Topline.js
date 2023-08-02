import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Topline(args) {
 

  return (
  <nav class="navbar navbar-expand-lg bg-secondary" style={{marginBottom:25}}>
    <div class="container">
      <div className="col ">
      <img src="/ktunlogo.png" style={{height:70,weight:70}}></img>
      </div>
      <div className="col">
      <a class="navbar-brand" href="/" style={{color:"white",fontWeight:"bold"}}>Konya Teknik Üniversitesi Staj Otomasyonu</a>
      </div>
      <div className="col">
        
      </div>
      <div className="col">
      <a href="/sirketyetkilisi" class="btn btn-primary">Şirket Yetkilisi Profil</a>  
      </div>
      <div className="col">
      <a href="/Akademisyen" class="btn btn-primary">Akademisyen Profil</a>  
      </div>
      <div className="col">
      <a href="/UserHome" class="btn btn-primary">Öğrenci Profil</a>  
      </div>
    </div>
    <br></br>
  </nav>
  );
}

export default Topline;