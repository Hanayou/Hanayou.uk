interface Props {
    href: string;
    //@ts-ignore
    Icon: SVGIcon;
    size?: number;
}

export default function SocialIcon({ href, Icon, size = 2.5 }: Props) {
    return (
        <li className="hover:scale-125 transition-transform duration-300">
            <a
                href={href}
                target="_blank"
                className=" text-gray-400 hover:text-black dark:hover:text-white transition-all"
            >
                <Icon width={`${size}rem`} height={`${size}rem`} />
            </a>
        </li>
    );
}
