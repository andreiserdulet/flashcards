import React from "react";
interface IProps {
    answer: string,
}
export const ButtonBlue = ({answer}:IProps) =>{
    return (
        <>
            <button className='bg-blue-400 border-2 border-blue-500 text-white text-center transition ease-in-out delay-150 hover:bg-blue-300'>{answer}</button>
        </>
    )

}