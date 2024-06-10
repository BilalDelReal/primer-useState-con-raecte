import {useState} from "react";

export function YoutubeSubCard({userName}) {
    const [isSuscribed, setIsSuscribed] = useState(false);
    const text = isSuscribed ? 'Suscrito' : 'Suscribirme'

    const btnClassName = isSuscribed ? 'bg-white h-max min-w-[130px] rounded-[18px] px-[16px] py-2 font-[500] isSuscribed ' : 'bg-white h-max min-w-[130px] rounded-[18px] px-[16px] py-2 font-[500] hover:bg-slate-200'



    const handleClick = () => {
        setIsSuscribed(!isSuscribed);
    }


    return (
        <div className="bg-black  py-6 px-4 rounded-2xl flex gap-x-5 items-center">
            <div>
                <img className="max-w-[60px] rounded-[50%]"
                     src={`https://unavatar.io/youtube/${userName}`}
                     alt="imagen del usuario midu"/>
            </div>
            <div className="text-white flex flex-col gap-y-0.5 justify-center mr-5">
                <span className="font-[500]">{userName}</span>
                <span className="text-sm">242k suscriptores</span>
            </div>
            <button className={btnClassName} onClick={handleClick}>{text}</button>
        </div>
    )
}