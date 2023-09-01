import React, { useRef, useState } from 'react'
import axios from 'axios'
const LoginPage = () => {

  const [showCode, setShowCode] = useState(null);
  const inputPhoneRef = useRef(null)
  const inputCodeRef = useRef(null)
  async function handleOnSubmit(e) {
    e.preventDefault();
    const phoneEntered = inputPhoneRef.current?.value
    const codeEntered = inputCodeRef.current?.value
    setShowCode(true)
    try {
      await axios.post("http://localhost:3001/login", {
        codeEntered, phoneEntered
      })
        .then(res => {
          console.log(res.data)
          let { messages, phoneNumber } = res.data
          if (messages && phoneNumber) {
            localStorage.setItem("phoneNumber", phoneNumber)
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
      <div className={`${showCode ? "hidden" : ""}`}>
        <span>Phone:</span>
        <input type="text"
          placeholder='Please Enter your phone number.'
          className='border'
          ref={inputPhoneRef}
        />
      </div>
      <div className={`${showCode ? "" : "hidden"}`}>
        <span>Code:</span>
        <input type="text"
          placeholder='Please Enter your phone Code.'
          className="border"
          ref={inputCodeRef}
        />
      </div>
      <button type='submit'
        className='bg-black-500 outline'
      >
        Enter
      </button>
    </form>
  )
}

export default LoginPage