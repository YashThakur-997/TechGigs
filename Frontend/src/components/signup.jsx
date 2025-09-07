import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

const signup = () => {
 const [form,setForm]= useState({
    name:"",
    email:"",
    password:"",
    phone:""
  })

  let getdata = (e) => {
    let inputname = e.target.name;
    let value = e.target.value;
    let Olddata = { ...form };
    Olddata[inputname] = value;
    setForm(Olddata);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/signup",form).then(()=>{
      console.log(form)
      console.log("signed up")
    })
  }

  return (
    <>
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100 px-4">
  <form onSubmit={handleSubmit} className="w-full max-w-md bg-white border border-gray-300 p-8 rounded-2xl shadow-2xl">
    <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Signup</h1>

    <div className="flex flex-col gap-5">
      {/* Name */}
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={getdata}
        name="name"
        className="bg-gray-100 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={getdata}
        name="email"
        className="bg-gray-100 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Phone */}
      <input
        type="tel"
        placeholder="Phone"
        value={form.phone}
        onChange={getdata}
        name="phone"
        className="bg-gray-100 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={getdata}
        name="password"
        className="bg-gray-100 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Submit Button */}
      <input
        type="submit"
        value="Submit"
        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition"
      />
    </div>
  </form>
</div>
    </>
  )
}

export default signup
