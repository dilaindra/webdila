import React from 'react'
import Photo1 from '../images/p2mkelas.jpg'
import Photo2 from '../images/p2m.jpg'
import Photo3 from '../images/p2mpestarakyat.jpg'
import Photo4 from '../images/p2mend.jpg'
// import Photo5 from '../images/mokaku.jpeg'
// import Photo6 from '../images/mokaku2.jpeg'
// import Photo7 from '../images/mokaku3.jpeg'
// import Photo8 from '../images/mokaku4.jpg'

export default function photo() {
  return (
    <div>
    {/* <p> Nilai param {id} </p> */}
    <section>
      <div class=" mx-auto max-w-screen-2xl px-10 py-8">
        <div>
          {/* <span class="inline-block ml-[600px] h-1 w-12 bg-red-700"></span> */}
          <div className='bg-gray-900 mb-5 h-1 flex justify-center'></div>

          <h2
            class="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl flex justify-center"
          >
           Galeri
          </h2>
        </div>
    <span class="inline-block  h-1 w-12 bg-gray-900"></span>
    <h2
            class="mt-1 text-2xl font-medium tracking-wide lg:text-2xl flex "
          >
           Pengabdian Pada Masyarakat 2022
           </h2>
        <div class="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
        
            {/* <br/> */}
            <div className='hover:scale-110'>
              <img
                alt="Trainer"
                src={Photo1}
                class="shadow-xl shadow-[#dceea1e9] -mt-3 h-[230px] w-full object-cover rounded-3xl "

              />          
            </div>
            <div className='hover:scale-110'>
                  <img
                    src={Photo2}
                    alt="Trainer"
    
                   class="shadow-xl shadow-[#7498d7e9] -mt-3 h-[230px] w-full object-cover rounded-3xl "
                  />
            </div>
            <div className='hover:scale-110'>

                  <img
                    src={Photo3}
                    alt="Trainer"
    
                    class="shadow-xl shadow-[#1e2019e9]  -mt-3 h-[230px] w-full object-cover rounded-3xl "
                  />
         
            </div>

     
         
            <div className='hover:scale-110'>

                  <img
                    src={Photo4}
                    alt="Trainer"
    
                    class="shadow-xl shadow-[#73c8f0e9]  -mt-3 h-[230px] w-full object-cover rounded-3xl "
                  />
            </div>
        </div>
      </div>
    </section>

  </div>
  )
}
