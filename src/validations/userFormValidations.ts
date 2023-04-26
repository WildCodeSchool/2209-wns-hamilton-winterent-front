import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("Votre prénom est obligatoire")
    .min(3, "Le prénom doit avoir au minimum 3 lettres")
    .max(30, "Le prénom doit contenir au maximum 30 lettres"),
  lastname: yup
    .string()
    .required("Votre nom est obligatoire")
    .min(3, "Le prénom doit avoir au minimum 3 lettres")
    .max(30, "Le prénom doit contenir au maximum 30 lettres"),
  email: yup
    .string()
    .email("L'email fournit n'est pas valide")
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

export const addressSchema = yup.object().shape({});
