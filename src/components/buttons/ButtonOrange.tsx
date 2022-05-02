import React from "react";
interface IProps {
    answer: string,
}
export const ButtonOrange = ({answer}:IProps) =>{
    return (
        <>
            <button className='bg-orange-400 border-2 border-orange-500 text-white text-center transition ease-in-out delay-150 hover:bg-orange-300'>{answer}</button>
        </>
    )

}