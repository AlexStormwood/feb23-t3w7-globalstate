import { useContext } from "react"
import { UserContext } from "./context/UserContext"


export default function UserDisplay(){

	let globalUserData = useContext(UserContext);

	return (
		<div>
			<h1>User JWT: {globalUserData.userData.jwt}</h1>
			<input 
			type="text" 
			name="" 
			id="" 
			value={globalUserData.userData.jwt} 
			onChange={(event) => globalUserData.setUserData({jwt: event.target.value})}   
			/>
			
		</div>
	)
}