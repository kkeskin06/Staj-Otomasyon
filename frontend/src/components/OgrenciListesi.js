import React, { useState, useEffect } from "react";

function OgrenciListesi(){
    const [ogrenciler,setOgrenciler] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/ogrenci/get")
        .then(reponse => reponse.json())
        .then(response => setOgrenciler(response))
    })
    let tb_data = ogrenciler.map((item)=>{return(
        <tr key={item.id} style={{textAlign:"center"}}>
        <td>{item.ad}</td>
        <td>{item.soyad}</td>
        <td>{item.sinif}</td>
        <td>{item.tcno}</td>
        <td>{item.ogrno}</td>
        <td>{item.telno}</td>
        </tr>
    )
})
    return(
        <div className="container">
        <table className="table table-Secondary table-striped">
            <thead >
                <tr style={{textAlign:"center",color:"Black",fontWeight:"bold"}}>
                    <td>
                        Ad
                    </td>
                    <td>
                        Soyad
                    </td>
                    <td>
                        Sınıf
                    </td>
                    <td>
                        TC kimlik Numarası
                    </td>
                    <td>
                        Ogrenci Numarası
                    </td>
                    <td>
                        Telefon Numarası
                    </td>
                  
                </tr>
            </thead>
            <tbody>
                {tb_data}
            </tbody>
        </table>
    </div>
    )
}

export default OgrenciListesi;