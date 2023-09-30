import { useContext } from "react";
// import ConnectionContext from "./context/ConnectionContext";
import {ConnectionContext} from "./context/ConnectionContext";

export default function ApiTester(){

	
	let connectionData = useContext(ConnectionContext);

	return (
		<div>
			<h1>API URL: {connectionData.url}</h1>
		</div>
	)

}