import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
import { useToken } from './TokenContext';
import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";
function BasvuruListe() {

    // const navigate = useNavigate();
    const [basvurular, setBasvurular] = useState([]);
    const [pageNo, setPageNo] = useState();
    const { token, getHeadersWithToken } = useToken();

    useEffect(() => {
        fetch("http://localhost:8080/basvuru/get", getHeadersWithToken())
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
                <td>
                    <Link to={`/ogrenciform/${item.id}`} class="btn btn-info">Detay</Link></td>

            </tr>
        )





    })
    const [keyword, setKeyword] = useState();

    const aramayap = (e) => {
        e.preventDefault()

        fetch("http://localhost:8080/basvuru/search/" + keyword,getHeadersWithToken())
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))
    }

    const page = (e) => {
        e.preventDefault()

        fetch("http://localhost:8080/basvuru/pageable/" + 0)
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))


    }
    const page2 = (e) => {
        e.preventDefault()

        fetch("http://localhost:8080/basvuru/pageable/" + 1)
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))


    }
    const page3 = (e) => {
        e.preventDefault()

        fetch("http://localhost:8080/basvuru/pageable/" + 2)
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))


    }
    const page4 = (e) => {
        e.preventDefault()

        fetch("http://localhost:8080/basvuru/pageable/" + 3)
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))


    }

    // const refresh = () => {window.location.reload(true)}

    const sirala = () => {
        fetch("http://localhost:8080/basvuru/sirala")
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))
            .then((Response) => {
                if(Response.status == 404){   
                  alert("Boş arama yapamazsın")
                }
              }).catch((err)=>{
                console.log(err);
              });
    }

    const sirala2 = () => {
        fetch("http://localhost:8080/basvuru/sirala2")
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))

    }

    const siralaAd = () => {
        fetch("http://localhost:8080/basvuru/siralaAd")
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))

    }

    const siralaStaj = () => {
        fetch("http://localhost:8080/basvuru/siralaStaj")
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))

    }

    const siralaDurum = () => {
        fetch("http://localhost:8080/basvuru/siralaDurum")
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))

    }
    return (

        <div className="container">

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="İsime veya öğrenci numarasına Göre Ara" onChange={(e) => setKeyword(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="submit" onClick={aramayap}>Ara</button>

                </div>
                {/* <button class="btn btn-outline-secondary" type="button" onClick={refresh}>Listeye Geri Dön</button> */}
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
                            <Icon name='angle double up' size='large' onClick={siralaAd} />
                        </td>
                        <td>
                            Soyad
                        </td>
                        <td>
                            Sınıf
                        </td>
                        <td>
                            Staj Türü
                            <Icon name='angle double down' size='large' onClick={siralaStaj} />
                        </td>

                        <td>
                            Şirket Adı
                        </td>
                        <td>
                            Başvuru Durumu
                            <Icon name='angle double down' size='large' onClick={siralaDurum} />

                        </td>
                        <td>

                        </td>

                    </tr>
                </thead>
                <tbody>
                    {tb_data}
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">

                    <li class="page-item"><a class="page-link" onClick={page} >1</a></li>
                    <li class="page-item"><a class="page-link" onClick={page2}>2</a></li>
                    <li class="page-item"><a class="page-link" onClick={page3}>3</a></li>
                    <li class="page-item"><a class="page-link" onClick={page4}>4</a></li>

                </ul>
            </nav>
        </div>


    )
}

export default BasvuruListe;