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
        <div className=" flex flex-col gap-6 py-16 md:py-24">

            <div className="flex flex-col gap-4 items-center">
                <h1 className="bg-gray-200 text-gray-600 rounded-xl py-1 px-4 w-fit">skills</h1>
                <p className="text-gray-600 text-center">Here is a quick summary of my most recent experiences:</p>
            </div>

            <div className="flex flex-wrap ">

                {data.map((item) => {
                    return (
                        <div className="w-[calc(100%/3)] flex justify-center sm:w-[20%] lg:w-[12.5%] pb-4">
                            <div className="flex flex-col gap-1">
                                <p className="object-cover">{item.img}</p>
                                <p className="text-gray-600">{item.name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>



        </div>
    )
}