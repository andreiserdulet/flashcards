import React, {ReactNode} from "react";
import {motion} from "framer-motion";

interface IProps {
    children: ReactNode,
}

export const Styles = (props: IProps) => {
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gray-800 overflow-hidden" >
            {props.children}
        </div>
    )
}
export const Card = (props: IProps) => {
    return (
        <motion.div
            drag
            dragTransition={{
                min: 0,
                max: 100,
                bounceStiffness: 100
            }}
            className="md:w-4/12 sm:w-9/12/ bg-amber-50 shadow-2xl shadow-zinc-800 rounded py-2">
            {props.children}
        </motion.div>
    )
}

export const ButtonContainer = (props: IProps) => {
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-40 text-center px-1">
            {props.children}
        </div>
    )
}

export const ImgContainer = (props: IProps) => {
    return (
        <div className="flex justify-center items-center h-64 py-5 px-5 shadow shadow-zinc-800 mb-2 " >
            {props.children}
        </div>
    )
}
export const QuestionContainer = (props: IProps) =>{
    return (
        <div className="flex justify-center items-center py-5 px-5 h-32 text">
            <p className="text-3xl text-stone-800 text-center border-b border-blue-500 sm:w">
                {props.children}
            </p>
        </div>
    )
}