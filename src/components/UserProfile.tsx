import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import imgLogin from "../../src/assets/imgLogin.png";
import { Address, GenderType } from "../generated/graphql";

interface User {
  lastname: string;
  firstname: string;
  gender: GenderType;
  email: string;
  password: string;
  birthdate: Date;
  phoneNumber: string;
  address: Address;
}

function UserProfile() {
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (response) => {
    console.log("test", response);
  };

  return (
    <div>
      <div>
        <img className="w-100" src={imgLogin} alt="" />
      </div>

      {/* User Profile Form */}
      <form
        className="d-flex flex-column col-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="form-label m-2">
          Nom <em className="text-danger">*</em>
          <input
            type="text"
            id="lastname"
            className="form-control my-2"
            placeholder="ex: Doe"
            {...register("lastname", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
          />
          {errors.lastname && (
            <div className="text-danger">Le nom est requis</div>
          )}
        </label>

        <label className="form-label m-2">
          Prénom <em className="text-danger">*</em>
          <input
            type="text"
            id="firstname"
            className="form-control my-2"
            placeholder="ex: John"
            {...register("firstname", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
          />
          {errors.firstname && (
            <div className="text-danger">Le prénom est requis</div>
          )}
        </label>

        {/* GENDER */}
        <div className="form-check d-flex justify-content-around my-2">
          <label className="form-check-label ">
            Femme
            <input
              type="radio"
              className="form-check-input"
              {...register("gender")}
              value="WOMAN"
            />
          </label>
          <label className="form-check-label">
            Homme
            <input
              type="radio"
              className="form-check-input"
              {...register("gender")}
              value="MAN"
            />
          </label>
          <label className="form-check-label">
            Autre
            <input
              type="radio"
              className="form-check-input"
              {...register("gender")}
              value="OTHER"
            />
          </label>
        </div>

        {/* BIRTHDATE */}

        <label className="form-label m-2">
          Date de naissance
          <input
            type="date"
            id="birthdate"
            className="form-control my-2"
            placeholder="ex: "
            {...register("birthdate", {
              required: false,
            })}
          />
          {errors.birthdate && <div className="text-danger"></div>}
        </label>

        <label className="form-label m-2">
          Email <em className="text-danger">*</em>
          <input
            type="text"
            id="email"
            className="form-control my-2"
            placeholder="ex: john.doe@exemple.com"
            {...register("email", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
          />
          {errors.email && (
            <div className="text-danger">L'email est requis</div>
          )}
        </label>

        <label className="form-label m-2">
          Mot de passe <em className="text-danger">*</em>
          <input
            type="text"
            id="password"
            className="form-control my-2"
            placeholder="ex: *****"
            {...register("password", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
          />
          {errors.password && (
            <div className="text-danger">
              Un mot de passe doit contenir : Minimum 8 caractères, minimum 1
              majuscule, minimum 1 minuscule, minimum un chiffre (1-9), minimum
              un caractère spécial (&@#!)
            </div>
          )}
        </label>

        <label className="form-label m-2">
          Téléphone
          <input
            type="text"
            id="phoneNumber"
            className="form-control my-2"
            placeholder="ex: +33 0600110011"
            {...register("phoneNumber", {
              required: false,
              minLength: 10,
              maxLength: 10,
            })}
          />
          {errors.phoneNumber && (
            <div className="text-danger">
              Un téléphone doit contenir 10 chiffres
            </div>
          )}
        </label>

        {/* ADDRESS SECTION */}

        <label className="form-label m-2">
          Numéro de rue
          <input
            type="number"
            id="roadNumber"
            className="form-control my-2"
            placeholder="ex: 1"
            {...register("address.roadNumber", {
              required: false,
              minLength: 1,
              maxLength: 5,
            })}
          />
          {errors.address?.roadNumber && <div className="text-danger"></div>}
        </label>

        <label className="form-label m-2">
          Nom de la voie
          <input
            type="text"
            id="streetName"
            className="form-control my-2"
            placeholder="ex: Rue du chemin"
            {...register("address.streetName", {
              required: false,
              minLength: 3,
              maxLength: 30,
            })}
          />
          {errors.address?.streetName && <div className="text-danger"></div>}
        </label>

        <label className="form-label m-2">
          Code postal
          <input
            type="text"
            id="postalCode"
            className="form-control my-2"
            placeholder="ex: 69000"
            {...register("address.postalCode", {
              required: false,
              minLength: 3,
              maxLength: 30,
            })}
          />
          {errors.address?.postalCode && <div className="text-danger"></div>}
        </label>

        <label className="form-label m-2">
          Ville
          <input
            type="text"
            id="city"
            className="form-control my-2"
            placeholder="ex: Lyonn"
            {...register("address.city", {
              required: false,
              minLength: 3,
              maxLength: 30,
            })}
          />
          {errors.address?.city && <div className="text-danger"></div>}
        </label>

        <label className="form-label m-2">
          Pays
          <input
            type="text"
            id="country"
            className="form-control my-2"
            placeholder="ex: France"
            {...register("address.country", {
              required: false,
              minLength: 3,
              maxLength: 30,
            })}
          />
          {errors.address?.country && <div className="text-danger"></div>}
        </label>

        <div>
          <button className="btn btn-light" type="submit">
            Sauvegarder
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
