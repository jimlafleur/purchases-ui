import React from "react";
import {baseClientURL} from "./constants";

const MyNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href={`${baseClientURL}lists`}>Планировщик покупок</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href={`${baseClientURL}lists`}>Списки
                                покупок</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`${baseClientURL}categories`}>Категории товаров</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`${baseClientURL}init`}>Инициализация данных</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MyNavbar