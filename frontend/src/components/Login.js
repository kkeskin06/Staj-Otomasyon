import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from "react-router-dom";
import { useNavigate } from "react-router";
function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(null)

  const handleClick = (e) => {
    e.preventDefault()

    const giris = {
      "username": username,
      "password": password
    }


    fetch("http://localhost:8080/auth", {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(giris)
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((data) => {
          const jwtToken = data.jwtToken;
          setToken(jwtToken);
          alert("Giris Başarılı")
          let path = `/`;
          navigate(path);
        });
      } else {
        alert("Mail hesabı veya parola hatalı");
      }
    }).catch((err) => {
      console.error(err);
    });



    // .then((Response) => {
    //   console.log(Response.status)
    //   console.log(username)
    //   console.log(password)

    //   if (Response.status == 200) {
    //     alert("Giris Başarılı")
    //     let path = `/`;
    //     navigate(path);
    //   } else {
    //     alert("mail hesabı veya parola hatalı")
    //   }
    // }).catch((err) => {

    //   console.log(err);
    // });


  }



  return (
    <div >
      <div class="container" >
        <br></br>
        <div class="page-header" style={{ textAlign: "center", color: "#005D8E" }}>
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


          <div class="col" style={{ marginTop: 100 }}>

            <br></br>
            <div className="row">
              <form>

                <div class="form-outline mb-4">
                  <input type="username" id="username" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <label class="form-label" for="username">Kullanıcı Adı</label>
                </div>


                <div class="form-outline mb-4">
                  <input type="password" id="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label class="form-label" for="password">Şifre</label>
                </div>


                <div class="row mb-4">
                  <button type="submit" class="btn btn-primary btn-block mb-4" onClick={handleClick} >Giriş Yap</button>
                  <div class="col">

                    {/* <a href="#!">Şifremi Unuttum</a> */}
                  </div>
                  <div class="col">


                    <p>Üye Değil misin ? <a href="/uyeol">Kayıt Ol</a></p>
                  </div>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;