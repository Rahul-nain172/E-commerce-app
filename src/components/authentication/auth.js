import React from 'react';
import { Signinup } from "./sign_in_up";
import CustomAuth from "./authcontext";

const Auth = () => {
    return (
        <CustomAuth>
            <Signinup/>
        </CustomAuth>
    );
};
export default Auth;