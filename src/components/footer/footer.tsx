'user client'

import { LiaCopyright, LiaGithub, LiaEnvelope, LiaWhatsapp, LiaLinkedinIn  } from 'react-icons/lia';

export default function Footer() {    
    return (
        <div className="px-20 mobile:px-0 tablet:px-16 mobile:py-4 bg-brand-background">
            <div className="mobile:flex-col mobile:py-8 mobile:h-[140px] flex flex-row justify-between items-center h-[75px] border-t-2 border-text-color-masala-400 text-brand-primary">
                <div className="flex flex-row items-center gap-2">
                    <LiaCopyright className="text-base"/>
                    <p className="text-sm"> 2023 - Designed & Built by Jardel Campos </p>
                </div>
                <div className="flex flex-row gap-4 text-2xl text-neutral-color-silver-chalice-900 ">
                    <a href="https://github.com/Jdel-Campos" target="_blank"> <LiaGithub className="hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500"/> </a>
                    <a href="https://www.linkedin.com/in/jdel-campos/" target="_blank"> <LiaLinkedinIn className="hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500"/> </a>
                    <a href="https://linkwhats.app/e732a5" target="_blank"> <LiaWhatsapp className="hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500"/> </a>
                    <a href="mailto:campos.workspace@gmail.com" target="_blank"> <LiaEnvelope className="hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500"/> </a>
                </div>
            </div>
        </div>
    );
};