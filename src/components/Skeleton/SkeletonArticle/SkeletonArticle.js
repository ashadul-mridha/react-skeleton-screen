import React from 'react';
import './SkeletonArticle.css';
import Skeleton from '../Skeleton';

const SkeletonArticle = () => {
    return (
        <>
            <div className="skeletonWrapper">
                <div className="skeletopArticle">
                    <Skeleton type='title'></Skeleton>
                    <Skeleton type='text'></Skeleton>
                    <Skeleton type='text'></Skeleton>
                </div>
            </div>
        </>
    );
};

export default SkeletonArticle;