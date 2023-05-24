import * as yup from "yup";

/* Basic infos user */

const phoneRegExp = /^((\+)33)[1-9](\d{2}){4}$/g;

export const registerSchema = yup.object().shape(
  {
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
    phoneNumber: yup.string().when("phoneNumber", {
      is: (val: string) => val?.length > 0,
      then: (schema) => {
        return schema.matches(phoneRegExp, "Phone number is not valid");
      },
      otherwise: (schema) => schema.notRequired(),
    }),
    birthdate: yup.date(),
  },
  [["phoneNumber", "phoneNumber"]]
);

/* Password validation */

export const passwordSchema = yup.object().shape({
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

/* Address validation */

export const addressSchema = yup.object().shape({
  address: yup.object().shape({
    streetName: yup
      .string()
      .min(2, "Le nom de rue doit être supérieur à 2 caractères")
      .max(50, "Le nom de rue doit être inférieur à 50 caractères")
      .nullable()
      .notRequired(),
    roadNumber: yup
      .number()
      .max(9999999999, "Le numéro de rue doit être inférieur à 10 chiffres")
      .nullable()
      .notRequired(),
    postalCode: yup
      .string()
      .min(4, "le code postal doit contenir minimum 4 caractères")
      .max(10, "Le code postal doit être inférieur à 10 caractères")
      .notRequired(),
    country: yup
      .string()
      .min(2, "Le pays doit être supérieur à 2 caractères")
      .max(50, "Le pays doit être inférieur à 50 caractères")
      .optional(),
    city: yup
      .string()
      .min(2, "La ville doit être supérieur à 2 caractères")
      .max(50, "La ville doit être inférieur à 50 caractères")
      .optional(),
  }),
});
