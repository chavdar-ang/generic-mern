import React from 'react';
import { Link } from 'react-router-dom';

function Row({ fields, entity, data }) {

    return (
        <tbody>
            <tr>
                {
                    Object.keys(fields).map(field => {
                        return(<td key={field}>{data[field]}</td>)
                    })
                }
                <td><Link to={`/entities/${entity}/${data['_id']}`}>edit</Link></td>
                <td><Link to={`/entities/${entity}/${data['_id']}`}>delete</Link></td>
            </tr>
        </tbody>
    );
}

export default Row;