interface Props {
    icon?: React.ReactNode;
    text: string;
}

export default function Button({ icon, text }: Props) {
    return (
        <button className="flex flex-row bg-primary px-8 py-5 gap-5 rounded-xl text-white text-lg max-w-fit items-center">
            {icon}
            {text}
        </button>
    );
}
