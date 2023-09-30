import { useContext } from "react"
import { UserContext } from "./context/UserContext"


export default function UserDisplay(){

	// let globalUserData = useContext(UserContext);

	let {userData, userDataDispatch} = useContext(UserContext);

	return (
		<div>
			<h1>User JWT: {userData.jwt}</h1>
			<input 
			type="text" 
			name="" 
			id="" 
			value={userData.jwt} 
			// onChange={(event) => setUserData({jwt: event.target.value})}   
			onChange={(event) => userDataDispatch(
				{
					type:'setJwt',
					data: {
						jwt: event.target.value
					}
				}
				)}   
			/>
			
		</div>
	)
}