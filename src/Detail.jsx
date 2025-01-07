import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props){

    let {id} = useParams();
    let a = props.shoes.find((x) => x.id == id)
    let [alert, setAlert] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{ setAlert(false) }, 3000);
    })

    return(
        <div className="container">
            { alert == true ? 
                <div className="alert alert-warning"> 3초이내 구입시 할인 </div> 
            : null }
            
            <div className="row">
                <div className="col-md-6">
                <img src={ import.meta.env.BASE_URL + 'shoes' + id + '.jpg'} width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{a.title}</h4>
                <p>{a.content}</p>
                <p>{a.price}원</p>
                <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;