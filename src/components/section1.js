import { GithubIcon } from "@/image/GithubIcon"
import { FigmaIcon } from "@/image/FigmaIcon"
import { TwitterIcon } from "@/image/twitterIcon"

export const Header = () => {
    return (
        <>
            <div className="border border-black flex py-24">

                <div className=" flex flex-col gap-8 grow basis-0">

                    <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-4xl">Hi, I’m Undraa 👋</h1>
                        <p className="text-gray-600">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-600">
                        <div className="flex gap-2">
                            <img src="/location.svg" className="w-6 h-6"></img>
                            <p>Ahmedabad, India</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/o.png" className="w-2 h-2 ml-2"></img>
                            <p>Available for new projects</p>
                        </div>
                    </div>

                    <div className="flex gap-1 item-center">
                        <GithubIcon />
                        <TwitterIcon />
                        <FigmaIcon />
                    </div>

                </div>

                <div className="grow basis-0 flex justify-center items-center">
                    <img src="/princess.jpeg" className="w-72 h-80 object-cover p-8 "></img>
                </div>

            </div>
        </>
    )
}