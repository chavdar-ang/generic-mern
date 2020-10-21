import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import entities from "../../entities.json";
import Field from '../form/DynamicFormField';

function UpdateForm() {
    const { entity } = useParams();
    const { fields, related } = entities[entity];

    if (related) {
        console.log('has related logic here');
    }

    const currentEntity = useSelector(state => state.entities.updating);

    console.log('test', currentEntity['author']);

    return (
        <div>
            <p>ID: {currentEntity._id}</p>
            {
                Object.keys(fields).map((value, index) => {
                    return <Field key={index} field={fields[value]} data={currentEntity[value]} />
                })
            }
            <div>
                {
                    Object.keys(related).map((value, index) => {
                        // const relatedData = currentEntity[related[value]][value]
                        console.log(value);
                        // console.log(related[value], value);
                        console.log(value);
                        return <Field key={index} field={related[value]} data={currentEntity[value]} />
                    })
                }
            </div>
        </div>
    );
}

export default UpdateForm;