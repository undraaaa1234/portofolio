export const Card = (props) => {
    return (

        <div className="w-full max-w-[800px] bg-white flex  p-8 rounded-xl gap-12">

            <header>
                <img src="logo-upwork.png"></img>
            </header>

            <div className="flex flex-col gap-4">

                <h1 className="font-bold">{props.title}</h1>

                <ul className="text-gray-600">
                    {props.list.map((item) => {
                        return <li className="list-disc">{item}</li>
                    })}
                </ul>

            </div>

            <p className="text-gray-600">{props.date}</p>

        </div>
    )
}