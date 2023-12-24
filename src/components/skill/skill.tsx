'use client'

import { GrDocumentDownload  } from 'react-icons/gr';
import Link from 'next/link';
import Skill from '../card/card';

export default function AboutSkill() {

    return (
        <div id="about_skill" className="flex flex-col justify-around h-full">
                <div className="w-full bg-text-color-masala-50 flex flex-col items-center gap-8">
                    <div className="flex flex-col gap-6 mobile:px-4 mobile:text-sm tablet:px-16 px-20 pt-24 text-justify">
                        <h3 className="font-semibold mobile:text-lg text-xl decoration-brand-text text-brand-primary"> Sobre mim </h3>
                        <p className="text-brand-primary text-justify"> Sou um desenvolvedor Full Stack apaixonado por tecnologia, especializado em React.js, Next.js, Typescript e Python (Django). Minhas habilidades incluem Express, Node.js, Nest.js, Tailwind CSS, Sass, UI Design, CSS e HTML. Gostaria de destacar minha experiência em metodologias ágeis, especialmente Scrum, onde trabalhei como Scrum Master em projetos acadêmicos, garantindo entregas eficazes. Além disso, estou explorando o mundo do design, com foco em UI (User Interface) e Design, reconhecendo a importância fundamental de um design sólido para proporcionar uma experiência excepcional ao usuário. Ao longo de meus estudos, desenvolvi vários projetos, continuando a buscar conhecimento e a expandir meu repertório. </p>
                    </div>
                </div>  
                <div className="w-full bg-text-color-masala-50 flex flex-col items-center gap-8 mobile:pb-10 pb-20">
                    <div className="flex flex-col gap-6 mobile:px-4 tablet:px-16 px-20 pt-24 text-justify">
                        <h3 className="font-semibold mobile:text-lg text-xl decoration-brand-text text-brand-primary"> Habilidades </h3>
                        <div className='w-full flex flex-wrap gap-2'>
                            <Skill title={'JAVASCRIPT'} />
                            <Skill title={'TYPESCRIPT'} />
                            <Skill title={'REACT.JS'} />
                            <Skill title={'CSS'} />
                            <Skill title={'HTML'} />
                            <Skill title={'SASS'} />
                            <Skill title={'NODE.JS'} />
                            <Skill title={'EXPRESS.JS'} />
                            <Skill title={'POSTGRESQL'} />
                            <Skill title={'GIT'} />
                            <Skill title={'PYTHON'} />
                            <Skill title={'TAILWIND'} />
                            <Skill title={'DJANGO'} />
                            <Skill title={'PRISMA'} />
                            <Skill title={'SCRUM'} />
                            <Skill title={'VSCODE'} />
                            <Skill title={'POSTMAN'} />
                            <Skill title={'INSOMNIA'} />
                            <Skill title={'NEST.JS'} />
                            <Skill title={'NEXT.JS'} />
                            <Skill title={'MONGO DB'} />
                            <Skill title={'CYPRESS'} />
                            <Skill title={'ZUSTAND'} />
                            <Skill title={'GITLAB'} />
                            <Skill title={'FIGMA'} />
                            <Skill title={'STYLED-COMPONENTS'} />
                        </div>
                    </div>
                </div> 
                <div className=" flex flex-col items-center mobile:px-8 pt-16 pb-20 bg-text-color-masala-50">
                    <p className="font-semibold mobile:text-sm text-lg underline decoration-brand-text text-brand-text"> Você gostaria de ver o currículo? </p>
                    <div className="flex gap-2 hover:opacity-75">
                            <Link href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:b5e144b8-15fd-3d51-b965-375d4970c7f6" className="mobile:text-xs text-sm font-medium italic text-brand-secondary" target="_blank"> Clique aqui. </Link>
                            <GrDocumentDownload className="text-brand-secondary mobile:text-xs "/>
                    </div>
                </div>
        </div>
    );
};