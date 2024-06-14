import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[100vh] w-[80%]">
      <div className=" flex  flex-col-reverse  md:flex-row items-center justify-center md:gap-72">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-8xl text-neutral-300">Clancer</h1>
          <p className="text-xl text-emerald-300 ml-4">Find your freelancer here</p>
        </div>
        <div className="">
          <Image
            src="/brain2.svg"
            width={400}
            height={400}

          />
        </div>

      </div>
      <div className=" flex  flex-col gap-4 md:flex-row items-center mt-16 justify-between md:gap-0  ">

        <div className="flex flex-row gap-4">


          <select name="chose" className="bg-neutral-200  rounded-xl px-12 sm:px-32 py-3 w-full sm:w-auto " >
            <option value="chose" >What are you looking for?</option>
            <option value="network">network</option>
            <option value="graphic">graphic</option>
            <option value="security">security</option>
          </select>



          <button className=" px-6 py-2 bg-emerald-500 rounded-2xl text-emerald-200 hover:bg-neutral-400 active:hover:bg-neutral-400 focus:outline-none focus:ring focus:ring-emerald-300">Search</button>

        </div>
        <button className="bg-emerald-700 py-3 px-12  rounded-2xl text-emerald-200 w-full sm:w-auto"> employer log in <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline-flex">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>

        </button>


      </div>

    </div>
  );
}
