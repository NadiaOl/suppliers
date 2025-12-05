// =============================================================================
// Файл: FormChanging\FormChanging.jsx
// Описание: Форма для изменения условий
// =============================================================================

import React, { useState } from 'react'
import contracts from "../data.json";

import {Container, Name, List, Product, AddButton, Button} from './FormChanging.styled';
import Modal from '../Modal/Modal';
import { ChangeProduct } from '../ChangeProduct/ChangeProduct';
import { AddProduct } from '../AddProduct/AddProduct';
import { ChangeConditions } from '../ChangeConditions/ChangeConditions';


export const FormChanging = ({ itemId }) => {

    const [modalOnTop, setModalOnTop] = useState(false)
    const [modalAddProduct, setModalAddProduct] = useState(false)
    const [productId, setProductId] = useState(null)
    const [conditions, setConditions]= useState(null)
    
    const openAddProductModal = (id) => {
        setModalAddProduct(true)
        setProductId(id)
    }
    
    const openChangeProductModal = (id) => {
        setModalOnTop(true)
        setProductId(id)
    }
    
    const openChangeConditionsModal = ({target}, id) => {
        setConditions(target.id)
        setModalOnTop(true)
        setProductId(id)
    }


    const closeTopModal = () => {
        setModalOnTop(false)
        setModalAddProduct(false)
        setProductId(null)
        setConditions(null)
    }
    
    return (
        <div>
            {contracts?.map((supplier) => {
                return supplier.id === itemId &&
                <Container key={supplier.id} >
                        <List> Умови
                            <Product >
                                <Name>{supplier.supplier}</Name>
                                <Button className="btn btn-primary" id="supplier" onClick={(event)=>openChangeConditionsModal(event, supplier.id)}>Змінити</Button>
                            </Product>
                            <Product>
                                <Name>{supplier.buyer}</Name>
                                <Button className="btn btn-primary" id="buyer" onClick={(event)=>openChangeConditionsModal(event, supplier.id)}>Змінити</Button>
                            </Product>
                            <Product>
                                <Name>{supplier.currancy}</Name>
                                <Button className="btn btn-primary" id="currancy" onClick={(event)=>openChangeConditionsModal(event, supplier.id)}>Змінити</Button>
                            </Product>
                        </List>
                        <List > Продукти
                            {supplier.products?.map((product) => {
                                return <Product key={product.id} >
                                <Name>{product.name}</Name>
                                <Button className="btn btn-primary" onClick={()=>openChangeProductModal(product.id)}>Змінити</Button>
                            </Product>
                            })}
                        </List>
                        <AddButton className="btn btn-primary" onClick={() => openAddProductModal(itemId)}>Додати продукт</AddButton>
                    </Container>
            })}
            {modalOnTop && (
                <Modal closeModal={closeTopModal}> 
                    <ChangeProduct productId={productId} />
				</Modal>
            )}
            {modalAddProduct && (
                <Modal closeModal={closeTopModal}> 
                    <AddProduct productId={productId} />
				</Modal>
            )}
            {conditions && (
                <Modal closeModal={closeTopModal}> 
                    <ChangeConditions productId={productId} conditions={conditions} />
				</Modal>
			)}
        </div>
    )
}
