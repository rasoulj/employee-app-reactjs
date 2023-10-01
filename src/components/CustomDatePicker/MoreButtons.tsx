import { formatDate, isSameDay, lessThan, nextDay, nextDayName } from "../../utils/date";

function MoreButton({ title, onClick, selected, disabled }: { title: string, onClick: () => void, selected?: boolean, disabled?: boolean }) {
    let cn = "text-center text-sm font-normal leading-tight h-9 rounded justify-center items-center inline-flex ";
    cn += selected ? "text-white bg-sky-500 " : "text-sky-500 bg-blue-50 "
        
    return <button disabled={disabled} className={cn} onClick={onClick}>
        {title}
    </button>
}

function MoreButtons({ fromDate, onChange, value }: { fromDate?: Date, onChange: (value?: Date) => void, value?: Date }) {
    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            {!fromDate ? <>
                <MoreButton
                    title="Today"
                    onClick={() => onChange(new Date())}
                    selected={isSameDay(new Date(), value)}
                />
                <MoreButton
                    title={`Next ${nextDayName(1)}`}
                    onClick={() => onChange(nextDay(1))}
                    selected={isSameDay(nextDay(1), value)}
                />
                <MoreButton
                    title={`Next ${nextDayName(2)}`}
                    onClick={() => onChange(nextDay(2))}
                    selected={isSameDay(nextDay(2), value)}
                />
                <MoreButton
                    title="After 1 week"
                    onClick={() => onChange(nextDay(7))}
                    selected={isSameDay(nextDay(7), value)}
                />
            </> : <>
                <MoreButton
                    title={formatDate(undefined)}
                    onClick={() => onChange(undefined)}
                    selected={!value}
                />

                <MoreButton
                    disabled={lessThan(new Date(), fromDate ?? new Date(1970))}
                    title="Today"
                    onClick={() => onChange(new Date())}
                    selected={isSameDay(new Date(), value)}
                    
                />
            </>}
        </div>
    )
}

export default MoreButtons;