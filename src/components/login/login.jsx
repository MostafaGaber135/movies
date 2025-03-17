import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input 
        {...register("username", { required: 'Username is required' })} 
        className="form-control mt-3 mb-3 "  
        type="text"
        placeholder="Username"
      />
      {errors.username && (
        <span className="error text-danger mt-3 mb-3">{errors.username.message}</span>
      )}

      <input 
        {...register("password", { required: 'Password is required' })}  
        className="form-control mt-3 mb-3 " 
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <span className="error text-danger mt-3 mb-3">{errors.password.message}</span>
      )}

      <div className="text-center text-white container-fluid">
        <input 
          type="submit" 
          className="btn btn-dark mt-3 mb-3"
          value="Login"
        />
      </div>
    </form>
  )
}