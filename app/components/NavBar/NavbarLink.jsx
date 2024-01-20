import Link from "next/link";
import {usePathname} from "next/navigation";

const NavbarLink = ({children,link})=>{
    const pathname = usePathname();


    return (
      <Link href={link} className={`w-full sm:w-24 text-center text-gray-600 dark:text-gray-100 ${pathname===link?'bg-[#FF0060] text-white font-bold':''} rounded hover:bg-gray-400 p-1`} aria-current="page">
          {children}
      </Link>
    );
}

export default NavbarLink;