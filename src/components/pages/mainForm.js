import { Formik, Form, Field, ErrorMessage } from "formik"
import { useContext } from "react"
import { StoreContext } from "../store/storeProvider"
import { types } from "../store/storeReducer"

const MainForm = () => {
    const [ store, dispatch ] = useContext(StoreContext)

    const setNewValue = (value) => {
        dispatch({
            type: types.searchHero,
            payload: value
        })
    }

    return (
        <Formik
        initialValues={{
            usersuperhero: ""
        }}
        onSubmit={(value, {resetForm}) => {
            setNewValue(value.usersuperhero)
            resetForm()
        }}
        validate={(value) => {
            let errors = {}
            if (!value.usersuperhero)
            {
                errors.usersuperhero = "Por favor ingrese un correo."
            }
            return errors
        }}
        >
            {({ errors }) => (
                <Form
                    className="home-form"
                    autoComplete="off"
                    >
                    <div className="title-container">
                        <div className="wrapper">
                            <h2 className="title">Superhéroe FAQ</h2>
                            <p className="description">¡Busca a tu héroe favorito!</p>
                        </div>
                    </div>
                    <div className="home-input">
                        <div className="wrapper">
                            <label htmlFor="usersuperheroe">Buscar</label>
                            <Field 
                                className="input"
                                type="text"
                                name="usersuperhero"
                                placeholder="Batman"
                            />
                            <input className="button" type="submit" value="Buscar" />
                        </div>
                    </div>
                    <ErrorMessage name="usersuperhero" component={() => (
                        <p className="form-message error wrapper">
                            {errors.usersuperhero}
                        </p>
                    )} />
                </Form>
            )}
        </Formik>
    )
}

export default MainForm