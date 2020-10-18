import React from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { loadEntities } from '../../store/entities';
// import Table from './Table';


function Update() {
    const { entity } = useParams();
    
    //     // load data
    // const dispatch = useDispatch();

    // dispatch(loadEntities(entity));

    return (
        <div>
            <h2>Update {entity}</h2>
            {/* <Table /> */}
        </div>
    );
}

export default Update;