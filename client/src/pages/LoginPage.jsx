import React, { useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import FacebookLoginComponent from '../components/Facebook/index';
const LoginPage = () => {
  console.log("LoginPage")
  const [showCode, setShowCode] = useState(null);
  const inputPhoneRef = useRef(null)
  const inputCodeRef = useRef(null)
  const navigate = useNavigate();

  async function handleOnSubmit(e) {
    e.preventDefault();
    const phoneEntered = inputPhoneRef.current?.value
    const codeEntered = inputCodeRef.current?.value
    setShowCode(true)
    try {
      await axios.post("http://localhost:3001/", {
        codeEntered, phoneEntered
      })
        .then(res => {
          console.log(res.data)
          let { messages, phoneNumber } = res.data
          if (messages && phoneNumber) {
            navigate("/dashboard")
            localStorage.setItem("phoneNumber", phoneNumber)
          } else {
            localStorage.removeItem("phoneNumber", phoneNumber)
          }
        }).catch(error => {
          console.log(error)
        })
    } catch (error) {
      console.log("ERR login", error)
    }
  }

  return (
    <form onSubmit={handleOnSubmit} className='text-center mt-32'>
      <div className={`${showCode ? "hidden" : ""} `}>
        <span>Enter Phone:</span>
        <input type="text"
          placeholder='Please Enter your phone number.'
          className='border p-2 rounded-md'
          ref={inputPhoneRef}
        />
      </div>
      <div className={`${showCode ? "" : "hidden"}`}>
        <span>Enter your Code:</span>
        <input type="text"
          placeholder='Please Enter your phone Code.'
          className="border"
          ref={inputCodeRef}
        />
      </div>
      <button type='submit'
        className='bg-black-500 outline border-none outline-none bg-blue-400 p-1 px-4 rounded mt-2'
      >
        Enter
      </button>
      <FacebookLoginComponent />

    </form>
  )
}

export default LoginPage