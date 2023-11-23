const data = [
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },
    {
        img: <img src="icon-javscript.png"></img>,
        name: "javascript",
    },

]

export const SectionSkills = () => {
    return (
        <div className="border border-black py-24 flex flex-col gap-12">

            <div className="flex flex-col gap-4 items-center">
                <h1 className="bg-gray-200 text-gray-600 rounded-xl py-1 px-4 w-fit">skills</h1>
                <p className="text-gray-600">Here is a quick summary of my most recent experiences:</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">

                {data.map((item) => {
                    return (

                        <div className="w-[12.5%] flex justify-center ">
                            <div className="flex flex-col gap-4">
                                <p>{item.img}</p>
                                <p className="text-gray-600">{item.name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>



        </div>
    )
}