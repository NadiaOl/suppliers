// =============================================================================
// Файл: AddProduct/AddProduct.js
// Описание: Добавление нового продукта.
// =============================================================================


import React from 'react'
import { Button, Form } from '../ChangeProduct/ChangeProduct.styled'

export const AddProduct = ({ productId }) => {
    
    return (
        <Form >
            <div>
                <label htmlFor="productNewName">Введіть назву продукту</label>
                <input type="text" className="form-control" id="productNewName" placeholder="Назва продукту"/>
            </div>
            <div>
                <label htmlFor="newTotalPrice">Введіть нову Total Price</label>
                <input type="text" className="form-control" id="newTotalPrice" placeholder="10.10"/>
            </div>
            <div>
                <label htmlFor="newBillPrice">Введіть нову Bill Price</label>
                <input type="text" className="form-control" id="newBillPrice" placeholder="8.5"/>
            </div>
            <div>
                <label htmlFor="newFOC">Введіть новий FOC</label>
                <input type="text" className="form-control" id="newFOC" placeholder="1.05"/>
            </div>
            <div>
                <label htmlFor="newObligations">Введіть нові зобов'язанняий FOC</label>
                <input type="text" className="form-control" id="newObligations" placeholder="500"/>
            </div>
            <div>
                <Button type="submit" className="btn btn-primary">Зберігти зміни</Button>
            </div>
        </Form>
    )
}
