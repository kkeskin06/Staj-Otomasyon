import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { useToken } from "./TokenContext";


function TeslimBelgeDetay() {
    const { id } = useParams();
    const [basvuru, setBasvurular] = useState([]);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const { token, isReady, getHeadersWithToken } = useToken();
    useEffect(() => {
        if (isReady == true) {
            fetch('http://localhost:8080/teslim/get/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                },
            })
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))
        }
        // fetch('http://localhost:8080/teslim/get/' + id)
        //     .then(reponse => reponse.json())
        //     .then(response => setBasvurular(response))
    },[token])

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



    let tb_data4 = basvuru.map((item) => {
        const onayla = (e) => {
            e.preventDefault()
            fetch(`http://localhost:8080/teslim/edit/onay/${item.id}`,getHeadersWithToken())
            setOpen2(false)
        }

        const reddet = (e) => {
            e.preventDefault()
            fetch(`http://localhost:8080/teslim/edit/red/${item.id}`,getHeadersWithToken())
            setOpen(false)
        }

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
                        <Button basic color='green' inverted onClick={onayla}>
                            <Icon name='checkmark' /> evet
                        </Button>
                        <Button color='red' inverted onClick={() => setOpen2(false)}>
                            <Icon name='remove' /> hayır
                        </Button>
                    </Modal.Actions>
                </Modal></td>

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
                        <Button basic color='green' inverted onClick={reddet
                        }>
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
                {/* <td><a href={`http://localhost:8080/files/${item.defterSayfalari}`} class="btn btn-primary">Staj Defteri İndir</a></td> */}
                <td><a href={`http://localhost:8080/files/${item.stajRaporu}`} class="btn btn-primary">Staj Raporu İndir</a></td>
                <td><a href={`http://localhost:8080/files/${item.defterIcKapagi}`} class="btn btn-primary">İç Kapak İndir</a></td>
            </tr>
        )

    })

    let tb_data6 = basvuru.map((item) => {

        return (

            <tr key={item.id} style={{ textAlign: "center" }}>
                <td>{item.sicilFisi.calismaAlani}</td>
                <td>{item.sicilFisi.calisilanGunSayisi}</td>
                <td>{item.sicilFisi.calisilmayanGunSayisi}</td>
            </tr>
        )

    })
    let tb_data7 = basvuru.map((item) => {

        return (

            <tr key={item.id} style={{ textAlign: "center" }}>
                <td>{item.sicilFisi.iseDevamPuani}</td>
                <td>{item.sicilFisi.genelTavirveHareket}</td>
                <td>{item.sicilFisi.iscilereTavirveHareket}</td>
                <td>{item.sicilFisi.calismaveGayret}</td>
                <td>{item.sicilFisi.isiVaktindeYapma}</td>
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
                            <td >
                                İş Günü Sayısı
                            </td>
                            <td data-type="date" data-format-string="Do MMMM YYYY">
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
                            <footer class="blockquote-footer"></footer>

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
                            <footer class="blockquote-footer"></footer>

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
                            <footer class="blockquote-footer"></footer>

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
                            <footer class="blockquote-footer"></footer>

                        </blockquote>
                    </div>
                </div>
                <hr style={{ color: "red" }}></hr>
                <div style={{ alignItems: "center" }}>
                    <h4 style={{ color: "red", textAlign: "center" }}>Sicil Fişi Puanları</h4>

                </div>
                <hr style={{ color: "red" }}></hr>

                <br></br>
                <table className="table table-Secondary table-striped">
                    <thead style={{ alignItems: "center" }}>
                        <tr style={{ textAlign: "center", color: "Black", fontWeight: "bold" }}>
                            <td>
                                Çalışma Alanı
                            </td>
                            <td>
                                Çalışılan Gün Sayısı
                            </td>
                            <td>
                                Çalışılmayan Gün Sayısı
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {tb_data6}
                    </tbody>

                </table>
                <table className="table table-Secondary table-striped">
                    <thead>
                        <tr style={{ textAlign: "center", color: "Black", fontWeight: "bold" }}>

                            <td>
                                İşe Devam Puanı
                            </td>
                            <td>
                                Genel Tavır Ve Hareket Puanı
                            </td>
                            <td>
                                İşcilere Karşı Tavır Ve Hareket Puanı
                            </td>
                            <td>
                                Çalışma Ve Gayret Puanı
                            </td>
                            <td>
                                İşi Vaktinde Yapma Puanı
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {tb_data7}
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
                        {tb_data5}
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

export default TeslimBelgeDetay;