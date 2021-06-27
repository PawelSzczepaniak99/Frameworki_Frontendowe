import React, {useState, useEffect } from 'react';
import axios from 'axios';
import "./ApiStyles.css";
import Notes from "../assets/icons/notes.png";
import Entities from "../assets/icons/entities2.png";
import { Link } from "react-router-dom";

const ResumeApi = () => {

    const [user, setUser] = useState([]);
    const [post, setPost] = useState([]);
    


    useEffect(() => {
        function getRandomIntInclusive(min: number, max: number):number {
            min = Math.ceil(0);
            max = Math.floor(9);
            return Math.floor(Math.random() * (max - min + 1)) + min;
            
          }
          let numero:number =getRandomIntInclusive(0,9);
          
    
        const fetchData = () => {
    
            const userApi = 'https://jsonplaceholder.typicode.com/users';
            const postApi = 'https://jsonplaceholder.typicode.com/comments';
    
    
            const getUser = axios.get(userApi)
            const getPost = axios.get(postApi)
            axios.all([ getUser, getPost]).then(
                axios.spread((...allData) => {
    
                    const allDataUser = allData[0].data[numero].name;
                    const allDataPost = allData[1].data[numero].body;
    
    
                    setUser(allDataUser)
                    setPost(allDataPost)
                })
            )
        }
        fetchData()
    }, []);


    return(
        <div className="ApiContent2">
        <Link to="/test"> <p className="ResTitle">Contract #{Math.floor(Math.random() * 200)}</p></Link>
           <div className="PostContent2"> {post} </div>
           <img src={Entities} alt=""/><p>Subsid.corp</p><p>•</p><img src={Notes} alt=""/><Link to="/client_contract"><p>Client contracts</p></Link><p>•</p>
            <div className="ApiUserName2">Updated 3 days ago by {user} </div>           
        </div>
        
        
    );
}
export default ResumeApi;

