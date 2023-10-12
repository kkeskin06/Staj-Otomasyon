import React, { useState } from "react";
import { useToken } from './TokenContext';

function TeslimBelgeleri() {
  

  const [files, setFiles] = useState()
  const [files2, setfiles2] = useState()

  const [file_id, setFile_id] = useState("")
  const [file_id2, setfile_id2] = useState("")


  const [hafta1, setHafta1] = useState()
  const [hafta2, setHafta2] = useState()
  const [hafta3, setHafta3] = useState()
  const [hafta4, setHafta4] = useState()
  const {token} = useToken();
  const handleFile = (e) => {
    e.preventDefault()
    setFiles(e.target.files[0])
  }
  const handleFile2 = (e) => {
    e.preventDefault()
    setfiles2(e.target.files[0])
  }


  const ClickFile = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', files)
    
    fetch("http://localhost:8080/files/post", {
      method: 'POST',
      enctype: "multipart/form-data",
      body: formData,
      headers:{
        'Authorization' : `Bearer ${token}`,
      }
     
     
    }).then((Response) => {
      if (Response.status == 200) {
        Response.json().then((item) => {
          console.log(item);
          setFile_id(item.id)
        });
        alert("Dosya Yüklemesi Başarılı")
      } else {
        alert("Dosya Yüklerken Hata oluştu.")
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  const ClickFile3 = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('file', files2)
    fetch("http://localhost:8080/files/post", {
      mode: 'cors',
      method: 'POST',
      enctype: "multipart/form-data",
      body: formData,
      headers:{
        'Authorization' : `Bearer ${token}`,
      }
    }).then((Response) => {
      if (Response.status == 200) {
        Response.json().then((item) => {
          console.log(item);
          setfile_id2(item.id)
        });
        alert("Dosya Yüklemesi Başarılı")
      } else {
        alert("Dosya Yüklerken Hata oluştu.")
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  const handleClick = (e) => {
    e.preventDefault()

    const teslimat = {
      "defterIcKapagi": file_id,
      "stajRaporu": file_id2,
      "hafta1": hafta1,
      "hafta2": hafta2,
      "hafta3": hafta3,
      "hafta4": hafta4,
    }

    fetch("http://localhost:8080/teslim/add/" + 527, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization' : `Bearer ${token}`
      },
      body: JSON.stringify(teslimat)
    }).then((Response) => {
      if (Response.status == 200) {
        alert("Belge Teslimi Başarılı")

      } else {
        alert("Belge Teslimi Yaparken Hata oluştu.")
      }
    }).catch((err) => {
      console.log(err);
    });


  }
  return (
    <div class="container">
      <div className="row">
        <div class="col-3">
          <div class="row-2">

            <img src="/interview.png"
              style={{

                marginBottom: 15

              }} />
          </div>



        </div>

        <div class="col-3">

        </div>
        <div class="col-5">
          <div className="row">
            <label>Defter İç Kapağı (pdf veya jpeg)</label>
            <div class="input-group">
              <input type="file" class="form-control" name="file" onChange={handleFile} />
              <button class="btn btn-outline-secondary" type="submit" onClick={ClickFile}>dosyayi yükle</button>
            </div>
          </div>
          <br></br>
          <div className="row">
            <label>Staj Raporu (pdf)</label>
            <div class="input-group">
              <input type="file" class="form-control" name="file" onChange={handleFile2} />
              <button class="btn btn-outline-secondary" type="submit" onClick={ClickFile3}>dosyayi yükle</button>
            </div>
          </div>
          <br></br>

          <div className="row">

            <div class="form-group">
              <label for="hafta1">Staj Defteri 1. hafta</label>
              <textarea class="form-control" id="hafta1" name="hafta1" rows="3" value={hafta1} onChange={(e) => setHafta1(e.target.value)}></textarea>
            </div>
          </div>
          <div className="row">

            <div class="form-group">
              <label for="hafta2">Staj Defteri 2. hafta</label>
              <textarea class="form-control" id="hafta2" name="hafta2" rows="3" value={hafta2} onChange={(e) => setHafta2(e.target.value)}></textarea>
            </div>
          </div>
          <div className="row">

            <div class="form-group">
              <label for="hafta3">Staj Defteri 3. hafta</label>
              <textarea class="form-control" id="hafta3" name="hafta3" rows="3" value={hafta3} onChange={(e) => setHafta3(e.target.value)}></textarea>
            </div>
          </div>
          <div className="row">

            <div class="form-group">
              <label for="hafta4">Staj Defteri 4. hafta</label>
              <textarea class="form-control" id="hafta4" name="hafta4" rows="3" value={hafta4} onChange={(e) => setHafta4(e.target.value)}></textarea>
            </div>
          </div>


          <div className="row">
            <button style={{ marginTop: 10 }} type="submit" class="btn btn-primary" onClick={handleClick} >Belge Teslim İşlemini tamamla</button>

          </div>
        </div>

      </div>

    </div>

  )
}

export default TeslimBelgeleri;