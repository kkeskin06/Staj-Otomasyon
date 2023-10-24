
import React, { useEffect, useState } from "react";
import { useToken } from './TokenContext';


function OgrenciEskiBasvuru() {
    const {token,getHeadersWithToken} = useToken();
    const [basvurular, setBasvurular] = useState([]);
    useEffect(() => {
        
        fetch("http://localhost:8080/basvuru/get/get",getHeadersWithToken()) 
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))
    }, [token])

    let tb_data = basvurular.map((item) => {
        return (
            <tr key={item.id} style={{ textAlign: "center" }}>
                <td>{item.ogrenci.ogrno}</td>
                <td>{item.ogrenci.ad}</td>
                <td>{item.ogrenci.soyad}</td>
                <td>{item.ogrenci.sinif}</td>
                <td>{item.staj.stajTuru}</td>
                <td>{item.sirket.sirketAdi}</td>
                {item.stajDurumu === 'Onaylandi' && <td style={{ color: 'green' }}>
                    Onaylandı
                </td>}
                {item.stajDurumu === 'Reddedildi' && <td style={{ color: 'red' }}>
                    {item.stajDurumu}
                </td>}
                {item.stajDurumu === 'EksikBelgeli' && <td style={{ color: 'blue' }}>
                    Eksik Belgeli
                </td>}
                {item.stajDurumu === 'OnayBekliyor' && <td style={{ color: 'purple' }}>
                    Onay Bekliyor
                </td>}
                {/* <td><a href={`/ogrenciform/${item.id}`} class="btn btn-info">Detay</a></td> */}

            </tr>
        )
    })

    return (

        <div className="container">


            <table className="table table-Secondary table-striped">
                <thead >
                    <tr style={{ textAlign: "center", color: "Black", fontWeight: "bold" }}>
                        <td>
                            Öğrenci No


                        </td>
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
                            Staj Türü

                        </td>

                        <td>
                            Şirket Adı
                        </td>
                        <td>
                            Başvuru Durumu


                        </td>
                        {/* <td>

                        </td> */}

                    </tr>
                </thead>
                <tbody>
                    {tb_data}
                </tbody>
            </table>

        </div>

    )
}


export default OgrenciEskiBasvuru;