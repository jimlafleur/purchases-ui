import React from "react";
import {postRequest} from "../service/abstractService";


const InitForm = () => {

    const init = ()=>{
        postRequest({}, 'init', null, {})
    }

    return (<button onClick={init}>
            Инициализировать данные
        </button>
    )
}

export default InitForm