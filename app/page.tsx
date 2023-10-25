import Link from "next/link"

const Page = () => {

    return (
        <div className="">
            <div className="px-16 py-14 flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold">Nouveaux Produits</h1>
                    <div className="w-60 h-2 rounded-full bg-lime-500" />
                </div>
                <div className="py-5 flex flex-row gap-2">
                    <div className="flex items-center justify-center overflow-hidden rounded-xl border-b-8 border-lime-500 flex-1">
                        <img className="hover:scale-110 ease-in-out duration-200 " src="https://agria-group.com.tn/wp-content/uploads/2023/04/biostimulant-01-1536x841.png" />
                    </div>
                    <div className="gap-3 flex max-w-md items-start p-5 flex-col">
                        <h1 className="text-3xl font-semibold text-black/60 max-w-lg">Nouvelles solutions biostimulantes </h1>
                        <h1 className="flex flex-row items-center justify-center text-3xl text-yellow-300 font-semibold">
                            <img className="h-16 w-16" src="https://www.agria-industrie.com.tn/wp-content/uploads/2023/04/icone-bistumilant-03-300x300.png" />
                            Biostimulant
                        </h1>
                        <ul className="px-5 gap-2 flex flex-col text-black/60 mt-2">
                            <li>Soufre</li>
                            <li>Soufre + Cuivre</li>
                            <li>iSoufre + Azote</li>
                            <li>Soufre + M.organique</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: "url(https://agria-group.com.tn/wp-content/uploads/2019/12/fertilization-4048524@2x-scaled.jpg)", backgroundSize: "75%", backgroundRepeat: "no-repeat" }} className="w-full bg-cover h-[70svh] flex items-center justify-end p-10">
                <div className="w-full max-w-2xl p-8 bg-lime-100 rounded-xl flex flex-col gap-2  border-t-8 border-lime-400">
                    <h1 className="text-3xl font-extrabold">Les engrais…</h1>
                    <h1 className="text-lg font-semibold">C’est notre métier !</h1>
                    <p className="text-sm font-light text-black/60">
                        Depuis sa fondation en 2010 AGRIA GROUP s’est lancé dans le développement d’une nouvelle approche de fertilisation et de défense des cultures. En effet, l’introduction d’une nouvelle génération de produits « BIO » fortifiants et stimulateurs des autodéfenses de la plante on permit de donner à l’agriculture une nouvelle opportunité de développement durable... En 2012 le groupe à lancer une unité de production d’engrais à la pointe de la technique et et apportant des innovations jusque là peu reconnues. L’exemple de l’application des organo-minéraux à haute stabilité en fait preuve.
                    </p>
                    <Link href="" className="w-max rounded-full underline mt-2  text-white px-5 py-1 bg-lime-400">A PROPOS</Link>
                </div>
            </div>
            <div className="px-8 p-20 w-full flex flex-col gap-3">
                <div className="mx-auto w-max">
                    <div className="w-max flex gap-2 items-center justify-center flex-col">
                        <h1 className="text-4xl font-semibold">Culture de saison</h1>
                        <p className="text-xl mt-2">Programme</p>
                        <div className="w-36 h-1 rounded-full bg-lime-500" />

                    </div>
                </div>
                <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-5">
                    <div className="flex flex-col px-4 py-7 rounded-lg bg-lime-100 items-center group justify-center">
                        <h1 className="text-2xl font-semibold">Tomate industrielle</h1>
                        <p className="text-xl mt-2">Programme fertilisation</p>
                        <img className="w-full rounded-lg mt-8 mb-3" src="https://agria-group.com.tn/wp-content/uploads/2019/12/fruit-tomate@2x.jpg" />
                        <div className="w-full flex mt-2">
                            <Link href="https://agria-group.com.tn/programme-tomate/" className="font-bold   px-4 py-1 underline bg-lime-400 rounded-lg">Lire la suite</Link>
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
                    <div className="flex flex-col px-4 py-7 rounded-lg bg-lime-100 items-center group justify-center">
                        <h1 className="text-2xl font-semibold">Piment</h1>
                        <p className="text-xl mt-2">Programme fertilisation</p>
                        <img className="w-full rounded-lg mt-8 mb-3" src="https://agria-group.com.tn/wp-content/uploads/2020/03/paprika.jpg" />
                        <div className="w-full flex mt-2">
                            <Link href="https://agria-group.com.tn/" className="font-bold   px-4 py-1 underline bg-lime-400 rounded-lg">Lire la suite</Link>
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
                    <div className="flex flex-col px-4 py-7 rounded-lg bg-lime-100 items-center group justify-center">
                        <h1 className="text-2xl font-semibold">Fraise</h1>
                        <p className="text-xl mt-2">Programme fertilisation</p>
                        <img className="w-full rounded-lg mt-8 mb-3" src="https://agria-group.com.tn/wp-content/uploads/2019/12/strawberry-2343487@2x.jpg" />
                        <div className="w-full flex mt-2">
                            <Link href="https://agria-group.com.tn/programme-tomate/" className="font-bold   px-4 py-1 underline bg-lime-400 rounded-lg">Lire la suite</Link>
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
        </div>
    )
}

export default Page