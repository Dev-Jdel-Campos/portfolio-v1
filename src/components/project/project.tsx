'use client';

import Link from 'next/link';
import { LiaGithub } from 'react-icons/lia'
import { SiAirplayvideo } from 'react-icons/si';


export default function Project() {
    return (
        <div id="project" className=" flex flex-col items-center py-[90px] mobile:px-4 tablet:px-16 px-20 gap-8 bg-brand-background">
            <div className=" flex flex-row items-baseline justify-between w-full">
                <h3 className="font-semibold text-xl decoration-brand-text text-brand-primary"> Meus Projetos </h3>
            </div>
            <div className="flex w-full flex-wrap justify-center gap-7">
                    <div className='mobile-w-full tablet:w-full w-[555px] mobile:px-4 border-2 border-text-color-masala-400 p-8 pt-16 flex flex-col gap-4 rounded-2xl relative'>
                        <div className='flex flex-row w-full items-center justify-end gap-10 absolute top-8 right-8'>
                            <Link href="https://github.com/Dev-Jdel-Campos/portfolio-v1" target="_blank">
                                <LiaGithub className='text-2xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center gap-8'>
                            <div className="flex gap-2 justify-center relative">
                                <h3 className='text-justify font-semibold text-xl z-20 text-brand-primary'> My Portfolio </h3>
                            </div>
                            <p className='text-justify text-sm text-brand-text'>Nesse projeto, procurei criar uma experiência simples e minimalista, transmitindo meu estilo e nível de trabalho. Evitei a sobrecarga visual mantendo uma abordagem limpa.</p>
                            <div className='flex w-full flex-wrap justify-center gap-4 text-justify text-sm italic font-bold text-brand-primary'>
                                <p >React.js</p>
                                <p >Next.js</p>
                                <p >Tailwind CSS</p>
                                <p >Typescript</p>
                                <p >HTML</p>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-w-full tablet:w-full w-[555px] mobile:px-4  border-2 border-text-color-masala-400 p-8 pt-16 flex flex-col gap-4 rounded-2xl relative'>
                        <div className='flex flex-row w-full items-center justify-end gap-10 absolute top-8 right-8'>
                            <Link href="https://github.com/WeGreen/WeGreen_ProjetoFinal.git" target="_blank">
                                <LiaGithub className='text-2xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                            <Link href="https://we-green-projeto-final.vercel.app/" target="_blank">
                                <SiAirplayvideo className=' text-xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center gap-8'>
                            <div className="flex gap-2 justify-center relative">
                                <h3 className='text-justify font-semibold text-xl z-20 text-brand-primary'> WeGreen </h3>
                            </div>
                            <p className='text-justify text-sm text-brand-text'>Desempenhei o papel de Scrum Master na criação de um sistema de gerenciamento para uma horta comunitária, incluindo um blog educacional.</p>
                            <div className='flex w-full flex-wrap justify-center gap-4 text-justify text-sm italic font-bold text-brand-primary'>
                                <p >React.js</p>
                                <p >Axios</p>
                                <p >Styled-Components</p>
                                <p >Typescript</p>
                                <p >Zod</p>
                                <p >React-Toastify</p>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-w-full tablet:w-full w-[555px] mobile:px-4  border-2 border-text-color-masala-400 p-8 pt-16 flex flex-col gap-4 rounded-2xl relative'>
                        <div className='flex flex-row w-full items-center justify-end gap-10 absolute top-8 right-8'>
                            <Link href="https://github.com/Kenzie-Academy-Brasil-Developers/kenzie-burguer-v2-template-jdel-campos.git" target="_blank" >
                                <LiaGithub className='text-2xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                            <Link href="https://kenzie-burguer-v2-template-jdel-campos.vercel.app/" target="_blank" >
                                <SiAirplayvideo className=' text-xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center gap-8'>
                            <div className="flex gap-2 justify-center relative">
                                <h3 className='text-justify font-semibold text-xl z-20 text-brand-primary'> Kenzie Burger V2 </h3>
                            </div>
                            <p className='text-justify text-sm text-brand-text'>Essa foi a segunda versão do Kenzie Burger, na qual o sistema de login e verificação de token para navegação do cliente foi implementado.</p>
                            <div className='flex w-full flex-wrap justify-center gap-4 text-justify text-sm italic font-bold text-brand-primary'>
                                <p >React.js</p>
                                <p >Axios</p>
                                <p >Styled-Components</p>
                                <p >Typescript</p>
                                <p >JWT-decode</p>
                                <p >React-icons</p>
                                <p >React-Toastify</p>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-w-full tablet:w-full w-[555px] mobile:px-4  border-2 border-text-color-masala-400 p-8 pt-16 flex flex-col gap-4 rounded-2xl relative'>
                        <div className='flex flex-row w-full items-center justify-end gap-10 absolute top-8 right-8'>
                            <Link href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-jdel-campos.git" target="_blank" >
                                <LiaGithub className='text-2xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                            <Link href="https://react-entrega-kenzie-hub-jdel-campos.vercel.app/" target="_blank" >
                                <SiAirplayvideo className=' text-xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center gap-8'>
                            <div className="flex gap-2 justify-center relative">
                                <h3 className='text-justify font-semibold text-xl z-20 text-brand-primary'> Kenzie Hub </h3>
                            </div>
                            <p className='text-justify text-sm text-brand-text'>Desenvolvi um sistema de controle de registro educacional, permitindo que as habilidades e os níveis de experiência dos alunos fossem registrados.</p>
                            <div className='flex w-full flex-wrap justify-center gap-4 text-justify text-sm italic font-bold text-brand-primary'>
                                <p >React.js</p>
                                <p >Axios</p>
                                <p >Styled-components</p>
                                <p >Typescript</p>
                                <p >Zod</p>
                                <p >JWT-decode</p>
                                <p >React-Toastify</p>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-w-full tablet:w-full w-[555px] mobile:px-4  border-2 border-text-color-masala-400 p-8 pt-16 flex flex-col gap-4 rounded-2xl relative'>
                        <div className='flex flex-row w-full items-center justify-end gap-10 absolute top-8 right-8'>
                            <Link href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie-jdel_campos.git" target="_blank" >
                                <LiaGithub className='text-2xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                            <Link href="https://react-entrega-s1-template-nu-kenzie-jdel-campos.vercel.app/" target="_blank" >
                                <SiAirplayvideo className=' text-xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center gap-8'>
                            <div className="flex gap-2 justify-center relative">
                                <h3 className='text-justify font-semibold text-xl z-20 text-brand-primary'> NuKenzie </h3>
                            </div>
                            <p className='text-justify text-sm text-brand-text'>Criei um sistema de controle financeiro para gerenciar minhas receitas e despesas.</p>
                            <div className='flex w-full flex-wrap justify-center gap-4 text-justify text-sm italic font-bold text-brand-primary'>
                                <p >React.js</p>
                                <p >React-dom</p>
                                <p >Uuid</p>
                                <p >Typescript</p>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-w-full tablet:w-full w-[555px] mobile:px-4  border-2 border-text-color-masala-400 p-8 pt-16 flex flex-col gap-4 rounded-2xl relative'>
                        <div className='flex flex-row w-full items-center justify-end gap-10 absolute top-8 right-8'>
                            <Link href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-template-hamburgueria-da-kenzie-jdel-campos.git" target="_blank" >
                                <LiaGithub className='text-2xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                            <Link href="https://react-entrega-template-hamburgueria-da-kenzie-jdel-campos.vercel.app/" target="_blank" >
                                <SiAirplayvideo className=' text-xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center gap-8'>
                            <div className="flex gap-2 justify-center relative">
                                <h3 className='text-justify font-semibold text-xl z-20 text-brand-primary'> Kenzie&apos;s Hamburger </h3>
                            </div>
                            <p className='text-justify text-sm text-brand-text'>A primeira parte do projeto Kenzie Hamburger foi desenvolvida, onde todo o layout e a lógica principal foram desenvolvidos.</p>
                            <div className='flex w-full flex-wrap justify-center gap-4 text-justify text-sm italic font-bold text-brand-primary'>
                                <p >React.js</p>
                                <p >Axios</p>
                                <p >Styled-components</p>
                                <p >Typescript</p>
                                <p >React-Toastify</p>
                                <p >Uuid</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};