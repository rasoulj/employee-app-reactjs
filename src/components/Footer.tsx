function Footer({ children }: { children: React.ReactNode | undefined }) {
    return <footer className="sticky bottom-0 w-full h-16 bg-white border-t-2 border-zinc-100">
        <div>
            {children}
        </div>
    </footer>
}

export default Footer