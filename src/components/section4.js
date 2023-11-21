import { Card } from "./card"

const data = [
    {
        Garchig: "Sr. Frontend Developer",
        Onsar: "Nov 2021 - Present",
        listuud: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Ut pretium arcu et massa semper, id fringilla leo semper.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ]
    },

    {
        Garchig: "Team Lead",
        Onsar: "Jul 2017 - Oct 2021",
        listuud: [
            "Ut pretium arcu et massa semper, id fringilla leo semper.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ]
    },

    {
        Garchig: "Full Stack Developer",
        Onsar: "Dec 2015 - May 2017",
        listuud: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ]
    },
]



export const SectionExperience = () => {
    return (
        <div className="bg-slate-50 flex flex-col gap-12 items-center py-24 ">

            <div className="flex flex-col gap-4 items-center">
                <h1 className="bg-gray-200 text-gray-600 rounded-xl py-1 px-4 w-fit">experience</h1>
                <p className="text-gray-600">Here is a quick summary of my most recent experiences:</p>
            </div>

            {data.map((item) => {
                return <Card
                    title={item.Garchig}
                    date={item.Onsar}
                    list={item.listuud}
                />
            })}


        </div>

    )
}