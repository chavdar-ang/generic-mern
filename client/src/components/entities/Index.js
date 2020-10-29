import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { loadEntities } from '../../store/entities';
import Table from './Table';


function Index() {
    
    const { entity } = useParams();
    const dispatch = useDispatch();
    
    // useEffect dependancy workaround
    const onInit = () => {
        dispatch(loadEntities(entity));
    }
    
    // load data
    useEffect(onInit, []);

    // dependancy warning without [dispatch, entity]
    // useEffect(() => {
    //     dispatch(loadEntities(entity));
    // }, [dispatch, entity]);

    return (
        <div>
            <h2>{entity}</h2>
            <Table />
        </div>
    );
}

export default Index;