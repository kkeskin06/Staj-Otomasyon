import React from "react";
import { Link } from "react-router-dom";
function SirketYetkilisi(){
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
                    <li class="list-group-item list-group-item-primary">Cansel</li>
                    <br></br>
                    <li class="list-group-item list-group-item-primary">Hanım</li>                 
                    <br></br>
                    <li class="list-group-item list-group-item-primary">Getir</li>
                    <br></br>
                    <li class="list-group-item list-group-item-primary">chanım@getir.com.tr</li>
                </ul>                                                             
            </div>
                      
        </div>

        <div class="col-2">
            
        </div>
        <div class="col">
            <div className="row">
            <div class="card text-center" style={{marginTop:25}}>
                <div class="card-body">
                    <h5 class="card-title">Staj yapan öğrenciler</h5>
                    <p class="card-text">Şirketinizde staj yapan öğrencileri görüntüle</p>
                    <Link to={"/ogrencilistesibysirket"} class="btn btn-primary">Öğrenci Listesine Git</Link>
                </div>
            </div>
        </div>
        <br></br>
        <div className="row">
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">Şirket Bilgileri</h5>
                    <p class="card-text">Şirketinize ait bilgileri görüntülebilirsiniz.</p>
                    <Link to={"/sirketbilgileri"} class="btn btn-primary">Şirket Bilgilerine git</Link>
                </div>
            </div>
        </div>
        </div>    
        </div>  
    </div>
    )
}

export default SirketYetkilisi;