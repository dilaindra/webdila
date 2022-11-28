import React from 'react'

export default function form() {
    return (
        <div>


            <div class="mx-auto max-w-screen-xl px-4 pb-5 pt-5 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-lg text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl">Lebih Dekat dengan Saya</h1>

                    <p class="mt-4 text-gray-500">
                        Mari berkenalan lebih dekat dengan mengisi formulir di bawah ini, kemudian saya akan menghubungi Anda
                    </p>
                </div>

                <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <div>
                        <label for="text" class="sr-only">Password</label>
                        <div class="relative">
                            <input
                                type="text"
                                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Masukkan nama"
                            />

                        </div>
                    </div>
                    <div>
                        <label for="email" class="sr-only">Email</label>

                        <div class="relative">
                            <input
                                type="email"
                                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Masukkan email"
                            />

                        </div>
                    </div>

                    <div>
                        <label for="number" class="sr-only">Password</label>
                        <div class="relative">
                            <input
                                type="number"
                                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Masukkan Nomor Whatsapp"
                            />

                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <button
                            type="submit"
                            class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Submit
                        </button>
                    </div>


                </form>
            </div>

        </div>
    )
}
