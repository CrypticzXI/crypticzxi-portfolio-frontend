
const Footer = ({ properties }) => {
    return (
        <div className="bg-SecondryBackground xl:h-24 h-36 text-Text flex flex-col md:flex-row font-poppins items-center">

            <div className="w-full h-full flex flex-col xl:flex-row items-center text-center py-4 px-10 space-x-5 justify-center">

                <div className=" w-full xl:h-full mb-2 xl:mb-0 flex flex-col items-center justify-center text-[15px]">
                    <h2>Website made by <span className="font-[600]">CrypticzXI</span></h2>
                    <h2>Made with ❤️ in the United Kingdom.</h2>
                </div>
                
                <div className="w-full xl:h-full flex flex-col items-center justify-center">
                    <div className="space-x-4 mt-2 flex">
                        <a href="https://github.com/CrypticzXI/" className="bg-Background border-2 border-FirstColour transition-all hover:scale-[1.2] w-10 h-10 flex rounded-full text-Text items-center justify-center">
                            <img className="h-auto w-5" src="https://cdn.sanity.io/images/4i4gqgxn/production/1a7289cf993080298ddeeb6e6aa1666e8080d9d0-501x501.png" />
                        </a>
                        <a href="https://twitter.com/CrypticzXI" className="bg-Background border-2 border-FirstColour transition-all hover:scale-[1.2] w-10 h-10 flex rounded-full text-Text items-center justify-center">
                            <img className="h-auto w-5" src="https://cdn.sanity.io/images/4i4gqgxn/production/0c3190dd2f05b85e4506627ad142e07b1ad91abb-501x501.png" />
                        </a>
                        <a href="https://discord.gg/S8XFHC5wqM" className="bg-Background border-2 border-FirstColour transition-all hover:scale-[1.2] w-10 h-10 flex rounded-full text-Text items-center justify-center">
                            <img className="h-auto w-5" src="https://cdn.sanity.io/images/4i4gqgxn/production/3a002f10c7cfea08f0a84c28bd8ca497981f537e-71x55.svg" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCRLZVGvyWy4Y4YOgR020rOw" className="bg-Background border-2 border-FirstColour transition-all hover:scale-[1.2] w-10 h-10 flex rounded-full text-Text items-center justify-center">
                            <img className="h-auto w-5" src="https://cdn.sanity.io/images/4i4gqgxn/production/25b0ea9aa7467e6d988c0093070d56c3f5942f90-547x385.png" />
                        </a>
                    </div>

                </div>

                {/* Please Don't Change or edit this. I've gave you this website for free. The least you could do is let me have this. */}
                
            </div>


            
        </div>
    )
}

export default Footer
