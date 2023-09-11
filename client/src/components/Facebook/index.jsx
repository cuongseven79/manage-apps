

import { useEffect, useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import icFacebook from '../../assets/icons/ic-facebook.svg'

function FacebookLogin({ className }) {
    const [profile, setProfile] = useState(null);
    console.log({ profile })
    return (
        <div>
            <LoginSocialFacebook
                appId="3342135516007200"
                cookie={true}
                xfbml={true}
                version='v17.0'
                onResolve={(response) => {
                    console.log(response.provider);
                    setProfile(response.data);
                }}
                onReject={(error) => {
                    console.log(error);
                }}>
                <div className="flex items-center">
                    <div className='flex items-center border p-1 px-3 rounded-[8px] gap-2 hover:bg-slate-400/20 cursor-pointer w-fit'>
                        <button type='button' className='border-none outline-none text-[15px]'>
                            Đăng nhập với Facebook
                        </button>
                        <span>
                            <img src={icFacebook} width={25} alt="" />
                        </span>
                    </div>
                </div>
            </LoginSocialFacebook>
        </div>
    );
}

export default FacebookLogin;
