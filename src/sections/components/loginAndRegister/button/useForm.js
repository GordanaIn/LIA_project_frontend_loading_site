import {useState} from "react";

export const useForm=(initialVlaues)=>{
    const [values, setValues]=useState(initialVlaues);
    return [values,
        e=>{
            setValues({
                ...values,
                [e.target.name] : e.target.value
            });
        }
    ];
};