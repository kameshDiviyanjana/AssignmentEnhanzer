import React,{ useEffect, useRef,useLayoutEffect }  from 'react'
import Data from './Data.json'



function About() {

  
 
  
  return (
    <div className=' w-full  h-full  bg-white  mt-36' >
      <div className=' py-6 px-11 text-center'  >
            
            <h1 className='lined '   > <span className='hline '  >ABOUT US</span> </h1>
            <p className=' py-8 px-4 text-gray-500'>Welcome to Chinese Dragon Cloud PoS, where innovation meets tradition in the heart of digital transformation for mid-sized food chains. We are pioneers in the realm of cloud-based solutions, dedicated to reshaping the landscape of hospitality operations.</p>
            <p className=' py-4  px-8 text-gray-500'>At Chinese Dragon Cloud PoS, we redefine possibilities and usher in a new era where efficiency, connectivity, and tradition converge to elevate the dining experience.</p>
        </div>
        <div className=' lg:grid lg:grid-cols-2 gap-5  text-center'>
            <div className=' bg-white lg:px-32 lg:py-8  '>
                  <h1 className='lg:text-[30px] font-semibold   text-[#26262d]'>
                  WHO WE AR
                  </h1>
                  <p className='py-8 px-4 max-lg:text-[15px] text-gray-500'>
                  We are a team of passionate individuals committed to revolutionizing the way mid-sized food chains operate in the digital age. With a focus on seamless automation and comprehensive end-to-end solutions, we bring forth a platform designed to elevate your business to new heights.
                  </p>
            </div>
            <div className=' bg-white  lg:px-32 lg:py-8'>
            <h1 className='lg:text-[30px] font-semibold   text-[#26262d] '>
            OUR VISION
                  </h1>
                 <div>
                 <p className='py-8 px-4 text-gray-500   '>
                  To empower mid-sized food chains with the tools they need to thrive in an increasingly competitive market. By harnessing the power of cloud technology, we aim to simplify and optimize every aspect of your operations, from procurement to customer engagement.
                  </p>
                 </div>
            </div>
        </div>
        <div className=' bg-white lg:flex lg:col-span-2 gap-1 justify-center'>
            <div className=' lg:py-12 lg:px-10 flex justify-center'>
            <img src="https://chinesedragon.cloud/assets/img/service.png" alt='image' className=' w-[500px] ' />
            </div>
           
            <div className='   bg-white py-8 px-4 lg:grid lg:grid-cols-2 gap-8 '>
            {
               Data.map((details)=>(

                <div  className='  ' key={details.id}>
                     <div className=' bg-red-200  lg:w-[400px] lg:h-[200px] rounded-2xl shadow-2xl flex  mb-3 hover:bg-blue-100 '>
            <div className='py-8 px-4 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
</svg>

            </div>
          <div className=' '>
         
 <p className='lg:py-1 lg:px-1 max-lg:py-2 max-xl:py-2 lg:text-[14px] '>
           
 <samp className=' font-bold'>{details.heder}</samp> {details.paragadata}
  </p>
        
         
          </div>
           </div>
                </div>
               ))
            }
          
           
          
          

            </div>
        </div>
        <div className=' w-full  h-full  bg-red-100'>
            <div>
            <div className=' py-6 px-11 text-center' >
            
            <h1 className='lined'> <span className='hline'>PRODUCT</span> </h1>
            <p className=' py-1 px-4 text-gray-500'> We Are In A Mission To</p>
            <h1 className=' py-1  px-8  text-black text-xl font-bold'>Help Your Food Chain to Achieve More.</h1>
        </div>
        <div className=' py-6 px-7 '>
            <div className=' py-9 px-3 lg:flex lg:col-span-3 gap-5  justify-center '>
                  <div className=' lg:w-[400px] h-[450px]  bg-white  rounded-xl py-3 px-3 chngecolu'>
                 <div className=' flex justify-center   '>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" w-14 h-14 text-red-900 chngecolu ">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z" clip-rule="evenodd" />
</svg>
                 </div>

                    <h1 className=' lg:text-[25px] text-black font-bold text-center py-3 px-3 mt-4'><a href='#'>
RETAIL CUSTOMERS</a></h1>
<p className=' py-5 px-5 mt-2'>
Provide a cutting-edge, cloud-based Point of Sale (PoS) system tailored for retail customers, prioritizing a seamless in-store dining experience with swift order processing, smooth transactions.
</p>
                  </div>
                  <div className=' lg:w-[400px] h-[450px]   bg-red-800  rounded-xl py-3 px-3 max-lg:mt-3'>
                 <div className=' flex justify-center   '>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" w-14 h-14  text-white ">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z" clip-rule="evenodd" />
</svg>
                 </div>

                    <h1 className=' lg:text-[25px] text-white font-bold text-center py-3 px-3 mt-4'><a href='#'>

                    ONLINE ORDERSS</a></h1>
<p className=' py-5 px-5 mt-2 text-white'>
Offers a user-friendly Online Orders channel, allowing food chains to expand their reach and engage a broader audience in the fast-paced digital landscape with more dynamic customizations.
</p>
                  </div>
                  <div className=' lg:w-[400px] h-[450px]  bg-white  rounded-xl py-3 px-3 max-lg:mt-3'>
                 <div className=' flex justify-center  py-1 px-1   '>
                    <div className='bg-red-800 w-14 h-14 rounded-full flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className=' w-9 h-9  mt-2 text-white' viewBox="0 0 1024 1024"><path fill="currentColor" d="M1021.02 731.408L938.734 580.11c-.128-.208-.096-.4-.224-.593l-5.872-10.143c-3.28-5.617-8.432-9.233-14.192-10.593c-5.696-1.408-11.985-.544-17.408 2.975l-9.84 6.336c-.193.113-.305.288-.497.416l-145.6 98.32c-10.88 7.008-14.416 21.68-7.936 32.913l6.544 7.2c6.48 11.184 21.265 11.647 32.161 4.64l87.04-59.184c-20.608 166-154.736 293.392-318.96 308.176v-641.6h128.048c17.664 0 32-14.336 32-32s-14.336-32-32-32h-129.44c-.24-.832-.448-1.664-.768-2.464c57.103-13.28 99.695-64.368 99.695-125.536c0-71.248-57.744-129.008-129.008-129.008c-71.248 0-128.992 57.744-128.992 129.008c0 60.817 42.112 111.664 98.736 125.28c-.336.88-.576 1.808-.848 2.72H351.997c-17.665 0-32 14.336-32 32s14.335 32 32 32H479.98v641.584c-164.176-14.784-298.16-142.128-318.816-308.112l86.944 59.12c10.88 7.008 25.664 6.544 32.144-4.64l6.56-7.2c6.48-11.216 2.944-25.903-7.951-32.911l-145.6-98.32c-.193-.144-.305-.32-.48-.415l-9.857-6.336a22.16 22.16 0 0 0-17.408-2.976c-5.744 1.36-10.912 4.992-14.193 10.592l-5.872 10.16c-.112.193-.096.385-.209.593L2.971 731.408c-6.496 11.168-2.945 25.872 7.952 32.896l9.12 3.424c10.88 6.992 24.256.64 30.752-10.543l47.904-88.975c29.376 204.72 205.104 357.823 413.28 357.823c208.063 0 383.92-153.088 413.36-357.712l47.84 88.864c6.496 11.184 19.888 17.535 30.768 10.543l9.12-3.424c10.896-7.024 14.448-21.728 7.952-32.896zM447.506 126.975c0-35.84 29.153-65.01 64.993-65.01c35.84 0 65.008 29.153 65.008 65.009s-29.152 65.009-65.009 65.009c-35.824-.016-64.992-29.168-64.992-65.008"/></svg>
                    </div>
                 </div>

                    <h1 className=' lg:text-[25px] text-black font-bold text-center py-3 px-3 mt-4'><a href='#'>

                    THIRD-PARTY APIs</a></h1>
<p className=' py-5 px-5 mt-2'>
Integrate with third-party apps like UberEats using Chinese Dragon Cloud PoS to efficiently manage orders from external sources within a unified system, ensuring streamlined operations for your restaurant.
</p>
                  </div>
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default About
