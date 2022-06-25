import React, { createContext, useState } from 'react'
export const GlobalContext = createContext();

/** Read the bwelo url for more on gl;lobal avr and function passing
 * https://medium.com/nerd-for-tech/get-global-variables-in-react-js-490cf68f2a73
 */
const GlobalContextProvider = (props) => {
    //const [variableOne, setVariableOne] = useState('somethingRandom')
    const Url = "http://localhost:3000"
    const variableOne = "var--";
    return (
         <GlobalContext.Provider 
            value={{
                variableOne,
                Url
             }}>
               {props.children}
         </GlobalContext.Provider>
    )
}
export default GlobalContextProvider