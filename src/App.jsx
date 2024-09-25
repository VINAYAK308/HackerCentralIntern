// import Navbar from "./components/Navbar";
// // import Hero from "./components/hero";
// import ProfilePic from "./assets/RVinayak.jpeg"
// import About from "./components/about"
// import Technologies from "./components/Technologies"
// // import Experience from "./components/experience";
// import { EXPERIENCES } from "./constants";
// // import Project from "./components/Project"
// import { PROJECTS } from "./constants";
// import { motion } from "framer-motion"
// const container = (delay) => ({
//   hidden: {x:-100 , opacity:0},
//   visible:{
//   x:0,
//   opacity: 1,
//   transition: {duration:0.5, delay:delay}}
// })

// const App = () => {
//   return (
//   <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
//     <div className="fixed top-0 -z-10 h-full w-full">
//     <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
//     </div>
//     <Navbar />
//     {/* <Hero /> */}
//     {/* <h1 className="text-3xl font-bold underline">Hello World!</h1> */}
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//         <div className="flex flex-wrap">
//             <div className="w-full lg:w-1/2">
//                 <div className="flex flex-col items-center lg:items-start">
//                     <motion.h1 
//                     variants={container(0)}
//                     initial="hidden"
//                     animate="visible"
//                      className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Vinayak Jadhav</motion.h1>
//                     <motion.span  variants={container(0.5)}
//                     initial="hidden"
//                     animate="visible" className="bg-gradient-to-t from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
//                     <motion.p  variants={container(1)}
//                     initial="hidden"
//                     animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
//                     </motion.p>
//                 </div>
//             </div>
//             <div className="w-full lg:w-1/2 lg:p-8">
//             <div className="flex justify-center">
//                 <motion.img initial={{x:100,opacity:0 }}
//                 animate={{x:0,opacity:1}}
//                 transition={{duration:1, delay:1.2}}
//                  src={ProfilePic} alt="Vinayak Jadhav" />          
//             </div>
//         </div> 
//         </div>
//         {/* <div className="w-full lg:w-1/2 lg:p-8">
//             <div className="flex justify-center">
//                 <img src={ProfilePic} alt="Vinayak Jadhav" />          
//             </div>
//         </div>  */}
//     </div>
//     <About />
//     <Technologies />
//     {/* <Experience /> */}
//      <div className="border-b border-neutral-900 pb-4">
//             <motion.h2 whileInView={{opacity:1 ,y:0}} initial={{opacity:0,y:-100}} transiton={{duration:0.5}} className="my-20 text-center text-4xl">Experience</motion.h2>
//             <div>
//                 {EXPERIENCES.map((experience, index) => (
//                     <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//                         <motion.div  whileInView={{opacity:1,x:0}}
//                           initial={{opacity:0,x:-100}}
//                           transition={{duration:1}} className="w-full lg:w-1/4">
//                             <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
//                         </motion.div>
//                         <motion.div 
//                           whileInView={{opacity:1,x:0}}
//                           initial={{opacity:0,x:100}}
//                           transition={{duration:1}}
//                         className="w-full max-w-xl lg:w-3/4">
//                           <h6 className="mb-2 font-semibold">
//                             {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>
//                           </h6>
//                           <p className="mb-4 text-neutral-400">{experience.description}</p>
//                           {experience.technologies.map((tech,index) => (<span key={index} className ="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>))}
//                         </motion.div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//         {/* <Project /> */}
//         <div className="border-b border-neutral-900 pb-4"><motion.h2 
//          whileInView={{opacity:1,x:0}}
//          initial={{opacity:0,x:-100}}
//          transition={{duration:0.5}}className="my-20 text-center text-4xl">Project</motion.h2>
//          <div>{PROJECTS.map((project,index) => (
//         <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//             <motion.div
//             whileInView={{opacity:1,x:0}}
//             initial={{opacity:0,x:-100}} 
//             transition={{duration:0.5}} className="w-full lg:w-1/4">
//             <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded" />
//             </motion.div>
//             <motion.div 
//              whileInView={{opacity:1,x:0}}
//              initial={{opacity:0,x:100}} 
//              transition={{duration:1}}
//              className="w-full max-w-xl lg:w-3/4">
//             <h6 className="mb-2 font-semibold">{project.title}</h6>
//             <p className="mb-4 text-neutral-400">{project.description}</p>
//             {project.technologies.map((tech,index)=> (
//                 <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
//             ))}</motion.div>
//         </div>
//          ))}
//       </div>
//     </div>
//     <div className="border-b border-neutral-900 pb-20">
//         <motion.h2  whileInView={{opacity:1,y:0}}
//             initial={{opacity:0,y:-100}} 
//             transition={{duration:0.5}}className="my-10 text-center text-4xl">Get in Touch</motion.h2>
//         <div className="text-center tracking-tighter">
//            <motion.p 
//             whileInView={{opacity:1,x:0}}
//             initial={{opacity:0,x:-100}} 
//             transition={{duration:1}}
//             className="my-4"> Address: "Punyai , Rajmudra Colony , Tathawade , Pune - 33 "</motion.p>
//            <motion.p  whileInView={{opacity:1,x:0}}
//             initial={{opacity:0,x:100}} 
//             transition={{duration:1}}className="my-4">Phone No: "+91 7498564907 "</motion.p>
//            <a href="#" className="border-b"> Email: "vinayak.jadhav_comp23@pccoer.in"</a>

//           </div>
//         </div>



//   </div> 

//   );

// };
// export default App;
import Navbar from './components/Navbar'
import Hero from './components/hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //added  by trj
import Home from './components/pages/Home'; //added by trj
import About from './components/pages/About';
import Dashboard from './components/pages/Dashboard1';
import UserDashboard from './components/pages/user-dashboard';
import AdminDashboard from './components/pages/admin-dashboard';
import SuperadminDashboard from './components/pages/Superadmin-dashboard';


// import {Router,Route} from "react-router-dom" // added by trj
const App = () => {
  return (
    // <div className="overflow-x-hidden text-neutral-600 antialiased slec bg-black selection:text-cyan-900">
    //   <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

    //   <Navbar />
    //   <Hero/>

    // </div>


    //added by trj
    <Router>
      <main>
      <div className="overflow-x-hidden text-neutral-600 antialiased slec bg-black selection:text-cyan-900">
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}

        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/Superadmin-dashboard" element={<SuperadminDashboard />} />
          
          
        </Routes>
        
      </div>
      
      </main>
      
    </Router>
    

    //ended by trj
  )
}

export default App