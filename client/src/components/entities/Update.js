import React from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getEntityById } from '../../store/entities';
import UpdateForm from './UpdateForm';


function Update() {
    const { entity, id } = useParams();

    // Get entity by id
    const dispatch = useDispatch();
    dispatch(getEntityById(entity, id));

    return (
        <div>
            <h2>Update {entity}</h2>
            <p>{id}</p>
            <UpdateForm />
        </div>
    );
}

export default Update;