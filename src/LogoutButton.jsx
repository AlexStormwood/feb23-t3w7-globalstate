import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export default function LogoutButton(){

	let {userDataDispatch} = useContext(UserContext);

	return (
		<button onClick={() => {
			userDataDispatch({type:'logout'})
		}}>
			Log out
		</button>
	)

}