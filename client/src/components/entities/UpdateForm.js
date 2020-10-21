import React from 'react';
import { useParams } from 'react-router';
import entities from "../../entities.json";
import { useSelector } from 'react-redux'

// const componentMapping = {
//     Navbar1: <Navbar1 />
// }


function UpdateForm() {
    const { entity } = useParams();
    const { fields } = entities[entity];

    const currentEntity = useSelector(state => state.entities.updating);
    // const { entity, id } = useParams();

    console.log('fields', fields);

    return (
        <div>
            <h2>Update form</h2>
            {
                Object.keys(fields).map((value, index) => {
                    return (
                        <div key={index}>{currentEntity[value]}</div>
                    )
                })
            }
        </div>
    );
}

export default UpdateForm;