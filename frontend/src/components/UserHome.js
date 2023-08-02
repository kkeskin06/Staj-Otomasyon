import {React , useEffect, useState} from "react";

function UserHome(){
    /*const [ogrenciler,setOgrenciler] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/ogrenci/get/')
        .then(reponse => reponse.json())
        .then(response => setOgrenciler(response))     
      })
    let data = ogrenciler.map((item)=>{
        
    })*/
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
                        <li class="list-group-item list-group-item-primary" >zafer</li>
                        <br></br>
                        <li class="list-group-item list-group-item-primary">güney</li>
                        <br></br>
                        <li class="list-group-item list-group-item-primary">191213001</li>
                        <br></br>
                        <li class="list-group-item list-group-item-primary">Bilgisayar Mühendisliği</li>
                        <br></br>
                        <li class="list-group-item list-group-item-primary">3.Sınıf</li>
                        <br></br>
                        <li class="list-group-item list-group-item-primary">+90 541 852 3265</li>
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
                        <a href="/Basvuru" class="btn btn-primary">Başvuru Formuna Git</a>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Eski Başvurular</h5>
                        <p class="card-text">Geçmiş Staj Başvurularını Görüntüleyebilir ve Durumlarını görebilirsin.</p>
                        <a href="/ogrencieskibasvuru" class="btn btn-primary">Başvurularıma Git</a>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Staj Belge Teslimi</h5>
                        <p class="card-text">Stajını Tamamladığında okula teslim etmen gereken belgeleri yüklemelesin.</p>
                        <a href="/teslimbelgeleri" class="btn btn-primary">Belge Teslimine Git</a>
                    </div>
                </div>
            </div>
            </div>    
            </div>  
        </div>
    )
}

export default UserHome;