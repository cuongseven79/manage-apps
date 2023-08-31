import React, { useState } from 'react'
import axios from 'axios'

const LoginPage = () => {

  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [showCode, setShowCode] = useState(null);

  async function handleOnSubmit(e) {
    e.preventDefault();
    setShowCode(true)

    try {
      await axios.post("http://localhost:3001/login", {
        phone, code
      })
      setPhone('')
      setCode('')
    } catch (error) {
      console.log("ERR login", error)
    }
  }

  return (
    <form onSubmit={handleOnSubmit} className='text-center m-2' action='/login'>
      <div className={`${showCode ? "hidden" : ""}`}>
        <span>Phone:</span>
        <input type="text"
          placeholder='Please Enter your phone number.'
          className='border'
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div
        className={`${showCode ? "" : "hidden"}`}
      >
        <span>Code:</span>
        <input type="text"
          placeholder='Please Enter your phone Code.'
          className="border"
          onChange={(e) => setCode(e.target.value)}
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