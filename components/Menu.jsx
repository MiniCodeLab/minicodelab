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
                    <a><Image src="/flask.png" alt="Flask icon" width={50} height={50} /></a>
                </Link>
            </li>
            <li>
                <Link href="/feed">
                <a><Image src="/feed.png" alt="Feed icon" width={50} height={50} /></a>
                </Link>
            </li>
            <li>
                <Link href="/calendar">
                <a><Image src="/calendar.png" alt="Calendar icon" width={50} height={50} /></a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                <a><Image src="/about.png" alt="About icon" width={50} height={50} /></a>
                </Link>
            </li>
            <li>
                <ColorMode />
            </li>
        </ul>
    )
}

export default Menu
