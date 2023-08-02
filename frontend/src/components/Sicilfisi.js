
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Sicilfisi() {
  const { id } = useParams();
  const [calismaAlani, setCalismaAlani] = useState();
  const [calisilanGun, setCalisilanGun] = useState();
  const [calisilmayanGun, setCalisilmayangun] = useState();
  const [devamPuan, setDevamPuan] = useState();
  const [calismaVeGayret, setCalismaVeGayret] = useState();
  const [isiVaktindeVeTamYapma, setIsiVaktindeVeTamYapma] = useState();
  const [tavirHaraketGenel, setTavirHareketGenel] = useState();
  const [tavirHaraketisci, setTavirHaraketisci] = useState();

  const gonder = (e) => {
    e.preventDefault()

    const fis = {

      "calismaAlani": calismaAlani,
      "calisilanGunSayisi": calisilanGun,
      "calisilmayanGunSayisi": calisilmayanGun,
      "iseDevamPuani": devamPuan,
      "calismaveGayret": calismaVeGayret,
      "isiVaktindeYapma": isiVaktindeVeTamYapma,
      "genelTavirveHareket": tavirHaraketGenel,
      "iscilereTavirveHareket": tavirHaraketisci,

    }

    fetch("http://localhost:8080/teslim/add/sicilfisi/" + id, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(fis)
    }).then((Response) => {
      if (Response.status == 200) {
        alert("Başarılı")
      } else {
        alert("Hata oluştu.")
      }
    }).catch((err) => {
      console.log(err);
    });



  }

  return (
    <div className="container">

      <form>
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="ad" class="form-label">Çalışma Alanı</label>
              <input type="text" class="form-control" id="ad" value={calismaAlani} onChange={(e) => setCalismaAlani(e.target.value)} />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="soyad" class="form-label">Çalışılan Gün Sayısı</label>
              <input type="number" class="form-control" id="soyad" value={calisilanGun} onChange={(e) => setCalisilanGun(e.target.value)} />
            </div>
          </div>
          <div className="col">
            <div class="mb-3">
              <label for="mail" class="form-label">Çalışılmayan Gün Sayısı</label>
              <input type="number" class="form-control" id="mail" value={calisilmayanGun} onChange={(e) => setCalisilmayangun(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <div class="mb-3">
              <label for="devam" class="form-label">İşe Devam Puanı</label>
              <select class="form-select" id="devam" value={devamPuan} onChange={(e) => setDevamPuan(e.target.value)}>
                <option selected value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div class="mb-3">
              <label for="gayret" class="form-label">Çalışma Ve Gayret Puanı</label>
              <select class="form-select" id="gayret" value={calismaVeGayret} onChange={(e) => setCalismaVeGayret(e.target.value)}>
                <option selected value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div class="mb-3">
              <label for="tam" class="form-label">İşi Vaktinde Ve Tam Yapma Puanı</label>
              <select class="form-select" id="tam" value={isiVaktindeVeTamYapma} onChange={(e) => setIsiVaktindeVeTamYapma(e.target.value)}>
                <option selected value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div class="mb-3">
              <label for="tavir" class="form-label">Genel Tavır Ve Hareket Puanı</label>
              <select class="form-select" id="tavir" value={tavirHaraketGenel} onChange={(e) => setTavirHareketGenel(e.target.value)}>
                <option selected value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div class="mb-3">
              <label for="isci" class="form-label">İşcilere Karşı Tavır Ve Hareket Puanı</label>
              <select class="form-select" id="isci" value={tavirHaraketisci} onChange={(e) => setTavirHaraketisci(e.target.value)}>
                <option selected value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">

          </div>
          <div className="col">
            <button style={{ marginLeft: 140, marginTop: 3 }} type="submit" class="btn btn-primary" onClick={gonder}>Ficil Fişi Gönderimi Tamamla</button>
          </div>
          <div className="col">

          </div>
        </div>

      </form>
      
    </div>
  )
}

export default Sicilfisi;