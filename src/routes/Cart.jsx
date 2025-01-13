import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName, addAge, addCount } from "../store";
import data from '../data'

function Cart(){
    let state = useSelector((state)=>state)
    let dispatch = useDispatch()
    console.log(state)

    return(
        <Table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>상품명</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>🛒</th>
                </tr>
            </thead>
            <tbody>
                {state.shoes.map(function(_, i){
                    return(
                        <tr key={i}>
                            <td>{state.shoes[i].id}</td>
                            <td>{state.shoes[i].title}</td>
                            <td>{state.shoes[i].price}</td>
                            <td>{state.shoes[i].count}</td>
                            <td onClick={()=>{
                                dispatch(addCount(i));
                            }}>+</td>
                            
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default Cart;