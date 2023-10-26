import Link from "next/link"
import { FaFilePdf, FaBook } from 'react-icons/fa';

const S4 = () => {

    return (
        <div className="px-8 pb-10 pt-3 w-full flex flex-col gap-3">
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5">
                <div className="overflow-hidden flex flex-col px-4 py-7 rounded-lg items-center group justify-center group relative">
                    <div className="w-10 bg-lime-400/30 scale-0 h-10 group-hover:scale-[20] rounded-full -z-10 absolute ease-in-out duration-200 " />
                    <img src="/images/6.webp" />
                    <div className="w-full flex flex-row gap-2">
                        <Link href="https://agria-group.com.tn/wp-content/uploads/2023/05/Catalog_AGRiA-Group.pdf" className="flex flex-row items-center justify-center gap-3 hover:scale-105 ease-in-out duration-150 flex-1 p-3 bg-lime-400 rounded-lg text-white font-semibold">
                            <FaFilePdf />
                            Catalogue PDF</Link>
                        <Link href="" className="flex flex-row items-center justify-center gap-3 hover:scale-105 ease-in-out duration-150 flex-1 p-3 bg-lime-400 rounded-lg text-white font-semibold">
                            <FaBook />
                            Catalogue en Ligne
                        </Link>
                    </div>
                </div>
                <div className="overflow-hidden flex flex-col px-4 py-7 rounded-lg items-center group justify-center group relative">
                    <div className="w-10 bg-lime-400/30 scale-0 h-10 group-hover:scale-[20] rounded-full -z-10 absolute ease-in-out duration-200 " />
                    <img src="/images/7.webp" />
                    <div className="w-full flex flex-row gap-2">
                        <Link href="https://agria-group.com.tn/Catalogue_agriacereal.pdf" className="flex flex-row items-center justify-center gap-3 hover:scale-105 ease-in-out duration-150 flex-1 p-3 bg-lime-400 rounded-lg text-white font-semibold">
                            <FaFilePdf />
                            Catalogue PDF</Link>
                        <Link href="" className="flex flex-row items-center justify-center gap-3 hover:scale-105 ease-in-out duration-150 flex-1 p-3 bg-lime-400 rounded-lg text-white font-semibold">
                            <FaBook />
                            Catalogue en Ligne
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default S4