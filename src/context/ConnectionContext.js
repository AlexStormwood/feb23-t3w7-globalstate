import { createContext } from "react"



export const defaultConnectionData = {
	url: "https://pokeapi.co/api/v2/pokemon/"
}

const ConnectionContext = createContext(defaultConnectionData);

export default ConnectionContext;