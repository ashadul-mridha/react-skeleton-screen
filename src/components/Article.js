import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
                setArticles(data.data);
                setLoading(false)
            })
        } ,3000)

    } , [])
    return (
        <>
            {
                loading ? (
                    <div>Loading</div>
                ) : (
                    <div>
                       {
                           articles?.map( article => {
                               return(
                                   <div>
                                        <h3>{article?.title}</h3>
                                        <p>{article?.body}</p>
                                   </div>
                               )
                           })
                        
                        }
                    </div>
                )
            }
        </>
    );
};

export default Article;