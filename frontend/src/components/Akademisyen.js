import React from "react";
import { useToken } from './TokenContext';
import { Link } from "react-router-dom";
function Akademisyen() {
    const { token } = useToken();
    return (

        <div class="container">
            <div className="row">
                <div class="col-3">
                    <div class="row">
                        <div className="col-4"></div>
                        <img src="/user.png"
                            style={{
                                height: 80,
                                width: 100,
                                marginBottom: 15

                            }} />
                    </div>

                    <div class="row">
                        <ul class="list-group" >
                            <li class="list-group-item list-group-item-primary">alper</li>
                            <br></br>
                            <li class="list-group-item list-group-item-primary">Kılıç</li>
                            <br></br>
                            <li class="list-group-item list-group-item-primary">Bilgisayar Mühendisliği</li>
                            <br></br>
                            <li class="list-group-item list-group-item-primary">akilic@ktun.edu.tr</li>
                        </ul>
                    </div>

                </div>

                <div class="col-2">

                </div>
                <div class="col">
                    <div className="row">
                        <div class="card text-center" style={{ marginTop: 3 }}>
                            <div class="card-body">
                                <h5 class="card-title">Staj Başvuruları</h5>
                                <p class="card-text">Staj Başvurularını Görüntüle ve Belgeleri Kontrol Et</p>
                                <Link to={"/basvuruliste"} class="btn btn-primary">Başvurulara Git</Link>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Staj Sonu Belgeleri</h5>
                                <p class="card-text">Staj Defterlerini ve Staj Raporlarını Görüntüle ve Belgeleri Kontrol Et</p>
                                <Link to={"/teslimbelgeleriakademisyen"} class="btn btn-primary">Staj Sonu Belgelerine Git</Link>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Öğrenci Listesi</h5>
                                <p class="card-text">Bölüm Öğrencilerini Görüntüle</p>
                                <Link to={"/ogrencilistesi"} class="btn btn-primary">Öğrenci Listesine Git</Link>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">Şirket Listesi</h5>
                                <p class="card-text">Staj Yapılacak  Şirketleri Görüntüle</p>
                                <Link to={"/sirketlistesi"} class="btn btn-primary">Şirket Listesine Git</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Akademisyen;