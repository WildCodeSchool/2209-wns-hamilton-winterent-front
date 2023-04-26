import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstname: yup.string().min(2).max(30).required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone is required"),
  birthdate: yup.string().optional(),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const addressSchema = yup.object().shape({
  address: yup.object().shape({
    streetName: yup
      .string()
      .nullable()
      .notRequired()
      .min(2, "Le nom de rue doit être supérieur à 2 caractères")
      .max(50, "Le nom de rue doit être inférieur à 50 caractères"),
    roadNumber: yup
      .number()
      .min(1, "Le numéro de rue doit contenir au moins 1 chiffre")
      .nullable()
      .notRequired(),
    postalCode: yup
      .string()
      .min(4, "le code postal doit contenir minimum 4 caractères")
      .notRequired(),
    country: yup
      .string()
      .optional()
      .min(2, "Le pays doit être supérieur à 2 caractères")
      .max(50, "Le pays doit être inférieur à 50 caractères"),
    city: yup
      .string()
      .optional()
      .min(2, "La ville doit être supérieur à 2 caractères")
      .max(50, "La ville doit être inférieur à 50 caractères"),
  }),
});
