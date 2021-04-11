import React from 'react';

const OrderTableRow = (props) => {
    const imageSize = {
        width : '100px',
        height : '100px'
    }
    const {name, imageURL, price, Time} = props.singleOrdered
    return (
        <tr>
            <td><img src={imageURL} alt="" style={imageSize}/></td>
            <td>{name}</td>
            <td>{(new Date(Time)).toDateString()}</td>
            <td>{price}</td>
            <td>Ordered</td>
        </tr>
    );
};

export default OrderTableRow;