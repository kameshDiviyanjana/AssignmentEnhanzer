import React,{useState,useEffect} from 'react'

const Heder = () => {
 const [fixed,setfixed] = useState(false)
 const [enable,setEnable] = useState(true)

  function menuicon(){
     setEnable(!enable)
  }
 useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 200) {
        setfixed(true);
      } else {
        setfixed(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    

  <div className={`w-full  h-[100px] ${fixed && 'fixed transition delay-75 ease-in '}`}>
    <div className='  bg-red-500 text-white '>
        <div className=' flex justify-end gap-4 py-3 px-3   lg:mr-[50px]'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:w-6 lg:h-6 max-lg:h-4 max-lg:w-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
        </div>
        <div>
        <h3 className='  max-lg:text-xs'>
+94 777 536 496</h3>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:w-6 lg:h-6 max-lg:h-4 max-lg:w-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
        </div>
        <div>
        <h3 className=' max-lg:text-xs'>

                hello@chinesedragon.cloud</h3>
        </div>
        </div>
        
      
    </div>
    <div className=' bg-white  '>
        <div  className='   gap-4   grid grid-cols-2   py-5 px-5 lg:mr-[50px]  '>
             <div className=' '>
             <img src="https://chinesedragon.cloud/assets/img/logo.png" alt='image' className=' w-[150px] h-10   ' id="headline" />
             </div>
             <div className=' flex justify-end  max-lg:hidden '>
               <ul className={`lg:flex gap-4  justify-end py-2 px-2 text-gray-400 ${enable && 'max-lg:hidden'}`}>
                <li className='  hover:text-red-600 cursor-pointer'>Home</li>
                <li className='  hover:text-red-600 cursor-pointer' >About us</li>
                <li className='  hover:text-red-600 cursor-pointer'>Product</li>
                <li className='  hover:text-red-600 cursor-pointer'>Contact</li>
               </ul>
               <button className=' ml-2 py-2 px-8 text-white rounded-xl bg-red-600 outline-none border hover: border-red-600 hover:bg-white   transition ease-out delay-75 hover:text-red-600 max-lg:hidden'>Free Quote</button>
             </div>
             <div className='  hidden max-lg:block'>
             <div className=' flex  justify-end  ' >
              {
               enable ?  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" onClick={menuicon}>
               <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
             </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" onClick={menuicon}>
               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
             </svg>
              }
          


             </div>
             </div>
             
        </div>
    </div>
  </div>
  )
}

export default Heder
