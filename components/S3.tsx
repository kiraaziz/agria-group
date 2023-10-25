import Link from "next/link"

const S3 = () => {

    return (
        <div className="px-8 p-20 w-full flex flex-col gap-3">
            <div className="mx-auto w-max">
                <div className="w-max flex gap-2 items-center justify-center flex-col">
                    <h1 className="text-4xl font-semibold">Culture de saison</h1>
                    <p className="text-xl mt-2">Programme</p>
                    <div className="w-36 h-1 rounded-full bg-lime-500" />

                </div>
            </div>
            <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-5">
                <div className="overflow-hidden flex flex-col px-4 py-7 rounded-lg bg-lime-100 items-center group justify-center">
                    <h1 className="text-2xl font-semibold">Tomate industrielle</h1>
                    <p className="text-xl mt-2">Programme fertilisation</p>
                    <img className="w-full rounded-lg mt-8 mb-3 hover:scale-[2.5] hover:z-10 ease-in-out duration-150 " src="https://agria-group.com.tn/wp-content/uploads/2019/12/fruit-tomate@2x.jpg" />
                    <div className="w-full flex mt-2">
                        <Link href="https://agria-group.com.tn/programme-tomate/" className=" ease-in-out duration-200 hover:w-full w-40 text-center font-bold   px-4 py-1 underline bg-lime-400 rounded-lg">Lire la suite</Link>
                    </div>
                    <div className="pt-4 flex flex-row gap-3 w-full items-center justify-center  ">
                        <div className="p-4">
                            <img className="w-20 h-20 group-hover:-translate-y-2 ease-in-out duration-200" src="./calender.svg" />
                        </div>
                        <div className="flex-1  flex flex-col items-start justify-start">
                            <p className="text-lg text-black/70 font-bold">Date de plantation</p>
                            <p className="text-lime-400 text-lg ">moi de mai</p>
                        </div>
                    </div>
                    <div className="group-hover:w-36 w-0 ease-in-out duration-200 h-1 rounded-full bg-lime-500" />

                </div>
                <div className="flex flex-col px-4 py-7 rounded-lg overflow-hidden bg-lime-100 items-center group justify-center">
                    <h1 className="text-2xl font-semibold">Piment</h1>
                    <p className="text-xl mt-2">Programme fertilisation</p>
                    <img className="w-full rounded-lg mt-8 mb-3 hover:scale-[2.5] hover:z-10  ease-in-out duration-150" src="https://agria-group.com.tn/wp-content/uploads/2020/03/paprika.jpg" />
                    <div className="w-full flex mt-2">
                        <Link href="https://agria-group.com.tn/programme-tomate/" className=" ease-in-out duration-200 hover:w-full w-40 text-center font-bold   px-4 py-1 underline bg-lime-400 rounded-lg">Lire la suite</Link>
                    </div>
                    <div className="pt-4 flex flex-row gap-3 w-full items-center justify-center  ">
                        <div className="p-4">
                            <img className="w-20 h-20 group-hover:-translate-y-2 ease-in-out duration-200" src="./calender.svg" />
                        </div>
                        <div className="flex-1  flex flex-col items-start justify-start">
                            <p className="text-lg text-black/70 font-bold">Date de plantation</p>
                            <p className="text-lime-400 text-lg ">-</p>
                        </div>
                    </div>
                    <div className="group-hover:w-36 w-0 ease-in-out duration-200 h-1 rounded-full bg-lime-500" />

                </div>
                <div className="flex flex-col px-4 py-7 rounded-lg bg-lime-100 items-center overflow-hidden group justify-center">
                    <h1 className="text-2xl font-semibold">Fraise</h1>
                    <p className="text-xl mt-2">Programme fertilisation</p>
                    <img className="w-full rounded-lg mt-8 mb-3 hover:scale-[2.5] hover:z-10  ease-in-out duration-150" src="https://agria-group.com.tn/wp-content/uploads/2019/12/strawberry-2343487@2x.jpg" />
                    <div className="w-full flex mt-2">
                        <Link href="https://agria-group.com.tn/programme-tomate/" className=" ease-in-out duration-200 hover:w-full w-40 text-center font-bold   px-4 py-1 underline bg-lime-400 rounded-lg">Lire la suite</Link>
                    </div>
                    <div className="pt-4 flex flex-row gap-3 w-full items-center justify-center  ">
                        <div className="p-4">
                            <img className="w-20 h-20 group-hover:-translate-y-2 ease-in-out duration-200" src="./calender.svg" />
                        </div>
                        <div className="flex-1  flex flex-col items-start justify-start">
                            <p className="text-lg text-black/70 font-bold">Date de plantation</p>
                            <p className="text-lime-400 text-lg ">-</p>
                        </div>
                    </div>
                    <div className="group-hover:w-36 w-0 ease-in-out duration-200 h-1 rounded-full bg-lime-500" />

                </div>
            </div>
        </div>
    )
}

export default S3