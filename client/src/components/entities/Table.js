import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux'
import entities from "../../entities.json";
import Row from './Row';

function Table() {
    const { entity } = useParams();
    const { fields } = entities[entity];
    
    const list = useSelector(state => state.entities.list);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {
                            Object.keys(fields).map((value, index) => <th key={index}>{value}</th>)
                        }
                    </tr>
                </thead>
                {
                    list.map(row => <Row key={row._id} fields={fields} data={row} />)
                }
            </table>
        </div>
    );
}

export default Table;