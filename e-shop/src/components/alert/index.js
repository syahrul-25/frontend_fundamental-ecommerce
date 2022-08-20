import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			removeAlert();
		}, 3000);
		return () => clearTimeout(timeout);
	}, [msg, removeAlert]);
	return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
