import {useState} from "react";

const ProductStates = () => {
    const [name, setName] = useState('')
    const [categoryId, setCategoryId] = useState(-1)

    const nameChanged = event => {
        setName(event.target.value);
    }

    const categoryChanged = event => {
        setCategoryId(event.target.value);
    }

    return {states: {name, categoryId}, actions: {nameChanged, categoryChanged}, setters: {setName, setCategoryId}}
}

export default ProductStates
