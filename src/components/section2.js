export const SectionAbout = () => {
    return (
        <>
            <div className="py-16 flex flex-col gap-12 bg-slate-50 md:py-24">

                <div className="flex justify-center">
                    <h1 className="bg-gray-200 text-gray-600 rounded-xl py-1 px-4">about me</h1>
                </div>


                <div className="flex flex-col items-center gap-12 md:flex-row">

                    <div className="md:grow md:basis-0">
                        <img src="/princess.jpeg" className="border border-black w-[280px] h-[360px] object-cover md:w-[400px] md:h-[480px] "></img>
                    </div>

                    <div className="flex flex-col gap-4 md:grow md:basis-0">

                        <h1 className="font-bold text-2xl text-center">Curious about me? Here you have it:</h1>

                        <div className="flex flex-col gap-4 text-gray-600">
                            <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                            <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                            <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                            <p>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                            <p>Finally, some quick bits about me.</p>
                            <p className="flex flex-col gap-2">
                                <span>B.E. in Computer Engineering</span>
                                <span>Full time freelancer</span>
                            </p>
                            <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}