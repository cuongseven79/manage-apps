import React, { useState } from 'react'




const LoginPage = () => {

  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [showCode, setShowCode] = useState(null);


  function handleOnChangePhone(e) {
    e.preventDefault();
    setPhone(e.target.value)
  }
  function handleOnChangeCode(e) {
    e.preventDefault();
    setCode(e.target.value)

  }
  function handleOnSubmit(e) {
    e.preventDefault();
    setShowCode(true)

    console.log(code, phone)
  }


  return (
    <form onSubmit={handleOnSubmit} className='text-center m-2'>
      <div className={`${showCode ? "hidden" : ""}`}>
        <span>Phone:</span>
        <input type="text"
          placeholder='Please Enter your phone number.'
          className='border'
          onChange={handleOnChangePhone}
        />
      </div>
      <div
        className={`${showCode ? "" : "hidden"}`}
      >
        <span>Code:</span>
        <input type="text"
          placeholder='Please Enter your phone Code.'
          className="border"
          onChange={handleOnChangeCode}
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