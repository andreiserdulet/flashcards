import congrats from '../../assets/images/party.png'
import cry from '../../assets/images/fistbump.gif'
import React from "react";
import * as Styles from '../../styles/index';

interface IProps {
    score: number
}

const Congratulations = ({score}: IProps) => {
    return <Styles.Card>
        <div className="flex justify-center items-center mb-2">
            {score >= 5 ? (<img src={congrats} alt={'party'}/>) : (<img src={cry} alt={'party'}/>)}

        </div>
        <p className="text-center text-3xl">Your score was {score >= 5 ? score : `${score} don't give up!!!`}</p>
    </Styles.Card>
}
export default Congratulations;