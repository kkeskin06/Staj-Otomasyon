import React , { useState }from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { } from "react-router-dom";
import { useNavigate } from "react-router";

function Uyeol(){


    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
    
        const uye = {
          "email": email,
          "password": password,
          "username": username
        }
    
    
        fetch("http://localhost:8080/login", {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(uye)
        }).then((Response) => {
          console.log(Response.status)
          console.log(email)
          console.log(password)
          if (Response.status == 200) {
            alert("Giris Başarılı")
            let path = `/`;
            navigate(path);
    
          } else {
            alert("mail hesabı veya parola hatalı")
          }
        }).catch((err) => {
    
          console.log(err);
        });
    
    
      }
    

    return(
        <div class="container">
        <br></br>
        <div class="page-header" style={{textAlign:"center"}}>
          <h1>Konya Teknik Üniversitesi Staj Otomasyonu</h1>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <div class="col">
  
            <img src="/interview.png"
              style={{
                height: 400,
                width: 525,
                marginTop: 70
  
              }} />
          </div>
  
  
          <div class="col" style={{ marginTop: 50 }}>
  
            <br></br>
            <div className="row">
              <form>
              
                <div class="form-outline mb-4">
                  <input type="email" id="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <label class="form-label" for="email">Mail Adresi</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="isim" id="email" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <label class="form-label" for="isim">İsim</label>
                </div>
  
                <div class="form-outline mb-4">
                  <input type="password" id="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label class="form-label" for="password">Şifre</label>
                </div>
  
  
                <div class="row mb-4">
                  <button type="submit" class="btn btn-primary btn-block mb-4" onClick={handleClick} >Uye Ol</button>
                  <div class="col">
  
                    
                  </div>
                  <div class="col">
  
  
                 
                  </div>
                </div>
  
              </form>
            </div>
  
          </div>
        </div>
      </div>
    )
}

export default Uyeol;