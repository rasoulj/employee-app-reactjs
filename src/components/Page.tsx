import Footer from "./Footer"
import Header from "./Header"

export default function Page({ children, title, className, footer }: { children: React.ReactNode, title: string, className?: string, footer?: React.ReactNode }) {
    return <div className="flex flex-col h-screen justify-between relative">
        <Header title={title} />
        <main className={`mb-auto h-10 ${className}`}>{children}</main>
        {!!footer && <Footer>
            {footer}
        </Footer>}
    </div>
}