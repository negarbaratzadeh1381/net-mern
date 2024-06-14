import Image from "next/image";

export default function Freelancers() {
    return (
        <div className="flex flex-col md:flex-row w-[95%] my-8">
            <div className="basis-1/4 ">
                <div className="bg-zinc-700/25 rounded-3xl border-2 border-neutral-400  pl-10 py-10 w-full sm:w-[85%] flex flex-col ">

                    <h2 for="" class=" text-2xl text-emerald-300">Filters</h2>

                    <div className="flex flex-col gap-1 px-2 mt-8">

                        <div className="flex gap-6">
                            <input type="checkbox" id="html" inname="html" value="HTML" />
                            <label for="html" className=" text-base text-gray-200">HTML</label>
                        </div>

                        <div className="flex gap-6">


                            <input type="checkbox" id="css" name="css" value="CSS" />
                            <label for="css" class=" text-base text-gray-200">CSS</label>
                        </div>
                        <div className="flex gap-6">


                            <input type="checkbox" id="javascript" name="javascript" value="JavaScript" />
                            <label for="javascript" class=" text-base text-gray-200">JavaScript</label>
                        </div>
                        <div className="flex gap-6">

                            <input type="checkbox" id="tailwind" name="fav_language" value="tailwind" />
                            <label for="tailwind" class=" text-base text-gray-200">tailwind</label>
                        </div>
                        <div className="flex gap-6">

                            <input type="checkbox" id="Scurity" name="fav_language" value="Scurity" />
                            <label for="Scurity" class=" text-base text-gray-200">Scurity</label>
                        </div>
                    </div>




                    <h2 for="" className="text-2xl text-emerald-300 mt-8">Work Experience</h2>

                    <div className="flex flex-col gap-1 px-2 mt-8">
                        <div className="flex gap-6">

                            <input type="radio" id="0-3" name="Experience" value="0-3" />
                            <label for="0-3" class="text-base text-gray-200">0 to 3 years</label>
                        </div>
                        <div className="flex gap-6">

                            <input type="radio" id="3-5" name="Experience" value="3-5" />
                            <label for="3-5" class="text-base text-gray-200">3 to 5 years</label>
                        </div>
                        <div className="flex gap-6">


                            <input type="radio" id="5" name="Experience" value="5" />
                            <label for="5" class="text-base text-gray-200">more than 5 years</label>
                        </div>
                    </div>




                    <h2 for="" className="text-2xl text-emerald-300 mt-8">Gender</h2>
                    <div className="flex flex-col gap-1 px-2 mt-8">
                        <div className="flex gap-6">
                            <input type="radio" id="Man" name="gender" value="Man" />
                            <label for="Man" class="text-base text-gray-200">Man</label>
                        </div>
                        <div className="flex gap-6">

                            <input type="radio" id="Female" name="gender" value="Female" />
                            <label for="Female" class="text-base text-gray-200">Female</label>
                        </div>


                    </div>
                    <div className="flex justify-start">
                        <button className="mt-8 p-8 py-2 w-[85%] bg-emerald-600 rounded-2xl text-slate-100 hover:bg-neutral-500 active:hover:bg-neutral-400 focus:outline-none focus:ring focus:ring-emerald-300">submit</button>

                    </div>



                </div>

            </div>

            <div className="basis-3/4 mt-6  ">
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex flex-row w-full sm:w-[95%]">
                        <h1 className=" text-4xl text-emerald-300 ">Freelancers</h1>

                    </div>
                    <div className="grid grid-cols-12 gap-x-6 gap-y-10 mt-12 w-full sm:w-[90%]">
                        
                        <div className="col-span-12 md:col-span-6 ">
                            <div className="relative p-4 rounded-2xl bg-zinc-700/25 border-2 border-emerald-300/25 hover:border-emerald-300/75  ">
                                <div className="flex gap-4 items-center ">
                                    <Image
                                        src="/personal-25.png"
                                        width={100}
                                        height={100}
                                        className="bg-white rounded-3xl"
                                    />
                                    <div className="flex flex-col gap-2 text-base text-gray-200">
                                        <span >Name : </span>
                                        <span>Experince :</span>
                                    </div>
                                </div>
                                <div class="  right-4 top-3 absolute flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="-52.5 0 361 361" preserveAspectRatio="xMinYMin meet"><path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#E44D26" /><path d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" fill="#F16529" /><path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#EBEBEB" /><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" /><path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#FFF" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 32 32" fill="none"><path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" /><path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" /><path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" fill="#FFCA28" /> <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E" /> <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E" /></svg>

                                </div>
                                <div className="bottom-3 right-4 absolute">
                                    <button className="px-4 py-1 bg-cyan-600 rounded-full  text-gray-200 ">request</button>
                                </div>
                            </div>



                        </div>
                        <div className="col-span-12 md:col-span-6 ">
                            <div className="relative p-4 rounded-2xl bg-zinc-700/25 border-2 border-emerald-300/25 hover:border-emerald-300/75  ">
                                <div className="flex gap-4 items-center ">
                                    <Image
                                        src="/personal-25.png"
                                        width={100}
                                        height={100}
                                        className="bg-white rounded-3xl"
                                    />
                                    <div className="flex flex-col gap-2 text-base text-gray-200">
                                        <span >Name : </span>
                                        <span>Experince :</span>
                                    </div>
                                </div>
                                <div class="  right-4 top-3 absolute flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="-52.5 0 361 361" preserveAspectRatio="xMinYMin meet"><path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#E44D26" /><path d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" fill="#F16529" /><path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#EBEBEB" /><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" /><path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#FFF" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 32 32" fill="none"><path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" /><path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" /><path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" fill="#FFCA28" /> <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E" /> <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E" /></svg>

                                </div>
                                <div className="bottom-3 right-4 absolute">
                                    <button className="px-4 py-1 bg-red-600 rounded-full  text-gray-200 ">request</button>
                                </div>
                            </div>



                        </div>
                        <div className="col-span-12 md:col-span-6 ">
                            <div className="relative p-4 rounded-2xl bg-zinc-700/25 border-2 border-emerald-300/25 hover:border-emerald-300/75  ">
                                <div className="flex gap-4 items-center ">
                                    <Image
                                        src="/personal-25.png"
                                        width={100}
                                        height={100}
                                        className="bg-white rounded-3xl"
                                    />
                                    <div className="flex flex-col gap-2 text-base text-gray-200">
                                        <span >Name : </span>
                                        <span>Experince :</span>
                                    </div>
                                </div>
                                <div class="  right-4 top-3 absolute flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="-52.5 0 361 361" preserveAspectRatio="xMinYMin meet"><path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#E44D26" /><path d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" fill="#F16529" /><path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#EBEBEB" /><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" /><path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#FFF" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 32 32" fill="none"><path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" /><path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" /><path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" fill="#FFCA28" /> <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E" /> <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E" /></svg>

                                </div>
                                <div className="bottom-3 right-4 absolute">
                                    <button className="px-4 py-1 bg-red-600 rounded-full  text-gray-200 ">request</button>
                                </div>
                            </div>



                        </div>
                        <div className="col-span-12 md:col-span-6 ">
                            <div className="relative p-4 rounded-2xl bg-zinc-700/25 border-2 border-emerald-300/25 hover:border-emerald-300/75  ">
                                <div className="flex gap-4 items-center ">
                                    <Image
                                        src="/personal-25.png"
                                        width={100}
                                        height={100}
                                        className="bg-white rounded-3xl"
                                    />
                                    <div className="flex flex-col gap-2 text-base text-gray-200">
                                        <span >Name : </span>
                                        <span>Experince :</span>
                                    </div>
                                </div>
                                <div class="  right-4 top-3 absolute flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="-52.5 0 361 361" preserveAspectRatio="xMinYMin meet"><path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#E44D26" /><path d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" fill="#F16529" /><path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#EBEBEB" /><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" /><path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#FFF" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 32 32" fill="none"><path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" /><path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" /><path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" fill="#FFCA28" /> <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E" /> <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E" /></svg>

                                </div>
                                <div className="bottom-3 right-4 absolute">
                                    <button className="px-4 py-1 bg-red-600 rounded-full  text-gray-200 ">request</button>
                                </div>
                            </div>



                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}