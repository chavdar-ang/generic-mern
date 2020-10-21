import React from 'react';
import { useParams } from 'react-router';
import entities from "../../entities.json";
import { useSelector } from 'react-redux';
import DynamicFormField from '../form/DynamicFormField';

function UpdateForm() {
    const { entity } = useParams();
    const { fields } = entities[entity];

    const currentEntity = useSelector(state => state.entities.updating);

    return (
        <div>
            <h2>Update form</h2>
            {
                Object.keys(fields).map((value, index) => {
                    return <DynamicFormField key={index} type={fields[value].type} data={currentEntity} />
                })
            }
        </div>
    );
}

export default UpdateForm;