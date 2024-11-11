import { object, string } from "yup";

// Definición del esquema de validación para el formulario de contacto
const contactSchema = object({
  nombre: string()
    .required("El campo nombre es requerido")
    .matches(/^[a-zA-Z\s]+$/, "El nombre solo debe contener letras"),
  email: string()
    .required("El campo email es requerido")
    .email("El campo email debe tener un formato válido con '@'"),
  mensaje: string()
    .required("El campo mensaje es requerido")
    .min(10, "El mensaje debe tener al menos 10 caracteres"),
});

// Función de validación que devuelve una promesa
const validateContactForm = (formData) => {
  return contactSchema.validate(formData, { abortEarly: false })
    .then(() => {
      return { status: "success" };
    })
    .catch((error) => {
      return { status: "error", message: error.errors.join(", ") };
    });
};

export default validateContactForm;
