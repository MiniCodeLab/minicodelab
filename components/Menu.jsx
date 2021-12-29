import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ColorMode = dynamic(() => import("./ColorMode"), {
    ssr: false,
});

const Menu = () => {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a><Image src="/icon-flask.png" alt="Flask" width={50} height={50} /></a>
                </Link>
            </li>
            <li>
                <Link href="/feed">
                    <a>Feed</a>
                </Link>
            </li>
            <li>
                <Link href="/calendar">
                    <a>Calendar</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <ColorMode />
            </li>
        </ul>
    )
}

export default Menu
