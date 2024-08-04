import profilePic from "../assets/RVinayak.jpeg"
const Hero = () => {
    return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1>Vinayak Jadhav</h1>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <img src={profilePic} alt="Vinayak Jadhav" />          
            </div>
        </div>
    </div>
}