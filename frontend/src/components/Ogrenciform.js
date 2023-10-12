import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { format } from 'date-fns'
import { useNavigate } from "react-router";
import { useToken } from "./TokenContext";

function Ogrenciform() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [basvurular, setBasvurular] = useState([]);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const {token,getHeadersWithToken} = useToken();

    useEffect(() => {
        fetch("http://localhost:8080/basvuru/detay/" + id ,getHeadersWithToken() )
            .then(reponse => reponse.json())
            .then(response => setBasvurular(response))
    },[token])

    let tb_data = basvurular.map((item) => {
        return (
            <tr key={item.id} style={{ textAlign: "center" }}>
                <td>  <Icon.Group size='medium'>
                    <Icon size='medium' name='circle outline' />
                    <Icon name='user' />
                </Icon.Group></td>
                <td>{item.ogrenci.ad}</td>
                <td>{item.ogrenci.soyad}</td>
                <td>{item.ogrenci.ogrno}</td>
                <td>{item.ogrenci.mail}</td>
                <td>{item.ogrenci.sinif}</td>
                <td>{item.ogrenci.tcno}</td>
                <td>{item.ogrenci.telno}</td>
            </tr>
        )
    })

    let tb_data2 = basvurular.map((item) => {

        return (
            <tr key={item.id} style={{ textAlign: "center" }}>
                {console.log(item.staj)}
                <td>{item.staj.stajTuru}</td>
                <td>{item.staj.stajIcerigi}</td>
                <td>{item.staj.stajDevresi}</td>
                <td>{format(item.staj.stajBaslangicTarihi, 'dd/MM/Y')}</td>
                <td>{format(item.staj.stajBitistarihi, 'dd/MM/Y')}</td>
                <td>{item.staj.stajGunSayisi}</td>
            </tr>

        )
    })


    let tb_data3 = basvurular.map((item) => {
        return (
            <tr key={item.id} style={{ textAlign: "center" }}>

                <td>{item.sirket.sirketAdi}</td>
                <td>{item.sirket.personelSayisi}</td>
                <td>{item.sirket.sirketLokasyon}</td>
                <td>{item.sirket.email}</td>
                <td>{item.sirket.vergino}</td>
                <td>{item.sirket.sirketNumara}</td>
                <td>{item.sirket.sirketHizmetAlani}</td>

            </tr>
        )





    })

    let tb_data4 = basvurular.map((item) => {
        const onayla = (e) => {
            e.preventDefault()
            fetch(`http://localhost:8080/basvuru/edit/${item.id}`)
            setOpen2(false)
        }

        const reddet = (e) => {
            e.preventDefault()
            fetch(`http://localhost:8080/basvuru/edit2/${item.id}`)
            setOpen(false)
        }
        return (
            <tr key={item.id} style={{ textAlign: "center" }}>
                <td><a href={`http://localhost:8080/files/${item.file_id}`} class="btn btn-primary">belgeyi indir</a></td>
                
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
                            Öğrencinin staj başvurusunu onaylamak üzeresiniz. İşlemi Onaylıyor Musunuz ?
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
                            Öğrencinin  staj başvurusunu Reddetmek üzeresiniz. İşlemi Onaylıyor Musunuz ?
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='green' inverted onClick={reddet}>
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


    const refresh = () => {
        let path = '/basvuruliste'
        navigate(path)
    }
    return (
        <div className="container">
            <button class="btn btn-outline-secondary" type="button" onClick={refresh}>Listeye Geri Dön</button>
            <table className="table table-Secondary table-striped">
                <thead >
                    <tr style={{ textAlign: "center", color: "Black", fontWeight: "bold" }}>
                        <td>

                        </td>
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
                            Mail

                        </td>
                        <td>
                            Sınıf
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

                    {/* <tr >
                        <td>{basvuru.ogrenci.ad}</td>
                        <td>{basvuru.ogrenci.soyad}</td>
                        <td>{basvuru.ogrenci.ogrno}</td>
                        <td>{basvuru.ogrenci.sinif}</td>
                        <td>{basvuru.staj.stajTuru}</td>
                        <td>{basvuru.staj.stajIcerigi}</td>
                        <td>{basvuru.staj.stajGunSayisi}</td>
                        <td>{basvuru.sirket.sirketAdi}</td>
                        <td>{basvuru.sirket.sirketLokasyon}</td>
                        <td>{basvuru.sirket.email}</td>
                        <td>{basvuru.sirket.vergino}</td>
                        <td><a href={`http://localhost:8080/files/${basvuru.file_id}`} class="btn btn-primary">belgeyi gör</a></td>
                        <td><button type="submit" class="btn btn-success" onClick={(e) => fetch(`http://localhost:8080/basvuru/edit/${basvuru.id}`)}>Onayla</button></td>
                        <td><button type="submit" class="btn btn-danger" onClick={(e) => fetch(`http://localhost:8080/basvuru/edit2/${basvuru.id}`)}>Reddet</button></td>
                    </tr> */}
                    {tb_data}
                </tbody>
            </table>
            <table className="table table-Secondary table-striped">
                <thead >
                    <tr style={{ textAlign: "center", color: "Black", fontWeight: "bold" }}>
                        <td>
                            Staj Türü
                        </td>
                        <td>
                            Staj içeriği
                        </td>
                        <td>
                            Staj Devresi

                        </td>
                        <td>
                            Başlangıç Tarihi
                        </td>
                        <td>
                            Bitiş Tarihi
                        </td>
                        <td>
                            İş Günü sayısı
                        </td>

                    </tr>
                </thead>
                <tbody>


                    {tb_data2}
                </tbody>
            </table>

            <table className="table table-Secondary table-striped">
                <thead >
                    <tr style={{ textAlign: "center", color: "Black", fontWeight: "bold" }}>

                        <td>
                            Şirket Adı
                        </td>
                        <td>
                            Çalışan Sayısı
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
                            Telefon No
                        </td>
                        <td>
                            Alan
                        </td>
                        
                    </tr>
                </thead>
                <tbody>


                    {tb_data3}
                </tbody>
            </table>
            <div>
                <table className="table table-Secondary table-striped">
                    <thead >
                        <tr style={{ textAlign: "center", color: "Black", fontWeight: "bold" }}>

                          
                            <td>

                            </td>
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
            </div>
            {/* <Table basic='very' celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Employee</Table.HeaderCell>
                        <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='/images/avatar/small/lena.png' rounded size='mini' />
                                <Header.Content>
                                    Lena
                                    <Header.Subheader>Human Resources</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>22</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='/images/avatar/small/matthew.png' rounded size='mini' />
                                <Header.Content>
                                    Matthew
                                    <Header.Subheader>Fabric Design</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>15</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='/images/avatar/small/lindsay.png' rounded size='mini' />
                                <Header.Content>
                                    Lindsay
                                    <Header.Subheader>Entertainment</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>12</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='/images/avatar/small/mark.png' rounded size='mini' />
                                <Header.Content>
                                    Mark
                                    <Header.Subheader>Executive</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>11</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table> */}
        </div>
    )
}


export default Ogrenciform;