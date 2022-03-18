import React from 'react';
import { Context } from '../context/Authentication';
function useToken() {
	const ctx = React.useContext(Context);
	return [ctx.state, ctx.setState];
}
export default useToken;