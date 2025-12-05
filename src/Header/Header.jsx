// =============================================================================
// Файл: Header\Header.jsx
// Описание: Хедер
// =============================================================================

import React from 'react'
import { NavLink } from 'react-router-dom'


export const Header = () => {
    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="conditions/">Conditions</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="checklist/">Checklist</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
