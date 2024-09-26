import './skills.scss';
import { motion } from 'framer-motion';
import { IoDesktopOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import { SiDeepnote } from "react-icons/si";

const variants = {
  initial: {
    opacity: 0,
    y: 100,
    x:-500,
  },
  animate: {
    x:0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  return (
    <motion.div className='skills' variants={variants} initial='initial' animate='animate'>
      <motion.div className='textContainer'>
        <p>HELLO! I am a Frontend Developer with a passion to 
        <br/>CREATE DIGITAL PRODUCTS.</p>
        <hr/>
      </motion.div>

      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/Unknown.jpeg' alt=''/>
          <h1><motion.b whileHover={{color:'white'}}>Creative</motion.b> Ideas</h1>
        </div>
        <div className='title'>
          <h1><span>My <b>Expertise</b></span></h1>
          <motion.button whileHover={{color:'white'}}>See More</motion.button>
        </div>
      </motion.div>

      <motion.div className='skillContainer' variants={variants}>
        <motion.div className='box' whileHover={{ color: 'white'}}>
          <h2><IoDesktopOutline /> Frontend</h2>
          <p>JavaScript</p>
          <p>HTML</p>
          <p>CSS</p>
          <h3>Frameworks</h3>
          <p><FaReact /> React</p>
          <h3>Styles</h3>
          <p>Material UI</p>
          <p>Bootstrap</p>
        </motion.div>

        <motion.div className='box' whileHover={{color: 'white'}}>
          <h2><VscServerProcess /> Backend</h2>
          <p>NodeJS</p>
          <p>Python</p>
          <h3>Frameworks</h3>
          <p>Express</p>
          <p>Django</p>
          </motion.div>
        
          <motion.div className='box' whileHover={{color: 'white'}}>
          <h2><FaDatabase /> DataBase</h2>
          <h3>NoSQL</h3>
          <p>MongoDB</p>
          <h3>SQL</h3>
          <p>PostgreSQL</p>
          
          
        </motion.div>
        <motion.div className='box' whileHover={{color: 'white'}}>
          <h2><SiDeepnote /> Graphic Design</h2>
          <p>Figma</p>
          <p>Adobe</p>
          <p>Photoshop</p>
          
        </motion.div>
      </motion.div>

    </motion.div>
  );
};

export default Skills