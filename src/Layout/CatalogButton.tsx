import React from "react"
import Link from "next/link"
import {ButtonHTMLAttributes} from "react"


interface CatalogButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    href:string
}

const CatalogButton:React.FC<CatalogButtonProps>=({href,...rest})=>{
    return(
        <Link href={href}>
            <button {...rest} className="inline-flex items-center px-6 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Catalog
            </button>
        </Link>
    )
}
export default CatalogButton