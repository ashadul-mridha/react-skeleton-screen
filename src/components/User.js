import React, { useEffect,useState } from 'react';

const User = () => {

    //get user from api
    const [user, setUser] = useState(null);

    useEffect( () => {
        setTimeout(  () => {

            fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => setUser(data));

        } ,3000)
    } ,[])

    return (
        <>
            {
                user ? (
                    <div className="profile">
                    <h2>User: {user?.name}</h2>
                    <p>Email : {user?.email}</p>
                    <a href={user?.website}>Website : {user?.website}</a>
            </div>
                ) : (
                    <div className="loading">Loading</div>
                )
            }
        </>
    );
};

export default User;