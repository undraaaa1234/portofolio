

export const Card2 = (props) => {
    return (
        <div className={` w-full flex flex-col items-center p-6 rounded-2xl shadow-lg gap-6 md:flex-row ${props.reverse ? "md:flex-row-reverse" : "md:flex-row"} md:gap-12  md:py-12 `}>





            <div className="w-full bg-slate-50 p-12 rounded-2xl md:w-1/2">{props.img}</div>





            <div className="w-full flex flex-col gap-6 md:w-1/2">

                <h1 className="font-bold">{props.title}</h1>

                <p className="text-gray-600">{props.paragraph}</p>

                <div className="flex gap-2">
                    {props.words.map((item) => {
                        return <p className="bg-gray-200 text-gray-600 rounded-xl py-1 px-4 w-fit" >{item}</p>
                    })}
                </div>

                <p>{props.icon}</p>
            </div>






        </div>
    )
}
