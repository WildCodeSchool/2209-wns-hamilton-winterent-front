import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MutationAddUserArgs } from "../generated/graphql";
import { ADD_USER } from "../graphql/mutations/usersMutations";
import imgLogin from "../../src/assets/imgLogin.png"


interface FormValues extends MutationAddUserArgs {}
// type FormValues = {
//   firstname: string;
//   lastname: string;
//   email: String;
//   password: String;
// };

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();
  const [addUser, { loading, error }] = useMutation(ADD_USER);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await addUser({ variables: data });
    navigate("/login");
  };

  console.log(error);

  if (loading) return <div>Chargement en cours</div>;
  if (error) return <div>Une erreur s'est produite</div>;
  return (
    <div>
        <div>
          <img className="w-100" src={imgLogin} alt="" />
        </div>
      <div className="d-flex justify-content-center mt-3">
        <h3>Créer un compte</h3>
        <br className="line"/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <div className="d-flex justify-content-center gap-5 mt-4">
            <label htmlFor="">
            Nom
            <input style={{ width: '20rem'}} className="form-control" placeholder="Doe" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
              id="lastname"
              {...register("user.lastname", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
            {errors.user?.lastname &&
              errors.user?.lastname.type === "required" && (
                <span>Le nom est required</span>
              )}
          </label>
          <label htmlFor="">
            Prenom
            <input style={{ width: '20rem'}} className="form-control" placeholder="John" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
              id="firstname"
              {...register("user.firstname", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
            {errors.user?.firstname &&
              errors.user?.firstname.type === "required" && (
                <span>Le prénom est required</span>
              )}
          </label>
            </div>




            <div style={{gap: '4rem'}} className="d-flex justify-content-center align-items-center mt-4">
            <label htmlFor="">
            Date de Naissance
            <input style={{ width: '20rem'}} className="form-control" placeholder="20/10/2000" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
              id="birthdate"
              {...register("user.birthdate", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
            {errors.user?.lastname &&
              errors.user?.lastname.type === "required" && (
                <span>Le date de naissance est required</span>
              )}
          </label>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"/>
            <label className="custom-control-label">Homme</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
            <label className="custom-control-label">Femme</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
            <label className="custom-control-label">Autre</label>
          </div>
            </div>

            <div className="d-flex justify-content-center gap-5 mt-4">
            <label htmlFor="">
            Téléphone
            <input style={{ width: '20rem'}} className="form-control" placeholder="0623456712" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
              id="lastname"
              {...register("user.lastname", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
            {errors.user?.lastname &&
              errors.user?.lastname.type === "required" && (
                <span>Le numéro de téléphone est required</span>
              )}
          </label>
          <label htmlFor="">
            Mot de passe
            <input style={{ width: '20rem'}} className="form-control" placeholder="***********" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
               type="password"
               id="password"
               {...register("user.password", {
                 required: true,
               })}
             />
            {errors.user?.firstname &&
              errors.user?.firstname.type === "required" && (
                <span>Le mot de passe est required</span>
              )}
          </label>
            </div>
            <div className="d-flex justify-content-center gap-5 mt-4">
            <label htmlFor="">
            Email
            <input style={{ width: '20rem'}} className="form-control" placeholder="0623456712" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
               id="email"
               {...register("user.email", {
                 pattern: /[A-Za-z]{3}/,
                 required: true,
               })}
             />
            
            {errors.user?.lastname &&
              errors.user?.lastname.type === "required" && (
                <span>L'email est required</span>
              )}
          </label>
          <label htmlFor="">
           Confiramtion de Mot de passe
            <input style={{ width: '20rem'}} className="form-control" placeholder="***********" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
              id="firstname"
              {...register("user.firstname", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
            {errors.user?.firstname &&
              errors.user?.firstname.type === "required" && (
                <span>La confirmation du mot de passe est required</span>
              )}
          </label>
            </div>



        </div>
        <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-primary">Inscription</button>        
        </div>
      </form>
    </div>
  );
}

export default Register;
