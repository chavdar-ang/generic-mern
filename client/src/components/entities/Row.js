import React from 'react';
// import { useSelector } from 'react-redux'

function Row({ fields, data }) {

    // const list = useSelector(state => state.entities.list);

    return (
        <tbody>
            <tr>
                {
                    Object.keys(fields).map(field => {
                        return(<td key={field}>{data[field]}</td>)
                    })
                }
            </tr>
        </tbody>
    );
}

export default Row;