import React from "react";
interface IProps {
    answer: string,
}
export const ButtonGreen = ({answer}:IProps) =>{
    return (
        <>
            <button className='bg-green-400 border-2 border-green-500 text-white text-center transition ease-in-out delay-150 hover:bg-green-300'>{answer}</button>
        </>
    )

}