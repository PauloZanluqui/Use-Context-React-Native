import { createContext, useState } from "react";

interface UserContextProps {
    loginName: string
    save: (user: string) => void
}

//contexto
export const UserContext = createContext<UserContextProps | undefined>(undefined);

//provider
export default function UserContextProvider({children}: any){

    const [loginName, setLoginName] = useState<string>("")
    const contextValue: UserContextProps = {loginName: loginName, save: saveLoginUserToCache};

    function saveLoginUserToCache(user: string){
        if(user != ""){
            setLoginName(user);
        }
    }

    return (
        <UserContext.Provider value ={contextValue} >
            {children}
        </UserContext.Provider>
    )
}