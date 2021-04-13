import React from 'react';

const TableRow = (props) => {
    const {name, price, weight, _id} = props.singleData;

    const deleteProductHandle = (id) =>{
        console.log("deleted", id);
        console.log("deleted", typeof id);
        
        fetch(`https://mysterious-depths-20709.herokuapp.com/delete/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            console.log('Deleted SuccessFully', result);
        })
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{weight}</td>
            <td>
                <button className="btn btn-primary" onClick={()=> deleteProductHandle(_id)}>Delete</button>
            </td>
        </tr>
    );
};

export default TableRow;