import {React , useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useToken } from './TokenContext';
function UserHome(){
    const [ogrenci, setOgrenci] = useState({});
    const { token, getHeadersWithToken, isReady } = useToken();

    useEffect(() => {
        if (isReady == true) {
            fetch("http://localhost:8080/ogrenci", getHeadersWithToken())
                .then(reponse => reponse.json())
                .then(response => setOgrenci(response))
        }
    }, [token])
    return(
        <div class="container">
            <div className="row">
            <div class="col-3">               
                <div class="row">
                    <div className="col-4"></div>
                <img src="/user.png"
                style={{
                    height: 80,
                    width: 100,                   
                    marginBottom:15
                    
                    }}/>   
                </div>
                
                <div class="row">
                <ul class="list-group" >
                        <li class="list-group-item list-group-item-primary" >{ogrenci.ad}</li>
                        <br></br>
                        <li class="list-group-item list-group-item-primary">{ogrenci.soyad}</li>
                        <br></br>
                        <li class="list-group-item list-group-item-primary">{ogrenci.ogrno}</li>
                        <br></br>
                        <li class="list-group-item list-group-item-primary">{ogrenci.sinif} . Sınıf</li>
                        <br></br>
                        <li class="list-group-item list-group-item-primary">{ogrenci.telno}</li>
                        <br></br>
                        <li class="list-group-item list-group-item-primary">{ogrenci.mail}</li>
                    </ul>                   
                    <div className="col-3"></div>                 
                    {/* <button type="button" class="btn btn-primary" style={{width:140,height:40,marginTop:15}}>Profili Güncelle</button>  */}
                </div>
                          
            </div>

            <div class="col-2">
                
            </div>
            <div class="col">
                <div className="row">
                <div class="card text-center" style={{marginTop:30}}>
                    <div class="card-body">
                        <h5 class="card-title">Staj Başvurusu</h5>
                        <p class="card-text">Yeni Staj Başvurusu Yapmak için gerekli belgeleri yüklemeli ve başvuru formunu doldurmalısın.</p>
                        <Link to={"/Basvuru"} class="btn btn-primary">Başvuru Formuna Git</Link>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Eski Başvurular</h5>
                        <p class="card-text">Geçmiş Staj Başvurularını Görüntüleyebilir ve Durumlarını görebilirsin.</p>
                        <Link to={"/ogrencieskibasvuru"} class="btn btn-primary">Başvurularıma Git</Link>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Staj Belge Teslimi</h5>
                        <p class="card-text">Stajını Tamamladığında okula teslim etmen gereken belgeleri yüklemelesin.</p>
                        <Link to={"/teslimbelgeleri"} class="btn btn-primary">Belge Teslimine Git</Link>
                    </div>
                </div>
            </div>
            </div>    
            </div>  
        </div>
    )
}

export default UserHome;