import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsynkGet, selectUsers } from './fetchSlice'

const Fetch = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);

    useEffect(() => {
        dispatch(fetchAsynkGet())
    }, [dispatch]);

    return (
        <div>
            {
                users.map((user) => {
                    return <div key={user.id}>{user.email}</div>
                })
            }
        </div>
    )
}

export default Fetch;
