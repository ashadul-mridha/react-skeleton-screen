import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Skeleton from './Skeleton/Skeleton';

const Article = () => {
    const [articles , setArticles] = useState([]);
    const [loading , setLoading] = useState(false);
    useEffect( () => {
        // setTimeout( () => {
            // setLoading(true);
            // console.log(loading);
            // fetch('https://jsonplaceholder.typicode.com/posts')
            // .then( res => res.json())
            // .then( data => {
            //     setLoading(false);
            //     console.log(loading);
            //     setArticles(data);
                
            // })
        // } , 3000)
        
        setLoading(true)

        setTimeout( () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then( data => {
                setArticles(data);
                setLoading(false)
            })
        } ,3000)

    } , [])
    return (
        <div>
            <Skeleton type='title'></Skeleton>
            <Skeleton type='text'></Skeleton>
            <Skeleton type='avatar'></Skeleton>
            <Skeleton type='thumbnail'></Skeleton>
            {
                loading ? (
                    <div>Loading</div>
                ) : (
                    <div>
                       {
                           articles?.map( article => {
                               return(
                                   <div>
                                       {console.log(article)}
                                        <h3>{article?.title}</h3>
                                        <p>{article?.body}</p>
                                   </div>
                               )
                           })
                        
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Article;