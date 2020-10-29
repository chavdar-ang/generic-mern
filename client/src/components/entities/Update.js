import React, { Suspense } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getEntityById } from '../../store/entities';
// import UpdateForm from './UpdateForm';
import entities from "../../entities.json";


function Update() {
    const { entity, id } = useParams();

    const { related } = entities[entity];

    if (related) {
        console.log('get entity with related data');
    }

    // Get entity by id
    const dispatch = useDispatch();
    dispatch(getEntityById(entity, id));

    const UpdateForm = React.lazy(() => import('./UpdateForm'));

    return (
        <div>
            <h2>Update {entity}</h2>

            <Suspense fallback={<h1>Loading profile...</h1>}>
                <UpdateForm />
                <div>
                    <button>Update</button>
                </div>
            </Suspense>
        </div>
    );
}

export default Update;