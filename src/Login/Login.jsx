import React from 'react'
import { Container, Buttons, Button } from './Login.styled'


export const Login = () => {
    return (
        <Container> 
            <form>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <Buttons>
                    <Button type="submit" className="btn btn-primary">Sign in</Button>
                    <Button type="submit" className="btn btn-primary">Registration</Button>
                </Buttons>
            </form>

        </Container>
    )
}
