import React, { useState } from 'react';
;
const useFieldEditor = (className,type="text",initialValue="",checkbox=false) => {
    let [value,setValue] = useState(initialValue);
    let inputField
    if(checkbox){
        inputField = <input type={type} className={className} onChange={(event)=>{setValue(event.target.checked)}} checked={value}/>
    }else{
        inputField = <input type={type} className={className} onChange={(event)=>setValue(event.target.value)} value={value} />
    }
    
    return {
        value,inputField
    }

}

export default useFieldEditor;