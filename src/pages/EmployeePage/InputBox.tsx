
function Error({ message }: { message?: string }) {
    return !message ? <div className="mb-8" /> : <span className=" mb-6 flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
        {message}
    </span>

}

function InputBox({ children, icon, errorMessage }: { children: React.ReactNode, icon: string, errorMessage?: string }) {
    
    return <>
        <div className={`relative border-neutral-200`}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <img src={icon} />
            </div>
            {children}
        </div>
        <Error message={errorMessage} />
    </>
}

export default InputBox;