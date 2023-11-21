import { GithubIcon } from "@/image/GithubIcon"
import { TwitterIcon } from "@/image/TwitterIcon"
import { FigmaIcon } from "@/image/FigmaIcon"

export const SectionInformation = () => {
    return (
        <div className="flex flex-col gap-12 py-24 items-center">

            <div className="flex flex-col gap-4 items-center max-w-[576px]">

                <h1 className="bg-gray-200 text-gray-600 rounded-xl py-1 px-4 w-fit">get in touch</h1>

                <p className="text-gray-600 ">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>

            </div>

            <div className=" flex flex-col items-center">

                <div className="flex gap-6">
                    <img src="message.png"></img>
                    <h1 className="font-bold text-3xl">reachsagarshah@gmail.com</h1>
                    <img src="icon Button.png"></img>
                </div>

                <div className="flex gap-6">
                    <img src="Iconphone.png"></img>
                    <h1 className="font-bold text-3xl">+91 8980500565</h1>
                    <img src="icon Button.png"></img>
                </div>

            </div>

            <div className="flex flex-col items-center gap-1">

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