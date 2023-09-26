import React, { useState, useEffect } from "react";

function SirketListesi(){
    const [sirketler,setSirketler] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/sirket/get")
        .then(reponse => reponse.json())
        .then(response => setSirketler(response))
    },[])

    let tb_data = sirketler.map((item)=>{return(
        <tr key={item.id} style={{textAlign:"center"}}>
        <td>{item.sirketAdi}</td>
        <td>{item.personelSayisi}</td>
        <td>{item.sirketLokasyon}</td>
        <td>{item.email}</td>
        <td>{item.vergino}</td>
        <td>{item.sirketNumara}</td>
        <td>{item.sirketHizmetAlani}</td>
        </tr>
    )
})
    return(
        <div className="container">
        <table className="table table-Secondary table-striped">
            <thead >
                <tr style={{textAlign:"center",color:"Black",fontWeight:"bold"}}>
                    <td>
                        Şirket Adı
                    </td>
                    <td>
                        Personel Sayısı
                    </td>
                    <td>
                        Lokasyon
                    </td>
                    <td>
                        Mail
                    </td>
                    <td>
                        Vergi No
                    </td>
                    <td>
                        Telefon Numarası
                    </td>
                    <td>
                        Hizmet Alanı
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

export default SirketListesi;