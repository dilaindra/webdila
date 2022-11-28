import React from 'react'
import Photo1 from '../images/p2mkelas.jpg'
import Photo2 from '../images/p2m.jpg'
import Photo3 from '../images/p2mpestarakyat.jpg'
import Photo4 from '../images/p2mend.jpg'
import Photo5 from '../images/mokaku.jpeg'
import Photo6 from '../images/mokaku2.jpeg'
import Photo7 from '../images/mokaku3.jpeg'
import Photo8 from '../images/mokaku4.jpg'

export default function photomokaku() {
  return (
    <div>
    {/* <p> Nilai param {id} </p> */}
    <section>
      <div class=" mx-auto max-w-screen-2xl px-10 pt-0 pb-8">
       
    <span class="inline-block  h-1 w-12 bg-gray-900"></span>
    <h2
            class="mt-1 text-2xl font-medium tracking-wide lg:text-2xl flex "
          >
           Mokaku 2022
           </h2>
        <div class="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
          
        
          {/* <a href="/productdetailsushi/" class="block"> */}
            <div className='hover:scale-110'>

                  <img
                    src={Photo5}
                    alt="Trainer"
    
                    class="shadow-xl shadow-[#588ca5e9] -mt-3 h-[230px] w-full object-cover rounded-3xl "
                  />

            </div>

            <div className='hover:scale-110'>

                  <img
                    src={Photo6}
                    alt="Trainer"
    
                    class="shadow-xl shadow-[#895754e9] -mt-3 h-[230px] w-full object-cover rounded-3xl "
                  />

            </div>

          {/* <a href="/productdetailsushi/" class="block"> */}
            <div className='hover:scale-110'>

                  <img
                    src={Photo7}
                    alt="Trainer"
    
                    class="shadow-xl shadow-[#4ca667e9] -mt-3 h-[230px] w-full object-cover rounded-3xl "
                  />
           
            </div>
          {/* </a> */}

          {/* <a href="/productdetailsushi/" class="block"> */}
            <div className='hover:scale-110'>

                  <img
                    src={Photo8}
                    alt="Trainer"
    
                    class="shadow-xl shadow-[#3e468ee9] -mt-3 h-[230px] w-full object-cover rounded-3xl "
                  />

            </div>

          {/* </a> */}
         
        </div>
      </div>
    </section>

  </div>
  )
}
