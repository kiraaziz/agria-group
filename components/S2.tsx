const S2 = () => {

    return (
        <div style={{ backgroundImage: "url(/images/8.webp)", backgroundSize: "100%", backgroundRepeat: "no-repeat" }} className="w-full bg-cover h-[70svh] flex items-center justify-center p-10 bg-lime-100">
            <div className="w-full max-w-2xl p-8 bg-lime-100/10 backdrop-blur-lg rounded-xl flex flex-col gap-2  border-t-8 border-lime-400 hover:scale-110 ease-in-out duration-200">
                <h1 className="text-3xl text-white font-extrabold">Les engrais…</h1>
                <h1 className="text-lg font-semibold text-white">C’est notre métier !</h1>
                <p className="text-sm font-light text-black lg:text-white/60">
                    Depuis sa fondation en 2010 AGRIA GROUP s’est lancé dans le développement d’une nouvelle approche de fertilisation et de défense des cultures. En effet, l’introduction d’une nouvelle génération de produits « BIO » fortifiants et stimulateurs des autodéfenses de la plante on permit de donner à l’agriculture une nouvelle opportunité de développement durable... En 2012 le groupe à lancer une unité de production d’engrais à la pointe de la technique et et apportant des innovations jusque là peu reconnues. L’exemple de l’application des organo-minéraux à haute stabilité en fait preuve.
                </p>
                <a href="" className="w-44 hover:underline text-center rounded-full mt-2  text-white px-5 py-2 bg-lime-400 hover:w-full ease-in-out duration-200">A PROPOS</a>
            </div>
        </div>
    )
}

export default S2