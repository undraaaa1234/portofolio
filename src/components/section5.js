import { Card2 } from "./card2"

const data = [
    {
        zurag: <img src="Picture.png"></img>,
        garchig: "Fiskil",
        murtuud: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        vgText: [
            "react",
            "next.js",
        ],

        icon: <img src="Icon.png"></img>,

    },

    {
        zurag: <img src="Picture.png"></img>,
        garchig: "Fiskil",
        murtuud: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        vgText: [
            "react",
            "next.js",
        ],

        icon: <img src="Icon.png"></img>,

    },

    {
        zurag: <img src="Picture.png"></img>,
        garchig: "Fiskil",
        murtuud: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        vgText: [
            "react",
            "next.js",
        ],

        icon: <img src="Icon.png"></img>,

    },
]

export const SectionWork = () => {
    return (
        <div className="py-16 flex flex-col md:py-24">

            <div className="flex flex-col gap-4 items-center">

                <h1 className="bg-gray-200 text-gray-600 rounded-xl py-1 px-4 w-fit">work</h1>

                <p className="text-gray-600">Some of the noteworthy projects I have built:</p>

            </div>





            <div className="flex flex-col gap-6 ">
                {data.map((item, index) => {
                    return <Card2
                        reverse={index % 2 === 1}
                        img={item.zurag}
                        title={item.garchig}
                        paragraph={item.murtuud}
                        words={item.vgText}
                        icon={item.icon}
                    />

                })}
            </div>

        </div>
    )
}