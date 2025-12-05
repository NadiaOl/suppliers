// =============================================================================
// Файл: Conditions\Conditions.jsx
// Описание: Страница с рендингом поставщиков, продуктов и условий.
// =============================================================================
import React, { useState } from 'react';
import { Button, Card, Container, Td, Th, Th1, Th2, Div } from './Conditions.styled';
import contracts from "../data.json";
import Modal from '../Modal/Modal';
import { FormChanging } from '../FormChanging/FormChanging';

export const Conditions = () => {

    const [modal, setModal] = useState(false)
    const [itemId, setItemId] = useState(null)



    const openModal = (id) => {
        setModal(true)
        setItemId(id)
    }
    const closeModal = () => {
        setModal(false)
        setItemId(null)
    }

    return (
        <Container>
            {contracts.map((item) => (
                <Card className="card" key={item.id}>
                    <div className="card-body">
                        <Div>
                            <h5 className="card-title">{item.supplier}</h5>
                            <Button type="submit" className="btn btn-primary" onClick={()=>openModal(item.id)}>Изменить</Button>
                        </Div>
                        <p className="card-text">{item.buyer}</p>
                        <table className="table">
                            <thead>
                                <tr>
                                    <Th1 scope="col" style={{"backgroundColor": "lightgray", "vertical-align": "middle"}}>Позиція</Th1>
                                    <Th scope="col"style={{"backgroundColor": "lightgray"}}>Ціна,<br/>total</Th>
                                    <Th scope="col"style={{"backgroundColor": "lightgray"}}>Ціна,<br/>bill</Th>
                                    <Th scope="col"style={{"backgroundColor": "lightgray","vertical-align": "middle"}}>FOC</Th>
                                    <Th scope="col" style={{ "backgroundColor": "lightgray" }}>План<br/>{item.id===7 ? '06.25-05.26':'2025'}</Th>
                                    <Th scope="col"style={{"backgroundColor": "lightgray"}}>Факт<br/>2025</Th>
                                    <Th scope="col"style={{"backgroundColor": "lightgray", "vertical-align": "middle"}}>%%</Th>
                                </tr>
                            </thead>
                            {item.products?.map((product) => (
                                <tbody key={product.id}>
                                <tr>
                                    <Th2 scope="row">{product.name}</Th2>
                                    <Td>{product.priceTotal}</Td>
                                    <Td>{product.priceBill}</Td>
                                    <Td>{product.foc}</Td>
                                    <Td>{product.obligations ? product.obligations.toLocaleString('ru-RU') : '-'}</Td>
                                    <Td>{product.odered ? product.odered.toLocaleString('ru-RU') : '-'}</Td>
                                    <Td>{product.odered && product.obligations ? Math.ceil((product.odered*100)/product.obligations) : "-"}</Td>
                                </tr>
                            </tbody>
                            ))}
                        </table>
                    </div>
                </Card>
            ))}
            {modal && (
                <Modal closeModal={closeModal} > 
                    <FormChanging itemId={itemId} closeModal={closeModal}/>
				</Modal>
			)}
        </Container>
    );
};



