import React from "react";
import { useState, useEffect } from "react";
import {useToken} from "./TokenContext"
function OgrenciListesiBySirket() {
    const {token,  getHeadersWithToken} = useToken();
    const [basvuru, setBasvurular] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/basvuru/getbysirket/' + 490 , getHeadersWithToken()) //sirket id
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))
    },[token])

    let tb_data = basvuru.map((item) => {
        return (
            <tr key={item.id} style={{ textAlign: "center" }}>
                <td>{item.ogrenci.ad}</td>
                <td>{item.ogrenci.soyad}</td>
                <td>{item.ogrenci.tcno}</td>
                <td>{item.ogrenci.ogrno}</td>
                <td>{item.ogrenci.telno}</td>
                {item.stajDurumu == 'Onaylandi' && <td>
                    <a href={`/teslimbelgesiliste/${item.ogrenci.id}`} class="btn btn-primary">Detayları Gör</a>
                </td>}
                
            </tr>
            
        )

    })

    return (
        <div className="container">
            <table className="table table-Secondary table-striped">
                <thead class="thead-dark" >
                    <tr style={{ textAlign: "center", color: "Black", fontWeight: "bold" }}>
                        <td>
                            Ad
                        </td>
                        <td>
                            Soyad
                        </td>
                        <td>
                            TC No
                        </td>
                        <td>
                            Öğrenci No
                        </td>
                        <td>
                            Telefon No
                        </td>
                        <td>

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


export default OgrenciListesiBySirket;