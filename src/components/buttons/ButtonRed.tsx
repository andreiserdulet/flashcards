import {dummy_data} from "../../dummy_data";
import React from "react";
interface IProps {
    answer: string,
}
export const ButtonRed = ({answer}:IProps) =>{
    return (
        <>
            <button className='bg-red-400 border-2 border-red-500 text-white text-center transition ease-in-out delay-150 hover:bg-red-300'>{answer}</button>
        </>
    )

}