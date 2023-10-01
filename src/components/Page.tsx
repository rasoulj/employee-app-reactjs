import Footer from "./Footer"
import Header from "./Header"

export default function Page({ children, title, className, footer }: { children: React.ReactNode, title: string, className?: string, footer?: React.ReactNode }) {
    return <div className="flex flex-col h-screen justify-between relative">
        <Header title={title} />
        <main className={`mb-auto h-10 ${className}`}>{children}</main>
        {!!footer && <Footer>
            {footer}
        </Footer>}
        {/* <footer className="h-10 bg-blue-500">Footer</footer> */}
    </div>
    return <div className="w-full relative flex-col max-h-screen ">
        {!!title && <>
            <Header title={title} />
            {/* <div className="h-14" /> */}
        </>}
        <div className={className}>
            {children}
        </div>
        {!!footer && <Footer>
            {footer}
        </Footer>}
    </div>
}