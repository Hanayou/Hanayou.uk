import Image from "next/image";

export default function HomeBackgroundImage() {
    return (
        <div className="absolute w-[50%] h-screen top-0 right-0 invisible xl:visible overflow-hidden">
            <Image
                src="/japan.jpg"
                fill={true}
                alt="FILL IN LATER"
                className="z-20 object-cover blur-[2px]"
            />
        </div>
    );
}
