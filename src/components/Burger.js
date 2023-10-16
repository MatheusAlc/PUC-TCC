import React, {useState} from "react";
import {Modal} from 'react-bootstrap'
export default function Burger ({burger}){
    const [quantidade, setquantidade] = useState(1)
    const [tamanho, settamanho] = useState("lanche")
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <div style={{margin:'70px'}} className="shadow p-3 mb-5 bg-white rounded">
            
            <div onClick={handleShow}>
                <h1>{burger.name}</h1>
                <img src={burger.image} className="img-fluid" style={{height:'150px', width:'200px'}}/>
            </div>
            

            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>tamanho</p>
                    <select className='form-control' value={tamanho} onChange={(e)=>{settamanho(e.target.value)}}>
                    {burger.tamanho.map(tamanho=>{
                        return <option value={tamanho}>{tamanho}</option>
                    })}
                    </select>
                </div>

                <div className="w-100 m-1">
                    <p>quantidade</p>
                    <select className='form-control'  value={quantidade} onChange={(e)=>{setquantidade(e.target.value)}}>
                        {[...Array(10).keys()].map((x,i)=>{
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
                </div>
            </div>

            <div className="flex-container">
                
                <div className="m-1 w-100">
                    <h1 className="mt-1">Preço: {burger.prices[0][tamanho]*quantidade} R$</h1>
                </div>
                
                <div className="m-1 w-100">
                    <button className="btn">Add a sacola</button>
                </div>
            </div> 

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{burger.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={burger.image} className="img-fluid" style={{height:'300px'}}/>
                    <p>{burger.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>FECHAR</button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}