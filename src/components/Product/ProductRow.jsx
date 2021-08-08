import React from "react";

const ProductRow = ({product}) => {

    return (
        <tr>
            <td className="col-md-1">
                {product.name}
            </td>
            <td className="col-md-1">
                {product.categoryName}
            </td>
        </tr>
    )
}

export default ProductRow