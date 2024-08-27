import Image from "next/image"
import Link from "next/link"
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const links = [
    { href: "/", name: "Home" },
    { href: "/", name: "Explore" },
    { href: "/", name: "About" },
    { href: "/", name: "Menu" },
    { href: "/", name: "Contact" },
]


const Footer = () => {
  return (
    <footer className='bg-footer bg-cover bg-no-repeat pt-16 relative'>
        <div className="absolute w-full h-full bg-black/[0.90] z-10 top-0"></div>
        <div className="container mx-auto z-20 relative">
            <div className="flex flex-col items-center justify-center gap-14">
                <Link href="/" className="relative w-[120px] h-[50px] mx-auto" >
                <Image src="/assets/logo.svg" fill alt="" className="object-contain"/>
                </Link>
                <nav className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-center">
                    {links.map((link, index) => {
                        return <Link className=" uppercase text-white tracking-widest hover:text-[#A67B5B] transition-all" key={index} href={link.href}>{link.name}</Link>
                    })}
                </nav>
                <ul className="flex text-white text-xl gap-4">
                    <Link href="/" className=" w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-[#A67B5B] transition-all">
                    <FaYoutube/>
                    </Link>
                    <Link href="/" className=" w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-[#A67B5B] transition-all">
                    <FaFacebook/>
                    </Link><Link href="/" className=" w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-[#A67B5B] transition-all">
                    <FaInstagram/>
                    </Link><Link href="/" className=" w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-[#A67B5B] transition-all">
                    <FaTwitter/>
                    </Link>
                </ul>
                <div className=" border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
                    <p>&copy; Copyright 2024 - Blal. All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer