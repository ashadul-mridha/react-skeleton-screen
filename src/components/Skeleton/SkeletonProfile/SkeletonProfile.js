import React from 'react';
import Skeleton from '../Skeleton';
import '../Skeleton.css'

const SkeletonProfile = () => {
    return (
        <div className="skeletonWrapper">
            <div className="skeletonProfile">
                <div>
                    <Skeleton type="avatar"></Skeleton>
                </div>
                <div>
                    <Skeleton type="title"></Skeleton>
                    <Skeleton type="text"></Skeleton>
                    <Skeleton type="text"></Skeleton>
                </div>
            </div>
        </div>
    );
};

export default SkeletonProfile;