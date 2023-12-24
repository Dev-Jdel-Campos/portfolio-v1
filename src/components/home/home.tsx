'use client'

export default function HomePage() {
    return (

        <div id="home" className="mobile:pt-[180px] mobile:pb-[110px] pt-[220px] pb-[150px] mobile:px-4 px-20 h-screen flex justify-center items-center bg-brand-background">
            <div className="flex flex-col justify-between mobile:h-[360px] h-[330px] items-center">
                <div className="flex flex-col gap-10 justify-center items-center">
                    <h2 className="font-bold italic text-5xl mobile:text-3xl sm:text-justify text-brand-primary "> FullStack Developer </h2>
                    <p className="mobile:px-4 px-20 mobile:text-base text-xl mobile:text-justify text-center text-brand-text"> Eu sou <span className="font-semibold text-brand-secondary text-center">Jardel Campos</span>, e estou aqui para mostrar meu trabalho. Se você tiver alguma dúvida ou quiser discutir um projeto, sinta-se à vontade para entrar em contato. Vamos criar algo incrível juntos! </p>
                </div>
                <div>
                    <a href="https://linkwhats.app/e732a5" target="_blank" className="border-[1px] border-brand-secondary py-3 px-8 rounded-full mobile:w-full w-[245px] flex items-center justify-center hover:opacity-75 cursor-pointer">
                        <p className="font-bold mobile:text-base text-lg text-brand-secondary underline decoration-brand-primary italic"> Vamos começar! </p>
                    </a>
                </div>
            </div>
        </div>

    );
};