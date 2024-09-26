import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    title: 'Project 1',
    img: 'https://images.unsplash.com/photo-1713263871548-4ccc9645e81f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quia.'
  },
  {
    id: 2,
    title: 'Project 2',
    img: 'https://images.unsplash.com/photo-1564053051381-5cb91813736b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quia.'
  },
  {
    id: 3,
    title: 'Project 3',
    img: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quia.'
  },
  {
    id: 4,
    title: 'Project 4',
    img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quia.'
  },
  {
    id: 5,
    title: 'Project 5',
    img: 'https://images.unsplash.com/photo-1713354409506-53edfd407d49?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quia.'
  }
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start","end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imgContainer' ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className='textContent' style={{ y }}>
            <h2 >{item.title}</h2>
            <p>{item.description}</p>
            <button>View</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

Single.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;



// const Single =({item})=>{

//     const ref = useRef();
//     const {scrollYProgress} = useScroll({
//               target: ref,
//           });
        
//     const y = useTransform(scrollYProgress, [0,1],[-300, 300]);
//         return(
//             <section ref={ref}>
//                <div className='container'>
//                  <div className='wrapper'>
//                    <div className='imgContainer'>
//                      <img src={item.img} alt=""/>
//                    </div>
//                    <motion.div className='textContainer' >
//                        <h2>{item.title}</h2>
//                        <p>{item.description}</p>
//                        <button>See Demo</button>
//                        <button>See Code</button>
//                    </motion.div>
//                 </div>
//                </div>
//             </section>
//          );
//         };
// const Portfolio = () => {
  
//   const ref = useRef();
//   const {scrollYProgress} = useScroll({
//     target: ref,
//     offset:['end end','start start']});
//   const scaleX = useSpring(scrollYProgress,{
//       stiffness: 100,
//       damping: 30,

//   })

//   return (
//     <div className='portfolio' ref={ref}>
//       <div className="progess"> 
//         <h1>My Works</h1>
//         <motion.div style={{scaleX}} className="progressBar"></motion.div>
//       </div>
//         {items.map(item=>(
//             <Single item={item} key={item.id}/>
//         ))}
//     </div>
//   )
// }

// export default Portfolio