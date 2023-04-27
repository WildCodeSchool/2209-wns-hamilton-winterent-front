import { SubmitHandler, useForm } from "react-hook-form";
import { CreateAddress, CreateUser } from "../../generated/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  registerSchema,
  addressSchema,
} from "../../validations/userFormValidations";

interface User extends CreateUser {
  address: CreateAddress;
}
const schema = registerSchema.concat(addressSchema);

function UserProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<User> = async (response) => {
    console.log("test", response);
  };

  return (
    <form
      className="d-flex flex-column col-6"
      onSubmit={handleSubmit(onSubmit)}>
      <label className="form-label m-2">
        <div className="d-flex justify-content-start">
          Nom <em className="text-danger">*</em>
        </div>

        <input
          type="text"
          id="lastname"
          className="form-control my-2"
          placeholder="ex: Doe"
          {...register("lastname")}
        />
        <div className="text-danger">{errors.lastname?.message}</div>
      </label>

      <label className="form-label m-2">
        <div className="d-flex justify-content-start">
          Prénom <em className="text-danger">*</em>
        </div>
        <input
          type="text"
          id="firstname"
          className="form-control my-2"
          placeholder="ex: John"
          {...register("firstname")}
        />
        <div className="text-danger">{errors.firstname?.message}</div>
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
        <div className="d-flex justify-content-start">Date de naissance</div>
        <input
          type="date"
          id="birthdate"
          className="form-control my-2"
          placeholder="ex: "
          {...register("birthdate")}
        />
      </label>

      <label className="form-label m-2">
        <div className="d-flex justify-content-start">
          Email <em className="text-danger">*</em>
        </div>
        <input
          type="text"
          id="email"
          className="form-control my-2"
          placeholder="ex: john.doe@exemple.com"
          {...register("email")}
        />
        {/* <div className="text-danger">{errors.email?.message}</div> */}
      </label>

      <label className="form-label m-2">
        <div className="d-flex justify-content-start">
          Mot de passe<em className="text-danger">*</em>
        </div>
        <input
          type="text"
          id="password"
          className="form-control my-2"
          placeholder="ex: *****"
          {...register("password")}
        />
        <div className="text-danger">{errors.password?.message}</div>
      </label>

      <label className="form-label m-2">
        <div className="d-flex justify-content-start">
          Téléphone <em className="text-danger">*</em>
        </div>
        <input
          type="text"
          id="phoneNumber"
          className="form-control my-2"
          placeholder="ex: +33 0600110011"
          {...register("phoneNumber")}
        />
        {/* <div className="text-danger">{errors.phoneNumber?.message}</div> */}
      </label>

      {/* ADDRESS SECTION */}

      <label className="form-label m-2">
        <div className="d-flex justify-content-start">
          Numéro de rue <em className="text-danger">*</em>
        </div>
        <input
          type="number"
          id="roadNumber"
          className="form-control my-2"
          placeholder="ex: 1"
          {...register("address.roadNumber")}
        />
        <div className="text-danger">{errors.address?.roadNumber?.message}</div>
      </label>

      <label className="form-label m-2">
        <div className="d-flex justify-content-start">
          Nom de la voie<em className="text-danger">*</em>
        </div>
        <input
          type="text"
          id="streetName"
          className="form-control my-2"
          placeholder="ex: Rue du chemin"
          {...register("address.streetName")}
        />
        <div className="text-danger">{errors.address?.streetName?.message}</div>
      </label>

      <label className="form-label m-2">
        <div className="d-flex justify-content-start">
          Code postal <em className="text-danger">*</em>
        </div>
        <input
          type="text"
          id="postalCode"
          className="form-control my-2"
          placeholder="ex: 69000"
          {...register("address.postalCode")}
        />
        {/* <div className="text-danger">{errors.address?.postalCode?.message}</div> */}
      </label>

      <label className="form-label m-2">
        <div className="d-flex justify-content-start">
          Ville<em className="text-danger">*</em>
        </div>
        <input
          type="text"
          id="city"
          className="form-control my-2"
          placeholder="ex: Lyonn"
          {...register("address.city")}
        />
        <div className="text-danger">{errors.address?.city?.message}</div>
      </label>

      <label className="form-label m-2">
        <div className="d-flex justify-content-start">
          Pays <em className="text-danger">*</em>
        </div>
        <input
          type="text"
          id="country"
          className="form-control my-2"
          placeholder="ex: France"
          {...register("address.country")}
        />
        <div className="text-danger">{errors.address?.country?.message}</div>
      </label>

      <div>
        <button className="btn btn-light" type="submit">
          Sauvegarder
        </button>
      </div>
    </form>
  );
}

export default UserProfileForm;
