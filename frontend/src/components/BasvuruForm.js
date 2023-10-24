import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useToken } from "./TokenContext";
function BasvuruForm(){
    const navigate = useNavigate();

    const [ad,setAd] = useState('')
    const [soyad,setSoyad] = useState('')
    const [sinif,setSinif] = useState()
    const [tcno,setTcno] = useState()
    const [ogrno,setOgrno] = useState()
    const [telno,setTelno] = useState()
    const [mail,setMail] = useState('')
    const [StajTuru,setStajTuru] = useState('')
    const [StajDevresi,setStajDevresi] = useState()
    const [StajIcerigi,setStajIcerigi] = useState('')
    const [StajGunSayisi,setStajGunSayisi] = useState()
    const [StajBaslangicTarihi,setStajBaslangicTarihi] = useState()
    const [StajBitistarihi,setStajBitistarihi] = useState()
    const [SirketAdi,setSirketAdi] = useState('')
    const [PersonelSayisi,setPersonelSayisi] = useState()
    const [SirketVergiNo,setSirketVergiNo] = useState('')
    const [SirketLokasyon,setSirketLokasyon] = useState('')
    const [SirketNumara,setSirketNumara] = useState()
    const [SirketHizmetAlani,setSirketHizmetAlani] = useState('')
    const [files,setFiles] = useState()
    const [file_id,setFile_id] = useState("")
    const [email,setEmail] = useState("")
    const [vergino,setVergino] = useState("")
    const {token,isReady,getHeadersWithToken} = useToken();
    //const [ogrenci,setOgrenci] = useState(null)
    const handleFile =(e) =>{
      e.preventDefault()

      setFiles(e.target.files[0])

    }
    /*useEffect(()=>{
      fetch('http://localhost:8080/ogrenci/get/'+ 414)
      .then(reponse => reponse.json())
      .then(response => setOgrenci(response))     
    })*/
 
    const ClickFile =(e) =>{
      e.preventDefault()
      
      const formData = new FormData()
      formData.append('file',files)
      fetch("http://localhost:8080/files/post",{
        method:'POST',
        enctype:"multipart/form-data",
        headers:{'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        'Accept': 'application/json'
        },      
        body:formData
      }).then((Response) => {
        if(Response.status == 200){
          Response.json().then((item) => {
            console.log(item);
            setFile_id(item.id)
        });
          alert("Dosya Yüklemesi Başarılı")
        }else{
          alert("Dosya Yüklerken Hata oluştu.")
        }
      }).catch((err)=>{
        console.log(err);
      });
      

    }

    const handleClick=(e)=>{
      e.preventDefault()
     
      const basvuru = {
        "file_id":file_id,
        "ogrenci": {
            
            "ad": ad,
            "soyad": soyad,
            "mail": mail,
            "sinif": sinif,
            "tcno": tcno,
            "ogrno": ogrno,
            "telno": telno,
        },
        "staj": {
            "stajDevresi": StajDevresi,
            "stajIcerigi": StajIcerigi,
            "stajBitistarihi": StajBitistarihi,
            "stajGunSayisi": StajGunSayisi,
            "stajTuru": StajTuru,
            "stajBaslangicTarihi": StajBaslangicTarihi,
        },
        "sirket": {
            "sirketAdi": SirketAdi,
            "sirketLokasyon": SirketLokasyon,
            "sirketNumara": SirketNumara,
            "personelSayisi": PersonelSayisi,
            "sirketVergiNo": SirketVergiNo,
            "email":email,
            "vergino":vergino,           
            "sirketHizmetAlani": SirketHizmetAlani,
        }
      }
      
      fetch("http://localhost:8080/basvuru/add",{
        method:'POST',
        headers:{'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        'Accept': 'application/json'
        },
        body:JSON.stringify(basvuru)  
             
      }).then((Response) => {
        if(Response.status == 200){
          alert("Staj Başvurusu Başarılı")
          let path = `/userhome`; 
          navigate(path);
          
        }else{
          alert("Staj Başvurusu Yaparken Hata oluştu.")
        }
      }).catch((err)=>{
        console.log(err);
      });
      
      

    }
   
    
    return(
        <div className="container-sm">
        <form>
          <div class="row">
            <div class="col">
            <div class="mb-3">
                <label for="ad" class="form-label">Ad</label>
                <input type="text" class="form-control" id="ad"  value={ad} onChange={(e)=>setAd(e.target.value)}/>
              </div>
            </div>
            <div class="col">
            <div class="mb-3">
              <label for="soyad" class="form-label">Soyad</label>
              <input type="text" class="form-control" id="soyad"  value={soyad} onChange={(e)=>setSoyad(e.target.value)} />
            </div>
            </div>
            <div className="col">
            <div class="mb-3">
          <label for="mail" class="form-label">Mail Adresi</label>
          <input type="email" class="form-control" id="mail" value={mail} onChange={(e)=>setMail(e.target.value)} /> 
        </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <div class="mb-3">
          <label for="tcno" class="form-label">TC Kimlik No</label>
          <input type="text" class="form-control" id="tcno" value={tcno} onChange={(e)=>setTcno(e.target.value)}/>
        </div>
            </div>
            <div className="col">
            <div class="mb-3">
          <label for="ogrno" class="form-label">Ogrenci No</label>
          <input type="text" class="form-control" id="ogrno" value={ogrno} onChange={(e)=>setOgrno(e.target.value)}/>
        </div>
            </div>
            <div className="col">
            <div class="mb-3">
          <label for="telno" class="form-label">Telefon No</label>
          <input type="text" class="form-control" id="telno" value={telno} onChange={(e)=>setTelno(e.target.value)} />
        </div>
            </div>
            <div className="col">
          <div class="mb-3">
          <label for="sinif" class="form-label">Sınıf</label>         
          <select class="form-select" id="sinif"  value={sinif} onChange={(e)=>setSinif(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          </select>
        </div>
          </div>
            <hr style={{color:"red"}}></hr>
          </div>
          
        <div className="row">
         
          <div className="col">
          <div class="mb-3">
          <label for="StajTuru" class="form-label">Staj Türü</label>
          <select class="form-select" id="StajTuru"  value={StajTuru} onChange={(e)=>setStajTuru(e.target.value)}>
          <option value="Zorunlu">Zorunlu Staj</option>
          <option value="Gonullu">Gönüllü Staj</option>
          </select>
        </div>
          </div>
          <div className="col">
          <div class="mb-3">
          <label for="StajDevresi" class="form-label">Staj Devresi</label>          
          <select class="form-select" id="StajDevresi"  value={StajDevresi} onChange={(e)=>setStajDevresi(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          </select>
        </div>
          </div>
          <div className="col">
          <div class="mb-3">
          <label for="StajIcerigi" class="form-label">Staj İçeriği</label>
          <select class="form-select" id="StajIcerigi" value={StajIcerigi} onChange={(e)=>setStajIcerigi(e.target.value)}>
          <option value="Yazilim">Yazılım Stajı</option>
          <option value="Donanim">Donanım Stajı</option>
          <option value="Network">Network Stajı</option>
          <option value="Proje">Proje Stajı</option>
          </select>
        </div>
          </div>
          
        </div>
       
        <div className="row">
          <div className="col">
          <div class="mb-3">
          <label for="StajGunSayisi" class="form-label">Staj Yapılacak iş günü Sayısı</label>
          <input type="text" class="form-control" id="StajGunSayisi" value={StajGunSayisi} onChange={(e)=>setStajGunSayisi(e.target.value)}/>
        </div>
          </div>
          <div className="col">
          <div class="mb-3">
          <label for="StajBaslangicTarihi" class="form-label">Stajın Başlama Tarihi</label>
          <input type="date" class="form-control" id="StajBaslangicTarihi" value={StajBaslangicTarihi} onChange={(e)=>setStajBaslangicTarihi(e.target.value)}/>
        </div>
          </div>
          <div className="col">
          <div class="mb-3">
          <label for="StajBitistarihi" class="form-label">Stajın Bitiş Tarihi</label>
          <input type="date" class="form-control" id="StajBitistarihi" value={StajBitistarihi} onChange={(e)=>setStajBitistarihi(e.target.value)}/>
        </div>
          </div>
          <hr style={{color:"red"}}></hr>
        </div>

        <div className="row">
          <div className="col">
          <div class="mb-3">
          <label for="SirketAdi" class="form-label">Şirket Adı</label>
          <input type="text" class="form-control" id="SirketAdi" value={SirketAdi} onChange={(e)=>setSirketAdi(e.target.value)}/>
          </div>
          </div>
          <div className="col">
          <div class="mb-3">
          <label for="SirketLokasyon" class="form-label">Şirket Lokasyon</label>
          <input type="text" class="form-control" id="SirketLokasyon" value={SirketLokasyon} onChange={(e)=>setSirketLokasyon(e.target.value)}/>
          </div>
          </div>
          <div className="col">
          <div class="mb-3">
          <label for="PersonelSayisi" class="form-label">Personel Sayısı</label>
          <input type="text" class="form-control" id="PersonelSayisi" value={PersonelSayisi} onChange={(e)=>setPersonelSayisi(e.target.value)}/>
          </div>
          </div>
        </div>          
        
        <div className="row">
          <div className="col">
          <div class="mb-3">
          <label for="SirketNumara" class="form-label">Şirket Numarası</label>
          <input type="text" class="form-control" id="SirketNumara" value={SirketNumara} onChange={(e)=>setSirketNumara(e.target.value)}/>
          </div>
          </div>
          <div className="col">
          <div class="mb-3">
          <label for="SirketHizmetAlani" class="form-label">Sirket Hizmet Alanı</label>
          <input type="text" class="form-control" id="SirketHizmetAlani" value={SirketHizmetAlani} onChange={(e)=>setSirketHizmetAlani(e.target.value)}/>
          </div>
          </div>
          <div className="col">
          <div class="mb-3">
          <label for="Email" class="form-label">Şirket Email</label>
          <input type="text" class="form-control" id="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          </div>
          <div className="col">
          <div class="mb-3">
          <label for="vergino" class="form-label">Şirket Vergi No</label>
          <input type="text" class="form-control" id="Email" value={vergino} onChange={(e)=>setVergino(e.target.value)}/>
          </div>
          </div>
          
        </div> 
        <div className="row">
          <div className="col">
          
          </div>
          <div className="col-5">
          <div class="input-group">
          <label>Staj Belgesini Ogrencino_staj.pdf ismiyle gönderiniz ! </label>
          <input type="file" class="form-control" name="file" onChange={handleFile} />
          <button class="btn btn-outline-secondary" type="submit" onClick={ClickFile}>Staj Belgesi Yükle</button>
          </div>
          </div>
          <div className="col">
         
          </div>
        </div>
        <div className="row">
          <div className="col">
          
          </div>
          <div className="col">
          <button style={{marginLeft:140, marginTop:3}} type="submit" class="btn btn-primary" onClick={handleClick} >Basvuruyu gonder</button>
          </div>
          <div className="col">
         
          </div>
        </div>
        
      </form>
      
      </div>
    )
}

export default BasvuruForm;