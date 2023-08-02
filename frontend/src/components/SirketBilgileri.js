import React, { useEffect, useState } from "react";


function SirketBilgileri() {
    const [sirket, setSirket] = useState("");
    useEffect(() => {
        fetch('http://localhost:8080/sirket/get/'+2)
            .then(reponse => reponse.json())
            .then(response => setSirket(response))
    })

    // let data = sirket.map((item) => {
    //     return (
    //         <tr key={item.id} style={{ textAlign: "center" }}>
    //             <td>{item.sirketAdi}</td>
    //             <td>{item.PersonelSayisi}</td>
    //             <td>{item.sirketLokasyon}</td>
    //             <td>{item.email}</td>
    //             <td>{item.vergino}</td>
    //             <td>{item.sirketNumara}</td>
    //             <td>{item.sirketHizmetAlani}</td>
    //         </tr>
    //     )

    // })


    return (
        <div className="container">
            <div className="col">
                <table className="table table-Secondary table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Şirket Adı</th>
                            <th scope="col">Lokasyon</th>
                            <th scope="col">Mail</th>
                            <th scope="col">Vergi No</th>
                            <th scope="col">Telefon No</th>
                            <th scope="col">Hizmet Alanı</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{sirket.sirketAdi}</td>
                            <td>{sirket.sirketLokasyon}</td>
                            <td>{sirket.email}</td>
                            <td>{sirket.vergino}</td>
                            <td>{sirket.sirketNumara}</td>
                            <td>{sirket.sirketHizmetAlani}</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default SirketBilgileri;