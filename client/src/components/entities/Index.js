import React from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { loadEntities } from '../../store/entities';
import Table from './Table';


function Index() {
    const { entity } = useParams();
    
    //     // load data
    const dispatch = useDispatch();
    dispatch(loadEntities(entity));

    return (
        <div>
            <h2>{entity}</h2>
            <Table />
        </div>
    );
}

export default Index;