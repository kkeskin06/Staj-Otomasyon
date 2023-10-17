import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToken } from "./TokenContext";
function SirketYetkilisi(){

    const {token,isReady,getHeadersWithToken} = useToken();
    const [user,setUser] = useState({});

    // const requestOptions = {
    //     method: 'GET',
    //     headers: { 'Authorization' : `Bearer ${token}`},
    // };
   
    useEffect(() => {
        if(isReady == true){
            fetch("http://localhost:8080/api/user/name",getHeadersWithToken())
            .then(reponse => reponse.json())
            .then(response => setUser(response))
        }
    },[token])

    return(
        <div className="container">
        <div className="row">
        <div className="col-3">               
            <div className="row">
                <div className="col-4"></div>
            <img src="/user.png"
            style={{
                height: 80,
                width: 100,                   
                marginBottom:15
                
                }}/>   
            </div>
            
            <div className="row">
            <ul className="list-group" >
                    <li className="list-group-item list-group-item-primary">{JSON.stringify(user)}</li>
                    <br></br>
                    <li className="list-group-item list-group-item-primary">Hanım</li>                 
                    <br></br>
                    <li className="list-group-item list-group-item-primary">Getir</li>
                    <br></br>
                    <li className="list-group-item list-group-item-primary">chanım@getir.com.tr</li>
                </ul>                                                             
            </div>
                      
        </div>
                
        <div className="col-2">
            
        </div>
        <div className="col">
            <div className="row">
            <div className="card text-center" style={{marginTop:25}}>
                <div className="card-body">
                    <h5 className="card-title">Staj yapan öğrenciler</h5>
                    <p className="card-text">Şirketinizde staj yapan öğrencileri görüntüle</p>
                    <Link to={"/ogrencilistesibysirket"} class="btn btn-primary">Öğrenci Listesine Git</Link>
                </div>
            </div>
        </div>
        <br></br>
        <div className="row">
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Şirket Bilgileri</h5>
                    <p className="card-text">Şirketinize ait bilgileri görüntülebilirsiniz.</p>
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