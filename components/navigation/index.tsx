import { useRouter } from 'next/router'
import Link from 'next/link';
import { ReactNode } from 'react';
import style from "./navigation.module.css"

const LINKS = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    }
];

type NavAnchor = {
    path: string
    children: ReactNode
}

function NavAnchor ({ path, children }: NavAnchor ) {
    return (
        <Link href={path}>
            <a className={style.navAnchor}>{children}</a>
        </Link>
    )
}

export default function Navigation () {
    const { pathname } = useRouter();

    return (
        <nav>
            <ul className={style.list}>
                {LINKS.map( ({name, path}) => (
                    <li key={path}>
                        {path === pathname 
                        ? <span>{name}</span> 
                        : <NavAnchor path={path}>{name}</NavAnchor>}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

