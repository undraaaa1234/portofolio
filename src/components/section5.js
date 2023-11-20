import { Card2 } from "./card2"

export const SectionWork = () => {
    return (
        <div className="py-24 border border-black">

            <div className="flex flex-col gap-4 items-center">

                <h1 className="bg-gray-200 text-gray-600 rounded-xl py-1 px-4 w-fit">work</h1>

                <p className="text-gray-600">Some of the noteworthy projects I have built:</p>

            </div>

            <div>
                <Card2></Card2>
            </div>

        </div>
    )
}