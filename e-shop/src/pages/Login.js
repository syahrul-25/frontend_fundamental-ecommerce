import React from "react";
import BaseAuth from "../components/auth/baseAuth";
import LoginForm from "../components/auth/loginForm";
import useFirebaseHooks from "../config/firebase/useFirebaseHooks";
import { auth } from "../config/firebase";

function Login() {
	const { login } = useFirebaseHooks(auth);
	return (
		<BaseAuth>
			<LoginForm login={login} />
		</BaseAuth>
	);
}

export default Login;
