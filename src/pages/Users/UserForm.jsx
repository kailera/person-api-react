import React from "react";
import { useFormik } from "formik";
import { object as schema, string } from "yup";

import axios from "axios";
import urls from "../../const/const";

import InputField from "../../components/forms/InputField";

const { users } = urls;

const validationSchema = schema({
    firstName:string().required("Campo Obrigatório"),
    lastName:string().required("Campo Obrigatório")
})

function UserForm(){

    const {
        values:formValues,
        handleChange:handleFieldChange,
        errors, 
        touched,
        handleBlur,
        handleSubmit,
        handleReset,
    }=useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
        },
        validationSchema,
        onSubmit: (values) => {
            save(values);
            handleReset();
        }
    });

    const save = (values) =>{
        axios.post(users, values)
            .then(res =>{
                console.log('Successfully!: ', res.data)
            })
            .catch(error =>{
                console.log(`Error: ${error}`)
            })
    }
    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <div className="row mb-2">
                    <div className="col-12 col-md-9">
                        <InputField
                            id="firstName"
                            label="Primeiro Nome"
                            hint="Insira o Primeiro Nome"
                            value={formValues.firstName}
                            touched={touched.firstName}
                            error={errors.firstName}
                            onChange={handleFieldChange}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-12 col-md-9">
                        <InputField
                                id="lastName"
                                label="Sobrenome"
                                hint="Insira o sobrenome"
                                value={formValues.lastName}
                                touched={touched.lastName}
                                error={errors.lastName}
                                onChange={handleFieldChange}
                                onBlur={handleBlur}
                            />
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-12 col-md-7">
                        <button
                            className="btn btn-success m-1"
                            type="submit"
                        >
                            Cadastrar
                        </button>

                        <button 
                            className="btn btn-info text-light m-1"
                            onClick={handleReset}
                        >
                            Limpar
                        </button>
                    </div>
                </div>

            </form>
        </>
    )
}

export default UserForm