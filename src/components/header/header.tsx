'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { LiaGithub, LiaLinkedinIn  } from 'react-icons/lia';


export default function SectionHeader() {    
    const [ visualizingNetworks, setVisualizingNetworks ] = useState<boolean>(false);

    const screenCheck = () => {
        const windowWidth = window.innerWidth;
        setVisualizingNetworks(windowWidth > 640);
    };

    useEffect(() => {
        screenCheck();
        window.addEventListener('resize', screenCheck);

        return () => { window.removeEventListener('resize', screenCheck) };
    }, []);

    return (
        <header id='header' className="h-20 w-full flex items-center justify-end mobile:px-4 px-20 border bg-neutral-color-silver-chalice-50 shadow-lg fixed z-50">
                <div className='w-full flex flex-row mobile:justify-center justify-between'>
                    {visualizingNetworks && (
                        <div className="flex flex-row gap-4 text-2xl text-neutral-color-silver-chalice-900 ">
                            <a href="https://github.com/Jdel-Campos" target="_blank"> <LiaGithub className="hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500"/> </a>
                            <a href="https://www.linkedin.com/in/jdel-campos/" target="_blank"> <LiaLinkedinIn className="hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500"/> </a>
                        </div>
                    )}
                    <nav className="flex mobile:justify-center mobile:items-center justify-end items-end z-50">
                        <ul className="flex flex-row gap-8 justify-end mobile:justify-center mobile:items-center items-end text-text-color-masala-500 mobile:text-sm">
                            <li className="border-neutral-color-silver-chalice-50 hover:text-neutral-color-silver-chalice-400 border-b hover:border-neutral-color-silver-chalice-400">
                                <Link href='#home'>
                                    <div> 
                                        <p> Home </p>
                                    </div>
                                </Link>
                            </li>
                            <li className="border-neutral-color-silver-chalice-50 hover:text-neutral-color-silver-chalice-400 border-b hover:border-neutral-color-silver-chalice-400">
                                <Link href='#about_skill'>
                                    <div> 
                                        <p> About me / Skill </p>
                                    </div>
                                </Link>
                            </li>
                            <li className="border-neutral-color-silver-chalice-50 hover:text-neutral-color-silver-chalice-400 border-b hover:border-neutral-color-silver-chalice-400">
                                <Link href='#project'>
                                    <div> 
                                        <p> Projects </p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
        </header>
    );
};