import React from "react";

const ProductRow = ({product}) => {

    return (
        <tr>
            <td className="col-md-1">
                {product.name}
            </td>
            <td className="col-md-1">
                {product.category}
            </td>
        </tr>
    )
}

export default ProductRow