import Image from "next/image";

export default function Register() {
    return (
        <div className="h-[100vh] w-[90%] sm:w-[45%]">
            <div className="flex justify-center ">

                <div className=" sm:w-full flex flex-col w-[95%]   bg-zinc-700/50 sm:px-2   rounded-3xl border border-emerald-300 hover:border-emerald-600">

                    <div className="flex   flex-row  items-center justify-center ">
                        <h1 class="text-4xl text-emerald-300  pt-6">Sign up</h1>
                    </div>
                    <div className="flex  flex-col sm:flex-row justify-center items-center mt-10 ">
                        <div className="p-2 sm:p-6">

                            <div className=" flex flex-col sm:pr-5  sm:border-dashed sm:border-r-2 border-x-zinc-400">

                                <div >
                                    <div className="flex flex-row  ">
                                        <label for="fname" class="p-2 text-base text-gray-200">First name :</label>
                                    </div>
                                    <div className="flex flex-row ">
                                        <input type="text" id="fname" name="fname" placeholder="Michael" className="pl-5 rounded-full h-8 px-6  bg-transparent border-2 border-gray-300  text-emerald-200/75" />
                                    </div>

                                </div>

                                <div >
                                    <div className="flex flex-row  ">
                                        <label for="lname" class="p-2 text-base text-gray-200">Last name :</label>
                                    </div>
                                    <div className="flex flex-row ">
                                        <input type="text" id="lname" name="lname" placeholder="Scofield" className="pl-5 rounded-full h-8 px-6  bg-transparent border-2 border-gray-300  text-emerald-200/75" /> </div>

                                </div>

                                <div >
                                    <div className="flex flex-row  ">
                                        <label for="age" class="p-2 text-base text-gray-200">Age :</label>
                                    </div>
                                    <div className="flex flex-row ">
                                        <input type="number" id="age" name="age" min="18" max="100" value="20" class="pl-5 rounded-full h-8 px-40  bg-transparent border-2 border-gray-300  text-emerald-200/75" />
                                    </div>

                                </div>

                                <div >
                                    <div className="flex flex-row  ">
                                        <label for="email" class="p-2 text-base text-gray-200">Enter your email :</label>
                                    </div>
                                    <div className="flex flex-row ">
                                        <input type="email" id="email" name="email" placeholder="exam@gmail.com" class="pl-5 rounded-full h-8 px-6 bg-transparent border-2 border-gray-300  text-emerald-200/75" /> </div>

                                </div>

                                <div >
                                    <div className="flex flex-row  ">
                                        <label for="email" class="p-2 text-base text-gray-200">gender :</label>
                                    </div>
                                    <div className="flex flex-row ">
                                        <select name="gender" id="gender" class="pl-5 rounded-full h-8 px-40   bg-transparent border-2 border-gray-300  text-emerald-300 ">
                                            <option value="Man">Man</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>

                                </div>




                            </div>

                        </div>

                        <div className=" p-2 sm:p-6 ">
                            <div className="flex flex-col basis-2/4 ">

                                <div className="flex flex-row">
                                    <p for="" class="p-2 text-xl text-gray-200">What do you know ?</p>
                                </div>

                                <div className="flex flex-col gap-1 px-2 mt-4">

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

                                <div className="flex flex-row mt-4">
                                    <p for="" class="p-2 text-xl text-gray-200">Work Experience</p>
                                </div>
                                <div className="flex flex-col gap-1 px-2 mt-4">
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



                            </div>

                        </div>




                    </div>

                    <div className="flex   flex-row  m-8 justify-center">
                        <div className=" ">
                            <button className=" px-8  py-2 bg-emerald-600 rounded-2xl text-slate-100 hover:bg-neutral-500 active:hover:bg-neutral-400 focus:outline-none focus:ring focus:ring-emerald-300">submit</button>

                        </div>

                    </div>


                </div>

            </div>


        </div>
    );
}