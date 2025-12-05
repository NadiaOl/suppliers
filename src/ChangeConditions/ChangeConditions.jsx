import React, { useState } from 'react'
import contracts from "../data.json";
import { Form, Button } from '../ChangeProduct/ChangeProduct.styled';


export const ChangeConditions = ({ productId, conditions }) => {
    
    const [newConditions, setNewConditions] = useState(null)

    const handleChange = ({ target }) => {

            setNewConditions(target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        contracts.map((contract) => {
            if (contract.id === productId) {
                // return {
                //     ...contract,
                //     contract.conditions: newConditions
                // }
                
            }
            
        })
    }


    return (contracts?.map((contract) => {
        return contract.id === productId &&
            <Form key={contract.id}>
                <label htmlFor="newCondition">{contract[conditions]} змінюємо на:</label>
                <input
                    name="newCondition"
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="newCondition" />
                <Button className="btn btn-primary" type='submit' onSubmit={handleSubmit}>Зберегти зміни</Button>
            </Form>
    })

                                    
                                    
    )
}
