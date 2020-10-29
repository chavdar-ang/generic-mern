import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import entities from "../../entities.json";
import Row from './Row';
import { useEffect } from 'react';

function Table() {
    const { entity } = useParams();
    const { fields } = entities[entity];


    const state = useSelector(state => state.entities);

    useEffect(() => {
        console.log(state);
    }, [state])

    const renderItems = () => {
        if (state.loading) {
            return <h2>Loading...</h2>
        }

        return (
            <table>
                <thead>
                    <tr>
                        {
                            Object.keys(fields).map((value, index) => <th key={index}>{value}</th>)
                        }
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                {
                    state.items.map(row => <Row key={row._id} entity={entity} fields={fields} data={row} />)
                }
            </table>
        );
    }

    return (
        <div>
            {renderItems()}
        </div>
    );
}

export default Table;