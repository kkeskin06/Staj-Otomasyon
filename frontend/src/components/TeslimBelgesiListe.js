import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { useToken } from "./TokenContext";
import { Link } from "react-router-dom";


function TeslimBelgesiListe() {
    const { id } = useParams();
    const [basvuru, setBasvurular] = useState([]);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const { token, isReady, getHeadersWithToken } = useToken();
    useEffect(() => {
        if (isReady == true) {
            fetch('http://localhost:8080/teslim/getTeslimbelgeleri/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                },
            })
                .then(reponse => reponse.json())
                .then(response => setBasvurular(response))
        }
    })

    let tb_data = basvuru.map((item) => {
        return (
            <tr key={item.id} style={{ textAlign: "center" }}>
                <td>{item.ogrenci.ad}</td>
                <td>{item.ogrenci.soyad}</td>
                <td>{item.ogrenci.ogrno}</td>
                <td>{item.ogrenci.sinif}</td>
                <td>{item.ogrenci.mail}</td>
                <td>{item.ogrenci.tcno}</td>
                <td>{item.ogrenci.telno}</td>
            </tr>
        )

    })

    let tb_data2 = basvuru.map((item) => {
        const stajBitisTarihi = new Date(item.staj.stajBitistarihi);
        const formattedDate = stajBitisTarihi.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });

        const stajBaslangicTarihi = new Date(item.staj.stajBaslangicTarihi);
        const formattedDate2 = stajBaslangicTarihi.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });

        return (
            <tr key={item.id} style={{ textAlign: "center" }}>
                <td>{item.staj.stajTuru}</td>
                <td>{item.staj.stajIcerigi}</td>
                <td>{item.staj.stajGunSayisi}</td>
                <td>{formattedDate2}</td>
                <td>{formattedDate}</td>
            </tr>
        )

    })

    let tb_data22 = basvuru.map((item) => {
        const stajBaslangicTarihi = new Date(item.staj.stajBaslangicTarihi);
        const formattedDate2 = stajBaslangicTarihi.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });

        return (

            formattedDate2
        )

    })

    let tb_data3 = basvuru.map((item) => {
        return (
            <tr key={item.id} style={{ textAlign: "center" }}>

                <td>
                    <Link to={`/sicilfisi/${item.id}`} class="btn btn-secondary">Sicil Fisi Doldur</Link>
                    {/* <a href={`/sicilfisi/${item.id}`} class="btn btn-secondary">Sicil Fisi Doldur</a> */}
                </td>

            </tr>
        )

    })

    let tb_data4 = basvuru.map((item) => {
        return (
            <tr key={item.id} style={{ textAlign: "center" }}>
                <td><Modal
                    basic
                    onClose={() => setOpen2(false)}
                    onOpen={() => setOpen2(true)}
                    open={open2}
                    style={{ alignItems: "center", margin: 200 }}
                    size='large'
                    trigger={<Button inverted color='green' >Onayla</Button>}
                >
                    <Header icon>
                        <Icon name='save' />
                        Staj Teslimat Belgeleri
                    </Header>
                    <Modal.Content>
                        <p style={{ textAlign: "center" }}>
                            Öğrencinin göndermiş olduğu staj defterini onaylamak üzeresiniz. İşlemi Onaylıyor Musunuz ?
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='green' inverted onClick={() => fetch(`http://localhost:8080/teslim/edit/onay/${item.id}`,getHeadersWithToken())}>
                            <Icon name='checkmark' /> evet
                        </Button>
                        <Button color='red' inverted onClick={() => setOpen2(false)}>
                            <Icon name='remove' /> hayır
                        </Button>
                    </Modal.Actions>
                </Modal></td>

                {/* <td><button type="submit" id="onay" class="btn btn-success" 
                onClick={(e) => fetch(`http://localhost:8080/teslim/edit/onay/${item.id}`)}>Onayla</button></td> */}


                {/* <td><button type="submit" class="btn btn-danger" 
                onClick={(e) => fetch(`http://localhost:8080/teslim/edit/red/${item.id}`)}>Reddet</button></td> */}
                <td>

                </td>
                <td><Modal
                    basic
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    style={{ alignItems: "center", margin: 200 }}
                    size='large'
                    trigger={<Button inverted color='red'>Reddet</Button>}
                >
                    <Header icon>
                        <Icon name='save' />
                        Staj Teslimat Belgeleri
                    </Header>
                    <Modal.Content>
                        <p style={{ textAlign: "center" }}>
                            Öğrencinin göndermiş olduğu staj defterini Reddetmek üzeresiniz. İşlemi Onaylıyor Musunuz ?
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='green' inverted onClick={() => fetch(`http://localhost:8080/teslim/edit/red/${item.id}`,getHeadersWithToken())}>
                            <Icon name='checkmark' /> evet
                        </Button>
                        <Button color='red' inverted onClick={() => setOpen(false)}>
                            <Icon name='remove' /> hayır
                        </Button>
                    </Modal.Actions>
                </Modal></td>

            </tr>
        )

    })
    let tb_data5 = basvuru.map((item) => {
        return (
            <tr key={item.id} style={{ textAlign: "center" }}>
                <td>
                    {/* <Link to={`http://localhost:8080/files/${item.stajRaporu}`} class="btn btn-primary">Staj Raporu İndir</Link> */}
                    <a href={`http://localhost:8080/files/${item.stajRaporu}`} class="btn btn-primary">Staj Raporu İndir</a>
                </td>
                <td><a href={`http://localhost:8080/files/${item.defterIcKapagi}`} class="btn btn-primary">İc Kapak İndir</a></td>
            </tr>
        )

    })

    let datahafta1 = basvuru.map((item) => {
        return (
            <p>{item.hafta1}</p>
        )

    })
    let datahafta2 = basvuru.map((item) => {
        return (
            <p>{item.hafta2}</p>
        )

    })
    let datahafta3 = basvuru.map((item) => {
        return (
            <p>{item.hafta3}</p>
        )

    })
    let datahafta4 = basvuru.map((item) => {
        return (
            <p>{item.hafta4}</p>
        )

    })

    return (
        <div className="container">
            <div className="col">
                <table className="table table-Secondary table-striped">
                    <thead>
                        <tr style={{ textAlign: "center", color: "Black", fontWeight: "bold" }}>
                            <td>
                                Ad
                            </td>
                            <td>
                                Soyad
                            </td>
                            <td>
                                Öğrenci No
                            </td>
                            <td>
                                Sınıf
                            </td>
                            <td>
                                Mail
                            </td>
                            <td>
                                TC No
                            </td>
                            <td>
                                Telefon No
                            </td>

                        </tr>
                    </thead>
                    <tbody>
                        {tb_data}
                    </tbody>
                </table>
                <table className="table table-Secondary table-striped">
                    <thead>
                        <tr style={{ textAlign: "center", color: "Black", fontWeight: "bold" }}>
                            <td>
                                Staj Türü
                            </td>
                            <td>
                                Staj İçeriği
                            </td>
                            <td>
                                İş Günü Sayısı
                            </td>
                            <td>
                                Başlangıç Tarihi
                            </td>
                            <td>
                                Bitiş Tarihi
                            </td>

                        </tr>
                    </thead>
                    <tbody>
                        {tb_data2}
                    </tbody>
                </table>
                <div class="card">
                    <div class="card-header">
                        Staj Defteri 1. Hafta
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>{datahafta1}</p>
                            <footer class="blockquote-footer">{tb_data22}-{tb_data22}</footer>

                        </blockquote>
                    </div>
                </div>
                <br></br>
                <div class="card">
                    <div class="card-header">
                        Staj Defteri 2. Hafta
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>{datahafta2}</p>
                            <footer class="blockquote-footer">{tb_data22}-{tb_data22}</footer>

                        </blockquote>
                    </div>
                </div>
                <br></br>
                <div class="card">
                    <div class="card-header">
                        Staj Defteri 3. Hafta
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>{datahafta3}</p>
                            <footer class="blockquote-footer">{tb_data22}-{tb_data22}</footer>

                        </blockquote>
                    </div>
                </div>
                <br></br>
                <div class="card">
                    <div class="card-header">
                        Staj Defteri 4. Hafta
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>{datahafta4}</p>
                            <footer class="blockquote-footer">{tb_data22}-{tb_data22}</footer>

                        </blockquote>
                    </div>
                </div>
                <table className="table table-Secondary table-striped">
                    <thead>
                        <tr style={{ textAlign: "center", color: "Black", fontWeight: "bold" }}>


                            <td>

                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {tb_data5}
                    </tbody>
                </table>
                <table className="table table-Secondary table-striped">
                    <thead>
                        <tr style={{ textAlign: "center", color: "Black", fontWeight: "bold" }}>


                            <td>

                            </td>
                        </tr>

                    </thead>
                    <tbody>
                        {tb_data3}
                    </tbody>
                </table>
                <table className="table table-Secondary">
                    <thead>
                        <tr style={{ textAlign: "center", color: "Black", fontWeight: "bold" }}>
                            <td>

                            </td>

                            <td>

                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {tb_data4}
                    </tbody>
                </table>

            </div >

        </div>
    )
}

export default TeslimBelgesiListe;