import { createContext, useState } from "react"


let defaultUserData = {
	jwt: ''
}

export const UserContext = createContext(defaultUserData);

export default function UserGlobalData(props){

	let [userData, setUserData] = useState(defaultUserData);

	return (
		<UserContext.Provider value={{userData: userData, setUserData: setUserData}}>
			{props.children}
		</UserContext.Provider>
	)
}