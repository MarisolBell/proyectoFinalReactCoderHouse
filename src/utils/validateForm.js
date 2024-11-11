import {object, string } from "yup"

// Definición del esquema de validación
let userSchema = object({
  fullname: string()
    .required("El campo nombre es requerido")
    .matches(/^[a-zA-Z\s]+$/, "El nombre solo debe contener letras"),
  phone: string()
    .required("El campo telefono es requerido")
    .matches(/^[0-9]+$/, "El telefono solo debe contener numeros")
    .min(10, "El telefono debe tener al menos 10 dígitos"),
  email: string()
    .required("El campo email es requerido")
    .email("El campo email debe tener un formato válido con '@'")
})

// Función de validación que devuelve una promesa
const validateForm = (dataForm) => {
  return userSchema.validate(dataForm, { abortEarly: false })
    .then(() => {
      return { status: "success" }
    })
    .catch((error) => {
      return { status: "error", message: error.errors.join(", ") }
    })
}

export default validateForm
