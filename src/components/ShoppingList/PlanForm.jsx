import React, {useState} from "react";

const PlanForm = ({list}) => {

    const [date, setDate] = useState('')

    const dateChanged = () => {

    }

    return (
        <div>
            <p>Планирование</p>
            <span>Дата</span>
            <input type="date" onChange={dateChanged}/>
        </div>

    )
}

export default PlanForm
