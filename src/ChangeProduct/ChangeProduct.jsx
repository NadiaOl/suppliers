import React from 'react'
import contracts from "../data.json";
import { Form, Button } from './ChangeProduct.styled';

export const ChangeProduct = ({ productId }) => {
    
    return (
        <div>
            {contracts?.map((supplier) => {
                return <div key={supplier.id}>{supplier.products?.map((product) => {
                    return product.id === productId &&
                    <Form key={product.id} >

                                <div>
                                    <label htmlFor="productNewName">Введіть нову назву</label>
                                    <input type="text" className="form-control" id="productNewName" placeholder={product.name}/>
                                </div>
                                <div>
                                    <label htmlFor="newTotalPrice">Введіть нову Total Price</label>
                                    <input type="text" className="form-control" id="newTotalPrice" placeholder={product.priceTotal}/>
                                </div>
                                <div>
                                    <label htmlFor="newBillPrice">Введіть нову Bill Price</label>
                                    <input type="text" className="form-control" id="newBillPrice" placeholder={product.priceBill}/>
                                </div>
                                <div>
                                    <label htmlFor="newFOC">Введіть новий FOC</label>
                                    <input type="text" className="form-control" id="newFOC" placeholder={product.foc}/>
                                </div>
                                <div>
                                    <label htmlFor="newObligations">Введіть нові зобов'язанняий FOC</label>
                                    <input type="text" className="form-control" id="newObligations" placeholder={product.obligations}/>
                                </div>
                                <div>
                                    <Button type="submit" className="btn btn-primary">Зберігти зміни</Button>
                                </div>

                        </Form>

                            })}
                        </div>
            })}
        </div>
    )
}
