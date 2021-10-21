import { useFormik } from 'formik';
// Ejemplo de un formulario formik con hooks

const validate = ( values ) => {
  const errors = {}
    if ( !values.name ) {
      errors.name = 'Requerido';
    } else if ( values.name.length < 5 ) {
      errors.name = 'El nombre es muy corto';
    }

    if ( !values.lastname ) {
      errors.lastname = 'Requerido';
    } else if ( values.lastname.length < 5 ) {
      errors.lastname = 'El apellido es muy corto';
    }
  return errors;
}

const App = () => {
  // useFormik recibe un objeto
  // este objeto recibe varios parámetros de configuración
  const formik = useFormik({
    initialValues: {
      // Aqui van los valores de los campos de nuestro form
      name: '',
      lastname: '',
      email: '',
    },
    // Recibe una función que necesitas los values
    // Validate se ejecuta cuando tocamos o clickeamos en el campo que lo tenga.
    validate,
    // recibe valores de los campos
    // esto evita el e.preventDefault()
    onSubmit: values => console.log( values )
  })

  return (
    // Es obligatorio pasarle el handleSubmit a nuestro form
    // onBlur sirve para saber cuando el usuario toca el campo
    // getFieldProps le pasa el name, onChange, onBlur y el value a nuestro input
    <form onSubmit={ formik.handleSubmit }>
      <label>Nombre</label>
      <input type='text' {...formik.getFieldProps('name')}/>

      { formik.touched.name && formik.errors.name ? 
      <div>{formik.errors.name}</div> : null }

      <br />
      <label>Apellido</label>
      <input type='text' {...formik.getFieldProps('lastname')}/>

      { formik.touched.lastname && formik.errors.lastname ? 
      <div>{formik.errors.lastname}</div> : null }

      <br />
      <label>Email</label>
      <input type='email' {...formik.getFieldProps('email')} />

      { formik.touched.email && formik.errors.email ? 
      <div>{formik.errors.email}</div> : null }

      <button type='submit'>Enviar</button>
    </form>
  )
}

export default App;

