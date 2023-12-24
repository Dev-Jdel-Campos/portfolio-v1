interface TitleProps{
    title: string
}

export default function Skill({ title }: Readonly<TitleProps>) {

    return (
        <div className="border-[1px] border-brand-text py-1 px-3 rounded-md">
            <h3 className="font-semibold text-brand-primary mobile:text-xs"> {title} </h3>
        </div>
    );
};