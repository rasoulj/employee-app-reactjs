function Header({ title }: { title?: string }) {
    if (!title) return undefined;
    return (
        <header className="sticky top-0 z-50 w-full h-14 p-4 bg-sky-500 justify-start items-center gap-4 ">
            <div className=" text-white text-lg font-medium">{title}</div>
        </header>
    )
}

export default Header