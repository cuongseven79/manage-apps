import React, { useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookLoginComponent = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const FB = window.FB;


    useEffect(() => {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '3342135516007200',
                cookie: true,
                xfbml: true,
                version: 'v17.0',
            });

            FB.getLoginStatus(function (response) {
                statusChangeCallback(response);
            });
        };
    }, []);

    const statusChangeCallback = (response) => {
        if (response.status === 'connected') {
            testAPI();
        }
    };

    const checkLoginState = () => {
        FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
        });
    };

    const testAPI = () => {
        FB.api('/me', function (response) {
            setLoggedIn(true);
            setUserName(response.name);
        });
    };

    return (
        <div>
            <FacebookLogin
                scope="public_profile,email"
                onLogin={checkLoginState}
            />
            {loggedIn ? (
                <div>Thanks for logging in, {userName}!</div>
            ) : (
                <div>Please log into this webpage.</div>
            )}
        </div>
    );
};

export default FacebookLoginComponent;
