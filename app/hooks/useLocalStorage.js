import {useState} from "react";

export const useLocalStorage =(key,initialValue)=>{

    const [storedValue, setStoredValue] = useState(
        ()=>{
            if(typeof window === 'undefined'){
                return initialValue;
            }
            try{
                const item = localStorage.getItem(key);
                return item? JSON.parse(item):initialValue;
            }catch (e) {
                console.error(e);
                return initialValue;
            }
        }
    );
    
    const setValue = (value)=>{
        try {
            setStoredValue(value);
            if(typeof window !== 'undefined'){
                localStorage.setItem(key,JSON.stringify(value));
            }
        }catch (e) {
            console.error(e)
        }
    }

    const removeItem = (key)=>{
        try {
           localStorage.removeItem(key)
        }catch (e) {
            console.error(e)
        }
    }



    return [storedValue,setValue];

}