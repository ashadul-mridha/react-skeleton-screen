import React from 'react';
import './Skeleton.css';

const Skeleton = ({type}) => {
    const typeofSkeleton = `skeleton ${type}`;
    return (
        <div className={typeofSkeleton}> </div>
    );
};

export default Skeleton;