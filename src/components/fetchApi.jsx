import React, { useState } from "react";
import axios from 'axios';

const FetchApiComponent = () => {
    const [myData, setMyData] = useState([]);

    const handleClick = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/Todos', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setMyData(jsonResponse);
        } catch (e) {
            console.error("--------------Error Message----------------", e);
        }
    }

    const handleClickWithAxios = async () => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/Todos');
            // const jsonResponse = await response.json();
            console.log(response);
            setMyData(response);
        } catch (e) {
            console.error(e);
        }
    }

    const addData = async () => {
        try {
            const myPostDataInformation = {
                userId: 1,
                title: 'Post my Title',
                body: 'My Data Body'
            }
            const response = await axios({
              method: 'post',
              url: 'https://jsonplaceholder.typicode.com/posts',
              data: myPostDataInformation
            });
            console.log(response);
        } catch (e) {
            console.error("Error while adding data", e);
        }
    }


    return (
        <div>
            <h1>Fetch Api</h1>
            <table>
                <thead>
                    <tr key = "head">
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {myData.map((data) => {
                        const { userId, id, body, title } = data;
                        return (
                            <tr key={id}>
                                <td>{userId}</td>
                                <td>{id}</td>
                                <td>{title}</td>
                                {/* <td>{completed ? "Yes" : "No"}</td> */}
                                <td>{body}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button onClick={handleClick}>Fetch Data</button>
            <button onClick={handleClickWithAxios}>Fetch Data With Axios</button>
            <button onClick={addData}>Add My DATA</button>
        </div>
    );
};

export default FetchApiComponent;