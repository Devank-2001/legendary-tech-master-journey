import { useForm } from "react-hook-form";
const App = () => {

  const {
    register,
    handleSubmit,
   reset,
   formState:{ errors },
  }=useForm();

  const handleFormSubmit=(data)=>{
    console.log(data);
     alert(`Welcome ${data.name}! 🌿`);
    reset()
    
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-700 to-indigo-300">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-5 bg-white/10 backdrop-blur-md p-8 rounded-2xl w-80 shadow-2xl border border-white/20">
        <h1 className="text-white text-2xl font-semibold text-center mb-2">
          🌿 Hook Form
        </h1>

        <input  {...register("name",{required:"Name is required",minLength:{value:3, message: "Name must be al least 3 characters",}})}
          type="text"
          placeholder="Enter your name"
          className="border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
        />
        {errors.name && ( <p className="text-lime-300  text-sm">{errors.name.message} </p> )}
        <input  {...register( "password", {required:"Password is required", minLength:{value:6, message:"Password must be at least 6 characters",}})}
          type="password"
          placeholder="Enter password"
          className="border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
        />
        {
          errors.password && ( <p className="text-lime-300  text-sm">{errors.password.message}</p>)
        }


        <input  {...register("email",{required:true})}
          type="email"
          placeholder="Enter email"
          className="border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
        />
        {errors.email&&errors.email.type==="required"?(<p> mail is required</p>):null}

        <button
          type="submit" value="create"
          className="bg-white text-red-700  font-semibold rounded-md p-2 hover:bg-emerald-100 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App