import React, { useState } from 'react';
import getConfig from "/public/paylink.config.json";

const ConfigCtx = React.createContext({})
export const ConfigEdit = ({children}) => {


    const [form,setForm]=useState()
    const [Config, setConfig] = useState({...getConfig});
    //console.log();
    return(<ConfigCtx.Provider value={{Config, setConfig,form,setForm}}>
        {children}
    </ConfigCtx.Provider>
)
}
 
export default ConfigCtx;