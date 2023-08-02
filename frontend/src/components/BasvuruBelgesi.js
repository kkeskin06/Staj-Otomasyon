import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
function BasvuruBelgesi(){
    const{ id } = useParams();
    const [belge,setBelge] = useState() 
       
    useEffect(()=>{
      fetch('http://localhost:8080/files/'+ id)
      .then((Response) => {
        if(Response.status == 200){
          console.log(Response)
          setBelge(Response.url)
        }
    })

    })
    return(
        <div>
          <embed src={belge} type="application/pdf" width="100%" height="600px" />. 
         
        </div>
    )
}

export default BasvuruBelgesi;