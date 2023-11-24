import { GithubIcon } from "@/image/GithubIcon"
import { TwitterIcon } from "@/image/TwitterIcon"
import { FigmaIcon } from "@/image/FigmaIcon"

export const SectionInformation = () => {
    return (
        <div className="w-full flex flex-col gap-12 py-16 items-center md:py-24 ">

            <div className="w-full  flex flex-col gap-4 items-center">

                <h1 className="bg-gray-200 text-gray-600 rounded-xl py-1 px-4 w-fit">get in touch</h1>

                <p className="text-gray-600 text-center">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>

            </div>

            <div className=" w-full flex flex-col items-center">

                <div className="flex gap-4 md:gap-6">
                    <img src="message.png" className="w-6 h-6 md:w-8 md:h-8"></img>
                    <h1 className="font-bold md:text-3xl">reachsagarshah@gmail.com</h1>
                    <img src="icon Button.png" className="w-6 h-6 md:w-8 md:h-8"></img>
                </div>

                <div className="flex gap-4 md:gap-6">
                    <img src="Iconphone.png" className="w-6 h-6 md:w-8 md:h-8"></img>
                    <h1 className="font-bold md:text-3xl">+91 8980500565</h1>
                    <img src="icon Button.png" className="w-6 h-6 md:w-8 md:h-8"></img>
                </div>

            </div>

            <div className=" w-full flex flex-col items-center gap-1">

                <h1 className="text-gray-600">You may also find me on these platforms!</h1>

                <div className="flex">
                    <GithubIcon />
                    <TwitterIcon />
                    <FigmaIcon />
                </div>

            </div>


        </div>
    )
}