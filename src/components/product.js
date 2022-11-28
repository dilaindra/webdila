import React from 'react'
import Photo1 from '../images/ramenYa.jpeg'
import Photo2 from '../images/matcha.jpeg'
import Photo3 from '../images/katsu.jpg'
import Photo4 from '../images/sushiYay.jpeg'

// export default function product()
const Product = () => {
  // const{ id }=useParams();
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
              Rekomendasi Makanan di Bandung
            </h2>
          </div>

          <div class="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
            <a href="/productdetailramen/1" class="block">
              {/* <br/> */}
              <div className='hover:scale-110'>

                <div class="flex justify-center">
                  <strong
                    class="relative m-auto h-6 bg-black px-4 text-[15px] uppercase leading-6 text-white rounded-xl"
                  >

                    Ramen YA!

                  </strong>
                </div>

                <img
                  alt="Trainer"
                  src={Photo1}
                  class="-mt-3 h-96 w-full object-cover rounded-tr-3xl rounded-bl-3xl "
                />
              </div>

              <h3 class="mt-4 text-sm text-black/90">
                Hot Chicken Naked Ramen
              </h3>

              <div class="mt-4 flex items-center justify-between font-bold">
                <p class="text-lg">Rp33.000,00</p>
              </div>
            </a>

            <a href="/productdetail/2" class="block">
              <div className='hover:scale-110'>

                <div class="flex justify-center">
                  <strong
                    class="relative h-6 bg-black px-4 text-[15px] uppercase leading-6 text-white rounded-xl"
                  >
                    Point Coffee
                  </strong>
                </div>

                <img
                  src={Photo2}
                  alt="Trainer"

                  class="-mt-3 h-96 w-full object-cover rounded-tl-3xl rounded-br-3xl "
                />
              </div>

              <h3 class="mt-4 text-sm text-black/90">
                Ice Matcha Frappe 16 Oz
              </h3>

              <div class="mt-4 flex items-center justify-between font-bold">
                <p class="text-lg">Rp30.000,00</p>


              </div>
            </a>

            <a href="/productsdetailkatsu/3" class="block">
              <div className='hover:scale-110'>

                <div class="flex justify-center">
                  <strong
                    class="relative h-6 bg-black px-4 text-[15px] uppercase leading-6 text-white rounded-xl"
                  >
                    AA Yamz
                  </strong>
                </div>

                <img
                  src={Photo3}
                  alt="Trainer"

                  class="-mt-3 h-96 w-full object-cover rounded-tr-3xl rounded-bl-3xl "
                />
              </div>

              <h3 class="mt-4 text-sm text-black/90">
                Nasi Katsu + Es Teh Manis
              </h3>

              <div class="mt-4 flex items-center justify-between font-bold">
                <p class="text-lg">Rp10.000,00</p>

              </div>
            </a>

            <a href="/productdetailsushi/4" class="block">
              <div className='hover:scale-110'>

                <div class="flex justify-center">
                  <strong
                    class="relative h-6 bg-black px-4 text-[15px] uppercase leading-6 text-white rounded-xl"
                  >
                    Sushi Yay
                  </strong>
                </div>

                <img
                  src={Photo4}
                  alt="Trainer"

                  class="-mt-3 h-96 w-full object-cover rounded-tl-3xl rounded-br-3xl "
                />
              </div>

              <h3 class="mt-4 text-sm text-black/90">
                Sushi Kimura Platter
              </h3>

              <div class="mt-4 flex items-center justify-between font-bold">
                <p class="text-lg">Rp76.000,00</p>

              </div>
            </a>

          </div>
        </div>
      </section>

    </div>
  )
}
export default Product;
