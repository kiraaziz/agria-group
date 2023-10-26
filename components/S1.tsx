const S1 = () => {

    return (
        <div className="px-16 mt-36 mb-7 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold">Nouveaux Produits</h1>
                <div className="w-60 h-2 rounded-full bg-lime-500" />
            </div>
            <div className="py-5 flex lg:flex-row flex-col gap-2 max-h-96">
                <div className="flex items-center justify-center overflow-hidden rounded-xl border-b-8 border-lime-500 flex-1">
                    <img className="hover:scale-125 ease-in-out duration-200" src="/images/5.webp" />
                </div>
                <div className="gap-3 flex max-w-md items-start p-7 group flex-col bg-lime-400/20 rounded-lg">
                    <h1 className="text-3xl font-semibold text-black/60 max-w-lg ">Nouvelles solutions biostimulantes
                        <div className="w-0 group-hover:w-1/3 rounded-full ease-in-out duration-100 h-3 mb-2 bg-lime-400" ></div>
                    </h1>

                    <h1 className="flex flex-row items-center justify-center text-3xl text-yellow-300 font-semibold">
                        <img className="h-16 w-16" src="https://www.agria-industrie.com.tn/wp-content/uploads/2023/04/icone-bistumilant-03-300x300.png" />
                        Biostimulant
                    </h1>
                    <ul className="px-5 gap-2 flex flex-col text-black/60 mt-2">
                        <li className="  bg-lime-400/40 hover:bg-lime-400 ease-in-out duration-200 w-max hover:text-white px-4 rounded-full">Soufre</li>
                        <li className="bg-lime-400/40 hover:bg-lime-400 ease-in-out duration-200 w-max hover:text-white px-4 rounded-full">Soufre + Cuivre</li>
                        <li className="bg-lime-400/40 hover:bg-lime-400 ease-in-out duration-200 w-max hover:text-white px-4 rounded-full">iSoufre + Azote</li>
                        <li className="bg-lime-400/40  hover:bg-lime-400 ease-in-out duration-200 w-max hover:text-white px-4 rounded-full">Soufre + M.organique</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default S1