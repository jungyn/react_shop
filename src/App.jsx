import { useState } from 'react'
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import './App.css'
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './Detail.jsx'

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ 
              const id = Math.floor(Math.random() * 3); // 0, 1, 2 중 하나
              navigate(`/detail/${id}`); }}>Detail
            </Nav.Link>
            <Nav.Link href="./about" onClick={()=>{ navigate('/about') }}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
            <>
              <div className='main-bg'></div>
                <Row>
                  {shoes.map(function(s, i){
                    return(
                      <>
                        <Shu shoes={shoes} id={shoes[i].id} i={i} navigate={navigate}></Shu>
                      </>
                    )
                  })}                        
                </Row>
                <button onClick={()=>{
                    let copy = [...shoes]
                    copy.sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
                    setShoes(copy)
                }}>이름순 정렬</button>
            </>
            }>
        </Route>
        <Route path='/detail/:id' element={ <Detail shoes={shoes}></Detail>} />
        <Route path='*' element={ <h1 style={{color:'red'}}> 404 없는 페이지입니다 </h1> }></Route>
        <Route path='/about' element={ <About></About> }>
          <Route path='one' element={ <h7>첫 주문시 20% 할인</h7>} ></Route>
          <Route path='two' element={ <h7>생일 쿠폰 발행</h7>} ></Route>
        </Route>
      </Routes>

      {/* <Link to='/'>Home</Link> <br />
      <Link to='/detail'>Detail</Link> <br />
      <Link to='/about'>About</Link> */}

    </div>
  )
}

function Shu(props){
  return(
    <Col sm={4} onClick={()=>{props.navigate('/detail/'+props.id)}}>
      <img src={import.meta.env.BASE_URL + 'shoes' + props.id + '.jpg'} width="500px" height="500px"/>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
      <p>{props.shoes[props.i].price}원</p>
    </Col>
  )
}

function About(){
  return(
    <div>
      <h4> 오늘의 이벤트 </h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App