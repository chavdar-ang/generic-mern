import React from 'react';
import { useParams } from 'react-router';
import entities from "../../entities.json";

function Index() {
    const { entity } = useParams();
    const { fields } = entities[entity];
    
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
                <tbody>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Index;