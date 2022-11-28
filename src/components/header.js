import React from 'react'
import { SiFacebook } from 'react-icons/si'
import Photo1 from '../images/armoji.png'

// export default function header()
const Header = () => {
  return (
  <header aria-label="Page Header" class="bg-gradient-to-br from-purple-400 to-blue-400 rounded-b-2xl "> 
  {/* fixed w-full z-10 */}
  <div class="mx-auto flex h-5 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 ">


    <div class="pt-[60px] flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Site Nav" class="hidden md:block">
        <ul class="flex items-center gap-6 text-sm">
          <li>
            <a class="text-white-500 transition-transform hover:text-gray-200/75 font-medium" href="/">
              Home
            </a>
          </li>

          <li>
            <a class="text-white-500 transition hover:text-gray-200/75 font-medium" href="/rekomendasimakanan/">
              Rekomendasi Makanan
            </a>
          </li>

          <li>
            <a class="text-white-500 transition hover:text-gray-200/75 font-medium" href="/galerifoto">
              Galeri Foto
            </a>
          </li>

          <li>
            <a class="text-white-500 transition hover:text-gray-200/75 font-medium" href="/about">
              Tentang
            </a>
          </li>

          <li>
            <a class="text-white-500 transition hover:text-gray-200/75 font-medium" href="/form">
              Kontak saya
            </a>
          </li>
        
        </ul>
      </nav>
      </div>
      </div>
  <div class="mx-auto max-w-screen-xl px-4 pb-5 sm:px-6 lg:px-8">
    <div class="flex items-center justify-end gap-4">
    

      <a href="/" class="block shrink-0">
        <span class="sr-only">Profile</span>
        <img
          alt="Man"
          src={Photo1}
          class="h-10 w-10 rounded-full object-cover"
        />
      </a>
    </div>

    
  </div>
</header>

  )
}
export default Header;