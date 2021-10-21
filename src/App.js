import { Formik, Form, ErrorMessage } from 'formik';
import Checkbox from './components/Checkbox';
import TextInput from './components/TextInput';
import Select from './components/Select';
import Radio from './components/Radio';
// Ejemplo de un formulario formik con componentes

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

    if( !values.radio ) {
      errors.radio = 'Requerido';
    }
  return errors;
}

const App = () => {
  // Field, ErrorMessage, Form por debajo estan usando la API Context de React
  // Desde Field podemos indicar "as" para indicar que tipo de campo queremos
  // Tambien podemos agregar clases Css con un className
  // Es necesario crear la validación para el campo y indicar un valor inicial si queremos 
  // que el campo pase por la validación correspondiente
  return (
    <Formik 
      initialValues={{ name: '', lastname: '', email: '', chancho: '', radio: '' }}
      validate={ validate }
      onSubmit={ values => console.log( values )}
    >
      <Form>
        <TextInput name="name" label="Nombre" />
        <br />
        <TextInput name="lastname" label="Apellido"/>
        <br />
        <TextInput name="email" label="Correo"/>
        <Select label="Tipo de chancho" name="chancho">
          <option value="">Seleccione chancho</option>
          <option value="felipe">Felipe</option>
          <option value="chanchitofeliz">ChanchitoFeliz</option>
          <option value="chanchitotriste">ChanchitoTriste</option>
        </Select>
        <Checkbox name="accept">
          Aceptar términos y condiciones
        </Checkbox>
        <Radio name="radio" value="chanchito1" label="chanchito1" />
        <Radio name="radio" value="chanchito2" label="chanchito2" />
        <Radio name="radio" value="chanchito3" label="chanchito3" />
        <ErrorMessage name="radio" />
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  )
}

export default App;