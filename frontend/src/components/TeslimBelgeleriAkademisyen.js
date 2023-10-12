
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
import { useToken } from './TokenContext';
import { Icon } from 'semantic-ui-react'

function TeslimBelgeleriAkademisyen() {

    // const navigate = useNavigate();
    const {token, getHeadersWithToken } = useToken();
    const [basvurular, setBasvurular] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/teslim/getTeslimbelgeleri",getHeadersWithToken())
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
                
                {item.teslimDurumu === 'Onaylandi' && <td style={{ color: 'green' }}>
                    Onaylandı
                </td>}
                {item.teslimDurumu === 'SicilFisiOnayiBekliyor' && <td style={{ color: 'purple' }}>
                    Sicil Fişi Onayı Bekliyor
                </td>}
                {item.teslimDurumu === 'Reddedildi' && <td style={{ color: 'red' }}>
                Reddedildi
                </td>}
                {item.teslimDurumu === 'Reddedildi' && 
                <td><a href={`/teslimbelgedetay/${item.id}`} class="btn btn-info">Detay</a></td>}
                {item.teslimDurumu === 'Onaylandi' && 
                <td><a href={`/teslimbelgedetay/${item.id}`} class="btn btn-info">Detay</a></td>}
            </tr>
        )





    })
    const [keyword, setKeyword] = useState();
    const aramayap = (e) => {
        e.preventDefault()

        fetch("http://localhost:8080/teslim/search/" + keyword)
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))
        console.log(basvurular)
    }
    const refresh = () => { window.location.reload(true) }

    const sirala = () => {
        fetch("http://localhost:8080/teslim/siralano")
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))

    }

    const sirala2 = () => {
        fetch("http://localhost:8080/teslim/siralanoDesc")
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))

    }

    const siralaAd = () => {
        fetch("http://localhost:8080/teslim/siralaad")
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))

    }

    const siralaAdDesc = () => {
        fetch("http://localhost:8080/teslim/siralaadDesc")
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))

    }

    const siralaDurum = () => {
        fetch("http://localhost:8080/teslim/siraladurum")
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))

    }

    const siralaDurumDesc= () => {
        fetch("http://localhost:8080/teslim/siraladurumDesc")
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))

    }
    return (

        <div className="container">

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="İsime veya öğrenci numarasına Göre Ara" onChange={(e) => setKeyword(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="submit" onClick={aramayap}>Ara</button>
                    <button class="btn btn-outline-secondary" type="button" onClick={refresh}>Listeye Geri Dön</button>
                </div>

            </div>
            <table className="table table-Secondary table-striped">
                <thead >
                    <tr style={{ textAlign: "center", color: "Black", fontWeight: "bold" }}>
                        <td>
                            Öğrenci No
                            <Icon name='angle double up' size='large' onClick={sirala} />
                            <Icon name='angle double down' size='large' onClick={sirala2} />

                        </td>
                        <td>
                            Ad
                            <Icon name='angle double down' size='large' onClick={siralaAd} />
                            <Icon name='angle double up' size='large' onClick={siralaAdDesc} />
                        </td>
                        <td>
                            Soyad
                        </td>
                        <td>
                            Sınıf
                        </td>
                        <td>
                            Durum
                            <Icon name='angle double down' size='large' onClick={siralaDurum} />
                            <Icon name='angle double up' size='large' onClick={siralaDurumDesc} />
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



export default TeslimBelgeleriAkademisyen;

