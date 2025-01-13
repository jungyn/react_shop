import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Detail(props){

    let {id} = useParams();
    let a = props.shoes.find((x) => x.id == id);
    let [alert, setAlert] = useState(true);
    let [tab, setTab] = useState(0);

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
            <Nav fill variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{setTab(0)}}>Tab1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{setTab(1)}}>Tab2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={()=>{setTab(2)}}>Tab3</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />
        </div> 
    )
}

function TabContent(props){
    let [fade, setFade] = useState('');

    useEffect(()=>{
        setTimeout(()=>{setFade('end')}, 100)
        return ()=>{
            setFade('')
        }
    }, [props.tab])

    return <div className={"start " + fade}> 
        { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab] }
        </div>
}

export default Detail;