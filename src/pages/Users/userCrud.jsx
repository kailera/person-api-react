import Main from "../../components/template/Main";
import React from "react";
import UserForm from "./UserForm";
import UserList from "./userList";

// api rest url

const headerProps = {
    title:"Cadastro de Funcionários",
    subtitle:"Cadastro, Exclusão, Atualização de Dados e Listagem"
}


function UserCrud (){

    return(
        <Main {...headerProps}> 
            <div className="row">
                <div className="col-12 col-md-6">
                    <UserForm/>
                </div>
                <div  className="col-12 col-md-6 h-15 overflow-auto">
                  <UserList/>
                </div>                
            </div>        
        </Main>
    )
}

export default UserCrud;