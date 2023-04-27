import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(3, "Le prénom doit avoir au minimum 3 lettres")
    .max(30, "Le prénom doit contenir au maximum 30 lettres"),
  lastname: yup
    .string()
    .min(3, "Le prénom doit avoir au minimum 3 lettres")
    .required("Votre nom est obligatoire")
    .max(30, "Le prénom doit contenir au maximum 30 lettres"),
  email: yup
    .string()
    .email("L'email fournit n'est pas valide")
    .matches(/[A-Za-z]{3}/)
    .required("L'email est obligatoire"),
  phoneNumber: yup.string().required("Le numéro de téléphone est obligatoire"),
  birthdate: yup.string().required("La date de naissance est obligatoire"),
  password: yup
    .string()
    .required("Mot de passe est obligatoire")
    .min(8, "Le mot de passe doit contenir au minimum 8 caractères")
    .matches(/[0-9]/, "Le mot de passe doit contenir au minimum 8 caractères")
    .matches(
      /[a-z]/,
      "Le mot de passe doit contenir au minimum 1 lettre en miniscule"
    )
    .matches(
      /[A-Z]/,
      "Le mot de passe doit contenir au minimum 1 lettre en majuscule"
    )
    .matches(
      /[^\w]/,
      "Le mot de passe doit contenir au minimum 1 caractère spécial"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Il doit être identique au mot de passe")
    .required("La confirmation du mot de passe est obligatoire"),
});

export const loginSchema = yup.object().shape({
  user: yup.object().shape({
    email: yup
      .string()
      .email("L'email fournit n'est pas valide")
      .matches(/[A-Za-z]{3}/)
      .required("L'email est obligatoire"),
    password: yup
      .string()
      .required("Mot de passe est obligatoire")
      .min(8, "Le mot de passe doit contenir au minimum 8 caractères")
      .matches(/[0-9]/, "Le mot de passe doit contenir au minimum 8 caractères")
      .matches(
        /[a-z]/,
        "Le mot de passe doit contenir au minimum 1 lettre en miniscule"
      )
      .matches(
        /[A-Z]/,
        "Le mot de passe doit contenir au minimum 1 lettre en majuscule"
      )
      .matches(
        /[^\w]/,
        "Le mot de passe doit contenir au minimum 1 caractère spécial"
      ),
  }),
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
