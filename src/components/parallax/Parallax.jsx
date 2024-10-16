import './parallax.scss';
import PropTypes from 'prop-types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Parallax = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target:ref,
    offset: ["start start", "end start"]});

  
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  return (
    <div className='parallax' style={{background: 'linear-gradient(180deg,  #46479C, #151F2B, #46479C)'}} ref={ref}>
        <motion.h1 style={{y: yText}}>Aidana Turmetova</motion.h1>
        {/* <motion.img  animate='scrollButton' src='/scroll.png' alt='scroll' /> */}
        <motion.div className='sky'></motion.div>
        {/* <motion.div className='cloud'></motion.div> */}
       {/* <motion.div className='planets' 
        style={{
            y: yBg, 
            backgroundImage:`URL(${type ==='services' ? 'planets.png' : 'sun.png'})`}}></motion.div>
        <motion.div style={{x: yBg}}className='stars'></motion.div>  */}
    </div>
  )
};

Parallax.propTypes = {
    type: PropTypes.oneOf(['services', 'portfolio']).isRequired,
};

export default Parallax