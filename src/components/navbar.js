
export const NavBar = () => {

    return (
        <>
            <div className=" flex md:bg-white justify-between py-4 items-center">
                <h1 className="font-bold">SS</h1>

                <div className="flex hidden md:block md:flex">
                    <div className="flex gap-3 pr-4  items-center text-gray-600">
                        <p>about</p>
                        <p>work</p>
                        <p>testimonials</p>
                        <p>contact</p>
                    </div>
                    <div className="flex gap-3 border-l pl-4 items-center">
                        <img src="/moon-solid.svg" className="w-6 h-6"></img>
                        <button className="bg-black text-white p-2 rounded">download cv</button>
                    </div>
                </div>

                <div className="md:hidden">
                    <img src="3.png"></img>
                </div>

            </div>


        </>
    )
}
