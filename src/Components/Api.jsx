import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Apitest = () => {

    //const url = 'https://633d5b14f2b0e623dc720bf9.mockapi.io/blogs/';
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'
    //const url = process.env.REACT_APP_API_URL;


    const [postId,setPostId] = useState(0);
    const [blogname,setBlogname] = useState('');

    const [coinname, setCoin] = useState ('');
    const [deletedBlog,setDeletedBlog] = useState('');
    const [id, setId] = useState(1);
    const [getBlog, setGetBlog] = useState('');
    const [datos, setDatos] = useState('');


    const blog = {
        "blogname": "Mami",
        "content": "content 1",
    }

    const coin = {
        "symbol": "cc19",
        "name": "covidcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        "current_price": 2019,
        "market_cap": 533466366338,
        "market_cap_rank": 1,
    }
    
    // const Get = async (number) => {
    //     const response = await fetch(url + number);
    //     const data = await response.json();
    //     setId(number);
    //     setGetBlog(data.blogname);
        
    // }

    const Get = async (number) => {
        try{
            const res = await axios.get(url);
            // console.log(res.data[number].id)
            // setGetBlog(res.data[number].id);
            setDatos(res.data)
        } catch (error){
            console.log(error);
        }
    }

    const Post = async() => {
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(blog)
        // };
        // const response = await fetch(url, requestOptions);
        // const data = await response.json();
        // setPostId(data.id);
        // setBlogname(data.blogname);
        try{
            const res = await axios.post(url, coin);
            setPostId(res.data.id);
            setCoin(res.data.symbol);
        } catch (error) {
            console.log(error);
        }
    }
    

    const Delete = async(number) => {
        // const response = await fetch(url + number, { method: 'DELETE' })
        // const data = await response.json();
        // setDeletedBlog(number);
        try{
            const res = await axios.delete(url);
            setDeletedBlog(res.data[number].id)
        } catch (error){
            console.log(error)
        }
    }
    
    const handleChange = event => {
        setId(event.target.value);
    
        console.log('value is:', event.target.value);
    };
    return(
        <div className='container'>
            <div>
                    ID:
                <input
                type="number"
                id="id"
                name="id"
                onChange={handleChange}
                value={id}
                />
            </div>
            <div className='columns'>
                <div>
                    <button onClick={() => Get(id)}> Get</button>
                    
                     - Moneda: {getBlog}
                     <ul>
                        {!datos? 'cargando...' : datos.map((item,index) => {
                            return(
                                <li key={item.id}>
                                    {"id: " + item.id + " - symbol: " + item.symbol + " - name: " + item.name} 
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                <button onClick={async() => await Post()}> Post</button>
                VERBO POST: {postId} {coinname}
                </div>
                <div>
                <button onClick={async() => await Delete(id)}> Delete</button>
                VERBO DELETE: {deletedBlog}
                </div>
            </div>
        </div>
        
        );

    
    }
export default Apitest;
