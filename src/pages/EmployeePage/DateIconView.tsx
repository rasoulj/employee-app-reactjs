import dateIcon from "../../assets/icons/date.svg"
import { formatDate } from "../../utils/date"
import { classNames } from "./consts"

function DateIconView({ value }: { value?: Date }) {
    const cn = !value ? "text-neutral-400 text-sm font-normal self-center leading-tight" : "text-zinc-800 text-sm font-normal self-center leading-tight";

    return <>
        <img src={dateIcon} className={classNames.icon} />
        <div className={cn}>{formatDate(value)}</div>
    </>
}

export default DateIconView