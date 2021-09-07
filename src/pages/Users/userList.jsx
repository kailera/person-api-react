import React , { useState, useEffect, useRef} from "react";
import axios from "axios";
import urls from '../../const/const'

const urlUsers = urls.users;

const UserList = (props) =>{

    
    const [userList, setUserList] = useState([]);

    // busca a lista nova    
    useEffect(()=> {
        
        getUpdatedList();
        
    },[]);
    
    const getUpdatedList = () =>{
        axios(urlUsers)
        .then((res) =>{
            setUserList(res.data)
        })
    }


    return(
        <div className="col-12 col-md-8 h-75">
            <table className="table ">
            <thead className="thead">
                <tr>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                </tr>
            </thead>
            <tbody>
               
            {!!userList && userList.map((user, key) => (
                <tr key={key}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
            </tr>
            ))}
        
            </tbody>
        </table>
        </div>
    )
}

export default UserList;