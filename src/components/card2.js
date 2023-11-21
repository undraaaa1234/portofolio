

export const Card2 = (props) => {
    return (
        <div className={`flex ${props.reverse ? "flex-row-reverse" : "flex-row"} gap-12 py-12 my-12  rounded-2xl w-full shadow-lg`}>

            <div className="w-1/2 bg-slate-50 p-12 rounded-2xl">{props.img}</div>

            <div className="w-1/2 flex flex-col gap-6">

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