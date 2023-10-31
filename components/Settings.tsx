import IconSettings from "~icons/uil/cog.jsx";

export default function Settings() {
    return (
        <div className="fixed z-50 bottom-4 right-4 drop-shadow-sm">
            <button className="h-16 w-16 bg-bg1 dark:bg-bg1-dark rounded-full">
                <IconSettings height="2rem" width="2rem" className="m-auto" />
            </button>
        </div>
    );
}
