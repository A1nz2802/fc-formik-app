import { useField } from 'formik';

const Select = ({ label, ...props }) => {
  const [ field, meta ] = useField( props )
  // ver los valores de nuestro checkbox
  console.log( field ) 
  return(
    <div>
      <label>{ label }</label>
      <select { ...field } { ...props }></select>
      { meta.touched && meta.error ? <div>{ meta.error }</div> : null }
    </div>
  )
}

export default Select;