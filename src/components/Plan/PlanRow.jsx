import React from "react";

const PlanRow = ({plan}) => {

    return (
        <tr>
            <td className="col-md-1">
                {plan.name}
            </td>
            <td className="col-md-1">
                {plan.date}
            </td>
        </tr>
    )
}

export default PlanRow