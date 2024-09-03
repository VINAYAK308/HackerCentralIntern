// import profilePic from "../assets/RVinayak.jpeg"
// const Hero = () => {
//     return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//         <div className="flex flex-wrap">
//             <div className="w-full lg:w-1/2">
//                 <div className="flex flex-col items-center lg:items-start">
//                     <h1>Vinayak Jadhav</h1>
//                 </div>
//             </div>
//         </div>
//         <div className="w-full lg:w-1/2 lg:p-8">
//             <div className="flex justify-center">
//                 <img src={profilePic} alt="Vinayak Jadhav" />          
//             </div>
//         </div>
//     </div>
// }import React from 'react'
// import {motion} from "framer-motion";
// import home from "../assets/Homeimg.webp";
// import logo1 from "../assets/Logo-1.webp"
// import logo2 from "../assets/Logo-2.webp"
// import logo3 from "../assets/Logo-3.webp"
// import logo4 from "../assets/Logo-4.webp"
// const iconVariants = (duration) => ({
//   initial:{y:-10},
//   animate: {
//       y:[10,-20],
//       transition:{
//           duration: 2 ,
//           ease:"linear",
//           repeat: Infinity,
//           repeatType:"reverse"
//       }
//   }
// })

// const Home = () => {
//     return (
//       <div className="border-b border-neutral-900 pb-4 lg:mb-35 ml-">
//           <div className="flex flex-wrap">
//               <div className="w-full lg:w-full">
//               <motion.div className="flex flex-col items-center justify-center text-center lg:items-start">
//                    <motion.h1 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className=" text-8xl font-bold items-center text-center tracking-tight text-white lg:mt-16 lg:text-7xl lg:mx-8 mt-8 lg:ml-[260px]">Welcome to Secure Lab</motion.h1> 
//                    <br></br>
//                    <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="lg:ml-[500px] font-bold text-2xl text-white">By Hacker Central</motion.p>
//                    <div className="flex mt-6 space-x-4 lg:ml-[420px]">
//                   <button className="bg-blue-600 text-white py-2 px-5 font-normal rounded-lg  hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">Explore Learning Path</button>
//                   <button className="bg-blue-900 text-white py-2 px-4 rounded-lg font-normal hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">View Dashboard</button>
//               </div>
//               </motion.div>
//               <br></br>
//               <br></br>
//               <br></br> <br></br>
//               <br></br> 
//               <div className="w-full lg:w-full lg:p-8">
                  


                
                

//                 <div className="flex justify-center lg:m-{150px} ">

                  

//                   <motion.img variants={iconVariants(4)} initial="initial"
//             animate="animate"  src={home}  style={{ width: "900px", height: "auto" }} className="border-2 border-purple-500" alt="" />
//                 </div>
//               </div>
//               <div className="border-b border-neutral-800 pb-24 " >
//         <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="my-20 text-center text-2xl text-white font-normal  ">Built for all platforms and sites</motion.h2>
//         <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}}className="flex flex-wrap items-center justify-center gap-4">
//             <motion.div
//             variants={iconVariants(2.5)} initial="initial"
//             animate="animate" className="rounded-2xl  filter invert brightness-800 p-4">
//               <img src={logo1} style={{width:"90px", height:"auto"}} alt="" />
                
//             </motion.div>
//              <motion.div variants={iconVariants(3)} initial="initial"
//             animate="animate" className="rounded-2xl  filter invert brightness-800  p-4">
//               <img src={logo2} style={{width:"90px", height:"auto"}} alt="" />
                
//             </motion.div>
//             <motion.div variants={iconVariants(5)} initial="initial"
//             animate="animate" className="rounded-2xl  filter invert brightness-800 p-4">
//               <img src={logo3} style={{width:"90px", height:"auto"}} alt="" />
               
//             </motion.div>
//             <motion.div variants={iconVariants(2)} initial="initial"
//             animate="animate" className="rounded-2xl  filter invert brightness-800 p-4">
//                <img src={logo4} style={{width:"90px", height:"auto"}}  alt="" />
                
//             </motion.div>
            
          




//         </motion.div>

//     </div>

              
  
//               </div>
//           </div>
        
//       </div>
//     )
//   }
  
//   export default Home
  

// import { motion } from "framer-motion";
// import home from "../assets/Homeimg.webp";
// import logo1 from "../assets/Logo-1.webp";
// import logo2 from "../assets/Logo-2.webp";
// import logo3 from "../assets/Logo-3.webp";
// import logo4 from "../assets/Logo-4.webp";
// import smartimg from "./assets/Smart-Image.webp";

// const iconVariants = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -20],
//     transition: {
//       duration: 2,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });

// const Home = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//       <div className="flex flex-wrap">
//         <div className="w-full lg:w-full">
//           <motion.div className="flex flex-col items-center justify-center text-center lg:items-start">
//             <motion.h1
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1.5 }}
//               className="text-8xl font-bold items-center text-center tracking-tight text-white lg:mt-16 lg:text-7xl lg:mx-8 mt-8 lg:ml-[260px]"
//             >
//               Welcome to Secure Lab
//             </motion.h1>
//             <br />
//             <motion.p
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1.5 }}
//               className="lg:ml-[500px] font-bold text-2xl text-white"
//             >
//               By Hacker Central
//             </motion.p>
//             <div className="flex mt-6 space-x-4 lg:ml-[420px]">
//               <button className="bg-blue-600 text-white py-2 px-5 font-normal rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
//                 Explore Learning Path
//               </button>
//               <button className="bg-blue-900 text-white py-2 px-4 rounded-lg font-normal hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
//                 View Dashboard
//               </button>
//             </div>
//           </motion.div>
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <div className="w-full lg:w-full lg:p-8">
//             <div className="flex justify-center lg:m-{150px}">
//               <motion.img
//                 variants={iconVariants(4)}
//                 initial="initial"
//                 animate="animate"
//                 src={home}
//                 style={{ width: "900px", height: "auto" }}
//                 className="border-2 border-purple-500"
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="border-b border-neutral-800 pb-24">
//             <motion.h2
//               whileInView={{ opacity: 1, y: 0 }}
//               initial={{ opacity: 0, y: -100 }}
//               transition={{ duration: 1.5 }}
//               className="my-20 text-center text-2xl text-white font-normal"
//             >
//               Built for all platforms and sites
//             </motion.h2>
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1.5 }}
//               className="flex flex-wrap items-center justify-center gap-4"
//             >
//               <motion.div
//                 variants={iconVariants(2.5)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl filter invert brightness-800 p-4"
//               >
//                 <img src={logo1} style={{ width: "90px", height: "auto" }} alt="" />
//               </motion.div>
//               <motion.div
//                 variants={iconVariants(3)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl filter invert brightness-800 p-4"
//               >
//                 <img src={logo2} style={{ width: "90px", height: "auto" }} alt="" />
//               </motion.div>
//               <motion.div
//                 variants={iconVariants(5)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl filter invert brightness-800 p-4"
//               >
//                 <img src={logo3} style={{ width: "90px", height: "auto" }} alt="" />
//               </motion.div>
//               <motion.div
//                 variants={iconVariants(2)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl filter invert brightness-800 p-4"
//               >
//                 <img src={logo4} style={{ width: "90px", height: "auto" }} alt="" />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* New Content Below */}
//       <div className="flex flex-wrap justify-center mt-10 ml-4">
//         <div className="w-full lg:w-1/2 border-2 border-purple-500 p-4">
//           <h1 className="text-3xl font-bold text-white">Learning Paths</h1>
//           <p className="text-white mt-4">
//             Become a Cyber Security professional and launch your dream career. Obtain
//             universally accepted blockchain verified certification and master in-demand
//             cyber skills.
//           </p>
//         </div>
//         <div className="w-full lg:w-1/2 p-4">
//         <h1 className="text-3xl font-bold border-2 border-purple-500 text-white">Learning Paths</h1>
//         <img src={smartimg} style={{ width: "90px", height: "auto" }} alt="" />

//           {/* Add additional content here if needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import { motion } from "framer-motion";
// import home from "../assets/Homeimg.webp";
// import logo1 from "../assets/Logo-1.webp";
// import logo2 from "../assets/Logo-2.webp";
// import logo3 from "../assets/Logo-3.webp";
// import logo4 from "../assets/Logo-4.webp";
// import smartimg from "../assets/Smart-Image-1.webp"; // Corrected path
// import BLogo1 from "../assets/BLogo.webp";
// import BLogo2 from "../assets/BLogo1.webp";
// import BLogo3 from "../assets/BLogo2.webp";
// import BLogo4 from "../assets/BLogo3.webp";


// const iconVariants = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -20],
//     transition: {
//       duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });

// const Home = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//       <div className="flex flex-wrap">
//         <div className="w-full lg:w-full">
//           <motion.div className="flex flex-col items-center justify-center text-center lg:items-start">
//             <motion.h1
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1.5 }}
//               className="text-8xl font-bold items-center text-center tracking-tight text-white lg:mt-16 lg:text-7xl lg:mx-8 mt-8 lg:ml-[260px]"
//             >
//               Welcome to Secure Lab
//             </motion.h1>
//             <br />
//             <motion.p
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1.5 }}
//               className="lg:ml-[500px] font-bold text-2xl text-white"
//             >
//               By Hacker Central
//             </motion.p>
//             <div className="flex mt-6 space-x-4 lg:ml-[420px]">
//               <button className="bg-blue-600 text-white py-2 px-5 font-normal rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
//                 Explore Learning Path
//               </button>
//               <button className="bg-blue-900 text-white py-2 px-4 rounded-lg font-normal hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
//                 View Dashboard
//               </button>
//             </div>
//           </motion.div>
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <div className="w-full lg:w-full lg:p-8">
//             <div className="flex justify-center lg:mt-36"> {/* Corrected class name */}
//               <motion.img
//                 variants={iconVariants(4)}
//                 initial="initial"
//                 animate="animate"
//                 src={home}
//                 style={{ width: "900px", height: "auto" }}
//                 className="border-2 border-purple-500"
//                 alt="Home"
//               />
//             </div>
//           </div>
//           <div className="border-b border-neutral-800 pb-24">
//             <motion.h2
//               whileInView={{ opacity: 1, y: 0 }}
//               initial={{ opacity: 0, y: -100 }}
//               transition={{ duration: 1.5 }}
//               className="my-20 text-center text-2xl text-white font-normal"
//             >
//               Built for all platforms and sites
//             </motion.h2>
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1.5 }}
//               className="flex flex-wrap items-center justify-center gap-4"
//             >
//               <motion.div
//                 variants={iconVariants(2.5)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl filter invert brightness-800 p-4"
//               >
//                 <img src={logo1} style={{ width: "90px", height: "auto" }} alt="Logo 1" />
//               </motion.div>
//               <motion.div
//                 variants={iconVariants(3)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl filter invert brightness-800 p-4"
//               >
//                 <img src={logo2} style={{ width: "90px", height: "auto" }} alt="Logo 2" />
//               </motion.div>
//               <motion.div
//                 variants={iconVariants(5)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl filter invert brightness-800 p-4"
//               >
//                 <img src={logo3} style={{ width: "90px", height: "auto" }} alt="Logo 3" />
//               </motion.div>
//               <motion.div
//                 variants={iconVariants(2)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl filter invert brightness-800 p-4"
//               >
//                 <img src={logo4} style={{ width: "90px", height: "auto" }} alt="Logo 4" />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* New Content Below */}
//       <div className="flex flex-wrap justify-center mt-10 ml-4 ">
//         <div className="w-full lg:w-1/2 border-2 rounded-2xl border-purple-500 p-4 gap-2">
//           <h1 className="text-3xl font-bold text-purple-300">Learning Paths</h1>
//           <p className="text-white font-normal mt-4 ">
//             Become a Cyber Security professional and launch your dream career. Obtain
//             universally accepted blockchain verified certification and master in-demand
//             cyber skills.
//           </p>
//           <br></br>
//           <img src={smartimg} style={{ width: "420px", height: "auto" }} className="ml-10 justify-center"alt="Smart Image" />
//         </div>
//         <div className="w-full lg:w-1/2 p-4 border-2 rounded-2xl  border-purple-500">
//           <h1 className="text-3xl font-bold  text-white  text-purple-300">Blue Team Operations (Coming Soon)</h1>
//           <p className="text-white font-normal mt-4">
//           Gain expertise in cutting-edge cyber defense techniques, with hands-on exposure to ethical hacking using international cyber simulators.
//           </p>
//           <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1.5 }}
//               className="flex flex-wrap items-center justify-center gap-4"
//             >
//               <motion.div
//                 variants={iconVariants(2.5)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl filter invert brightness-800 p-4"
//               >
//                 <img src={BLogo1} style={{ width: "60px", height: "auto" }} alt="Logo 1" />
//               </motion.div>
//               <motion.div
//                 variants={iconVariants(3)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl filter invert brightness-800 p-4"
//               >
//                 <img src={BLogo2} style={{ width: "60px", height: "auto" }} alt="Logo 2" />
//               </motion.div>
//               <motion.div
//                 variants={iconVariants(5)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl filter invert brightness-800 p-4"
//               >
//                 <img src={BLogo3} style={{ width: "60px", height: "auto" }} alt="Logo 3" />
//               </motion.div>
//               <motion.div
//                 variants={iconVariants(2)}
//                 initial="initial"
//                 animate="animate"
//                 className="rounded-2xl filter invert brightness-800 p-4"
//               >
//                 <img src={BLogo4} style={{ width: "60px", height: "auto" }} alt="Logo 4" />
//               </motion.div>
//             </motion.div>

//           {/* <img src={smartimg} style={{ width: "90px", height: "auto" }} alt="Smart Image" /> */}

//           {/* Add additional content here if needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { motion } from "framer-motion";
import home from "../assets/Homeimg.webp";
import logo1 from "../assets/Logo-1.webp";
import logo2 from "../assets/Logo-2.webp";
import logo3 from "../assets/Logo-3.webp";
import logo4 from "../assets/Logo-4.webp";
import smartimg from "../assets/Smart-Image-1.webp"; // Corrected path
import BLogo1 from "/Users/trushantramdasjadhav/Desktop/React-Portfolio/src/assets/BLogo.webp";
import BLogo2 from "/Users/trushantramdasjadhav/Desktop/React-Portfolio/src/assets/BLogo2.webp";
import BLogo3 from "/Users/trushantramdasjadhav/Desktop/React-Portfolio/src/assets/BLogo3.webp";
import BLogo4 from "/Users/trushantramdasjadhav/Desktop/React-Portfolio/src/assets/BLogo4.webp";
import detectimg from "../assets/Detect-Image.webp"; 
import Clogo1 from "/Users/trushantramdasjadhav/Desktop/React-Portfolio/src/assets/CLogo.png";
import Clogo2 from "/Users/trushantramdasjadhav/Desktop/React-Portfolio/src/assets/CLogo1.jpeg";
import Clogo3 from "/Users/trushantramdasjadhav/Desktop/React-Portfolio/src/assets/QRcode.jpg";
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -20],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const LogoAnimation = ({ src, alt, duration }) => (
  <motion.div
    variants={iconVariants(duration)}
    initial="initial"
    animate="animate"
    className="rounded-2xl filter invert brightness-800 p-4"
  >
    <img src={src} style={{ width: "90px", height: "auto" }} alt={alt} />
  </motion.div>
);

const Home = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-full">
          <motion.div className="flex flex-col items-center justify-center text-center lg:items-start">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="text-8xl font-bold items-center text-center tracking-tight text-white lg:mt-16 lg:text-7xl lg:mx-8 mt-8 lg:ml-[260px]"
            >
              Welcome to Secure Lab
            </motion.h1>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="lg:ml-[500px] font-bold text-2xl text-white"
            >
              By Hacker Central
            </motion.p>
            <div className="flex mt-6 space-x-4 lg:ml-[420px]">
              <button className="bg-blue-600 text-white py-2 px-5 font-normal rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
                Explore Learning Path
              </button>
              <button className="bg-blue-900 text-white py-2 px-4 rounded-lg font-normal hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
                View Dashboard
              </button>
            </div>
          </motion.div>
          <div className="w-full lg:w-full lg:p-8">
            <div className="flex justify-center lg:mt-36">
              <motion.img
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                src={home}
                style={{ width: "900px", height: "auto" }}
                className="border-2 border-purple-500"
                alt="Home"
              />
            </div>
          </div>
          <div className="border-b border-neutral-800 pb-24">
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              className="my-20 text-center text-2xl text-white font-normal"
            >
              Built for all platforms and sites
            </motion.h2>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <LogoAnimation src={logo1} alt="Logo 1" duration={2.5} />
              <LogoAnimation src={logo2} alt="Logo 2" duration={3} />
              <LogoAnimation src={logo3} alt="Logo 3" duration={5} />
              <LogoAnimation src={logo4} alt="Logo 4" duration={2} />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-10 ml-4 mr-4 ">
        <div className="w-full lg:w-1/2 border-b border-t rounded-2xl border-purple-400 p-4 gap-2">
          <h1 className="text-3xl font-bold text-purple-300">Learning Paths</h1>
          <p className="text-white font-normal mt-4">
            Become a Cyber Security professional and launch your dream career. Obtain
            universally accepted blockchain verified certification and master in-demand
            cyber skills.
          </p>
          <br></br>
          <br></br>
          <img
            src={smartimg}
            style={{ width: "460px", height: "auto" }}
            className="ml-4 justify-center mr-9 transition-transform duration-500 ease-in-out hover:scale-110 "
            alt="Smart Image"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4 border-b border-t rounded-2xl border-purple-400">
          <h1 className="text-3xl font-bold text-purple-300">Blue Team Operations (Coming Soon)</h1>
          <p className="text-white font-normal mt-4">
            Gain expertise in cutting-edge cyber defense techniques, with hands-on exposure to ethical hacking using international cyber simulators.
          </p>
          {/* <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <LogoAnimation src={BLogo1} alt="Logo 1" duration={2.5} />
            <LogoAnimation src={BLogo2} alt="Logo 2" duration={3} />
            <LogoAnimation src={BLogo3} alt="Logo 3" duration={5} />
            <LogoAnimation src={BLogo4} alt="Logo 4" duration={2} />
          </motion.div> */}
           <br></br>
          <h1 className="text-3xl font-bold text-purple-300">Penetration Tester</h1>
          <p className="text-white font-normal mt-4">
          Become a versatile professional who integrates governance, strategy, performance, risk, compliance, ethics, security, privacy, and audit to achieve Principled Performance.          </p>
           
          <br></br>
          <h1 className="text-3xl font-bold text-purple-300">GRC (Coming Soon)</h1>
          <p className="text-white font-normal mt-4">
          Become a versatile professional who integrates governance, strategy, performance, risk, compliance, ethics, security, privacy, and audit to achieve Principled Performance.          </p>
           <br></br>
           <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl p-4"
              >
                <img src={BLogo1} style={{ width: "60px", height: "auto" }} alt="Logo 1" />
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl filter p-4"
              >
                <img src={BLogo2} style={{ width: "60px", height: "auto" }} alt="Logo 2" />
              </motion.div>
              <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl p-4"
              >
                <img src={BLogo3} style={{ width: "60px", height: "auto" }} alt="Logo 3" />
              </motion.div>
              <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  p-4"
              >
                <img src={BLogo4} style={{ width: "60px", height: "auto" }} alt="Logo 4" />
              </motion.div>
            </motion.div>
           
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex flex-wrap justify-center mt-10 ml-4 mr-4 border-b border-t rounded-2xl  border-purple-400">
        <div className="w-full lg:w-1/2   border-purple-400 p-4 gap-2">
          <h1 className="text-4xl font-bold text-white">One Stop Solution to Cyber security Skill Development for Individuals</h1>
          {/* <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl p-4"
              >
                <img src={Clogo1} style={{ width: "60px", height: "auto" }} alt="Logo 1" />
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl filter p-4"
              >
                <img src={Clogo2} style={{ width: "60px", height: "auto" }} alt="Logo 2" />
              </motion.div> */}
              {/* <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl p-4"
              >
                <img src={BLogo3} style={{ width: "60px", height: "auto" }} alt="Logo 3" />
              </motion.div>
              <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl  p-4"
              >
                <img src={BLogo4} style={{ width: "60px", height: "auto" }} alt="Logo 4" />
              </motion.div> */}
            {/* </motion.div> */}
          
          <br></br>
          <br></br>
          {/* <img
            src={smartimg}
            style={{ width: "460px", height: "auto" }}
            className="ml-4 justify-center mr-9 transition-transform duration-500 ease-in-out hover:scale-110 "
            alt="Smart Image"
          /> */}
          <p className="text-white font-normal">Your trusted partner to develop and reinforce defensive and offensive hacking skills through practical hands-on lab-oriented engagement </p>
          <br></br>
          <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl p-4"
              >
                <img src={Clogo1} style={{ width: "60px", height: "auto" }} alt="Logo 1" />
                <p className="text-white">1-1 Mentoring</p>
               
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl filter p-4"
              >
                <img src={Clogo2} style={{ width: "60px", height: "auto" }} alt="Logo 2" />
                <p className="text-white">Soft Skills <br></br> Training</p>
              </motion.div>
              <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl p-4"
              >
                <img src={Clogo3} style={{ width: "60px", height: "auto" }} alt="Logo 3" />
                <p className="text-white">Hand-On <br></br>Training</p>
              </motion.div>
              </motion.div>
          
        </div>
        <div className="w-full lg:w-1/2 p-4  border-purple-400">
        <img
            src={detectimg}
            style={{ width: "460px", height: "auto" }}
            className="ml-4 justify-center mr-9 transition-transform duration-500 ease-in-out hover:scale-90 rounded-2xl"
            alt="Smart Image"
          />
          
          {/* <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <LogoAnimation src={BLogo1} alt="Logo 1" duration={2.5} />
            <LogoAnimation src={BLogo2} alt="Logo 2" duration={3} />
            <LogoAnimation src={BLogo3} alt="Logo 3" duration={5} />
            <LogoAnimation src={BLogo4} alt="Logo 4" duration={2} />
          </motion.div> */}
           
          
           
        </div>
      </div>
    </div>
  );
};

export default Home;

