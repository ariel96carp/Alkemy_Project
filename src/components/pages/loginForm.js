import { useState } from "react"
import { useNavigate } from "react-router"
import { Formik, Form, Field, ErrorMessage } from "formik"

const LoginForm = () => {
    const [ sendedForm, setSendedForm ] = useState(false)
    const [ errorForm, setErrorForm ] = useState(false)
    
    const navigate = useNavigate()

    const getParams = (values) => {
        const data = {
            email: values.useremail,
            password: values.userpassword
        }

        const header = new Headers()
        header.append("Content-type", "application/json")

        const params = {
            method: "POST",
            headers: header,
            body: JSON.stringify(data)
        }

        return params
    }

    const sendInformation = async (values) => {
        const params = getParams(values)
        try{
            const response = await fetch("http://challenge-react.alkemy.org/", params)
            switch (response.status)
            {
                case 200:
                    const dataResponse = await response.json()
                    localStorage.setItem("alkemyToken", dataResponse.token)
                    setSendedForm(true)
                    setTimeout(() => {
                        setSendedForm(false)
                        navigate("/home")
                    }, 2000)
                    break
                default:
                    setErrorForm(true)
                    setTimeout(() => {
                        setErrorForm(false)
                    }, 2000)
            }
        }
        catch(e){
            setErrorForm(true)
            setTimeout(() => {
                setErrorForm(false)
            }, 2000)
        }
    }
        
    return (
        <Formik
        initialValues={{
            useremail: "",
            userpassword: ""
        }}
        onSubmit={(values, {resetForm}) => {
            sendInformation(values)
            resetForm()
        }}
        validate={(values) => {
            let errors = {}
            if (!values.useremail)
            {
                errors.useremail = "Por favor ingrese un correo."
            }
            if (!values.userpassword)
            {
                errors.userpassword = "Por favor ingrese una contraseña."
            }
            return errors
        }}
        >
            {( { errors } ) => (
                <Form 
                    method="POST"
                    className="login-form wrapper l-40 m-60 center-block" 
                    autoComplete="off" 
                    >
                    <h2 className="title">Iniciar sesión</h2>
                    <div className="login-input">
                        <label htmlFor="useremail">Correo:</label>
                        <Field 
                            type="email" 
                            name="useremail" 
                            placeholder="correo@correo.com"
                        />
                        <ErrorMessage name="useremail" component={() => (
                            <p className="form-message input-m error">
                                {errors.useremail}
                            </p>
                        )} />
                    </div>
                    <div className="login-input">
                        <label htmlFor="userpassword">Contraseña:</label>
                        <Field 
                            type="password" 
                            name="userpassword" 
                            placeholder="12345asd"
                        />
                        <ErrorMessage name="userpassword" component={() => (
                            <p className="form-message input-m error">
                                {errors.userpassword}
                            </p>    
                        )} />
                    </div>
                    <input type="submit" className="button" value="Enviar"></input>
                    {sendedForm && 
                        <p className="form-message form-m succesful center-content">
                            ¡Login exitoso!
                        </p>
                    }
                    {errorForm && 
                        <p className="form-message form-m error center-content">
                            Usuario o contraseña incorrectos.
                        </p>
                    }
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm