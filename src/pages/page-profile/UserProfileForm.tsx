import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  registerSchema,
  addressSchema,
} from "../../validations/userFormValidations";
import { useLogin } from "../../context/LoginProvider";
import { AddressUpdateInput, User } from "../../generated/graphql";
import { UPDATE_USER } from "../../graphql/mutations/usersMutations";
import { useMutation } from "@apollo/client";
import { CreateUser } from "../../generated/graphql";

interface FormValues extends CreateUser {
  id: string;
  address: AddressUpdateInput;
}

interface UserProfileFormProps {
  user: User;
}
const schema = registerSchema.concat(addressSchema);

function UserProfileForm({ user }: UserProfileFormProps) {
  const [UpdateUser, { loading, error, data }] = useMutation(UPDATE_USER);
  const { userLog } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {
      firstname: user.firstname,
      lastname: user.lastname,
      birthdate: user.birthdate,
      gender: user.gender,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: {
        roadNumber: user.address?.roadNumber,
        streetName: user.address?.streetName,
        postalCode: user.address?.postalCode,
        city: user.address?.city,
        country: user.address?.country,
      },
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (response) => {
    response.id = user.id;
    //Change birthdate format to send data
    response.birthdate = response.birthdate.toISOString().slice(0, 10);
    await UpdateUser({ variables: { user: response } });
  };

  return (
    <form
      className="d-flex flex-column col-6"
      onSubmit={handleSubmit(onSubmit)}
    >
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
          disabled
          readOnly
          value={user.email}
        />
      </label>

      <label className="form-label m-2">
        <div className="d-flex justify-content-start">Téléphone</div>
        <input
          type="text"
          id="phoneNumber"
          className="form-control my-2"
          placeholder="ex: +33617931076"
          {...register("phoneNumber")}
        />
        <div className="text-danger">
          <>{errors.phoneNumber?.message}</>
        </div>
      </label>

      {/* ADDRESS SECTION */}

      <label className="form-label m-2">
        <div className="d-flex justify-content-start">Numéro de rue</div>
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
        <div className="d-flex justify-content-start">Nom de la voie</div>
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
        <div className="d-flex justify-content-start">Code postal</div>
        <input
          type="text"
          id="postalCode"
          className="form-control my-2"
          placeholder="ex: 69000"
          {...register("address.postalCode")}
        />
        <div className="text-danger">
          <>{errors.address?.postalCode?.message}</>
        </div>
      </label>

      <label className="form-label m-2">
        <div className="d-flex justify-content-start">Ville</div>
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
        <div className="d-flex justify-content-start">Pays</div>
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
