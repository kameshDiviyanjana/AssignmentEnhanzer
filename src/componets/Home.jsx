import React, { useEffect, useRef,useLayoutEffect } from 'react'
import Btton from './Btton'
import { gsap ,Power3,Expo} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Home = () => {

  const el = useRef();
 
  const tl = useRef();
  const yu = useRef()
    const timelineRef = useRef(null);
  useLayoutEffect(() => {
      const ctx = gsap.context(() => {
           yu.current = gsap.timeline()
          
        tl.current = gsap
          .timeline()
         .to('.checkss',{
          x: 30,   duration: 1 ,ease : Power3.easeInOut,rotateX : 360,
           scrollTrigger : {
            trigger : '.checkss',
            start: 'right right',
            end: '+=300',
            scrub: true
           }
          
         })
         
          .from("#headline", {
           
          
            opacity :0,
            x : -180,
            duration: 1
          })
          .to(".subheadline", {
            duration: 0.5, fontSize : 50 ,color : 'red'
          }).to(timelineRef.current,{
            opacity: 0,  duration: 0.5

          },'-=0.3')
          .from("#checks",{
                opacity :0,
                y : -80,
                duration: 1 

          })
          .from("#nows",{

            
            y:50,
            duration: 6,
            delay:0.5
          //   scrollTrigger : {
          //     trigger : '.checkss',
          //     start: 'right right',
          //     end: '+=300',
          //     scrub: true
          //    }
          }).to("#subheadline", {
            duration: 0.5, fontSize : 50 ,color : 'red'
          }).to(timelineRef.current,{
            opacity: 0,  duration: 0.5

          },'-=0.3')
        
          
      }, el);
      return ()=> ctx.revert();
    }, []);

  return (
    <div className=' relative   lg:grid grid-cols-2 w-full h-full bg-white mt-6  items-center ' ref={el}>
        <div className='    py-20 px-14     bg-white text-center' >
            <h1 className=' py-3 px-3  md:text-4xl  font-bold text-gray-600' id="headline">Simplify Food Chain Management with our Cloud-Powered Platform</h1>
            <h2 className=' py-4 px-4  lg:text-xl text-gray-300' id="headline">Streamline operations, Boost Efficiency, Drive growth with ease</h2>

            <Btton sty={' ml-2 py-2 px-8 text-white rounded-xl bg-red-600 outline-none border hover: border-red-600 hover:bg-white   transition ease-out delay-75 hover:text-red-600'} name={'More Details'} hxlass={"nows"} ref={el} />
        </div>
       <div className=' w-full h-full  lg:py-11 lg:px-16   lg:flex justify-center  '>
       <img src="https://chinesedragon.cloud/assets/img/process.jpg" alt='image' className='   ' id="headline" />
       </div>
     
        
    </div>
  )
}

export default Home
