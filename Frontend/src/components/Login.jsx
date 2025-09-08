import { useForm } from "react-hook-form"
import {NavLink} from "react-router-dom"

const Login = () => {
    const {
    register,
    handleSubmit,
    setError,    
    formState: { errors, isSubmitting },
  } = useForm();


  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:5000/Login", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
  }

  return (
    <>
    <div className="flex justify-center mt-10">
  <NavLink
    to="/signup"
    className="w-64 text-center py-4 px-6 border-2 border-indigo-600 rounded-full bg-indigo-50 shadow-md text-xl font-semibold text-indigo-700 hover:bg-indigo-100 transition"
  >
    Register
  </NavLink>
</div>

<div className="flex justify-center items-center h-110 px-4 ">
  <form
    onSubmit={handleSubmit(onSubmit)}
    noValidate
    className="w-full max-w-md border border-gray-300 p-8 rounded-2xl shadow-xl bg-white"
  >
    <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Login</h1>

    <div className="flex flex-col gap-5">
      {/* Username */}
      <div>
        <input
          className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Username"
          {...register("username", {
            required: { value: true, message: "This field is required" },
            minLength: { value: 3, message: "Min length is 3" },
            maxLength: { value: 12, message: "Max length is 12" },
          })}
          type="text"
        />
        {errors.username && (
          <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <input
          className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Password"
          {...register("password", {
            minLength: { value: 7, message: "Min length of password is 7" },
          })}
          type="password"
        />
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <input
        disabled={isSubmitting}
        type="submit"
        value="Submit"
        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition"
      />

      {/* Additional Errors */}
      {errors.myform && (
        <p className="text-sm text-red-500 mt-2">{errors.myform.message}</p>
      )}
      {errors.blocked && (
        <p className="text-sm text-red-500 mt-2">{errors.blocked.message}</p>
      )}
    </div>
  </form>
</div>
    </>
  )
}

export default Login
