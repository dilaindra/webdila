import React from 'react'
import Photo1 from '../images/ar.gif'

export default function bannerr() {
    return (
        <div><section
            class=" text-black rounded-2xl"
        >

            <div
                class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div class="max-w-xl pl-10 text-center sm:text-left">
                    <h1 class="pb-2 bg-gradient-to-br from-purple-500 via-blue-400 to-green-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                        Hello
                        <br/> It's DILA INDRA

                    </h1>

                    <p class="mt-4 max-w-lg sm:text-l sm:leading-relaxed">
                       Website ini berisi makanan-makanan yang pernah saya makan, juga terdapat galeri yang berisi beberapa foto pilihan.
                        
                    </p>

                </div>
                <div class='mx-auto'>
                    <img
                        alt="Trainer"
                        src={Photo1}
                        class=" h-screen w-full object-cover"
                    />
                </div>

            </div>

        </section>

        </div>
    )
}
