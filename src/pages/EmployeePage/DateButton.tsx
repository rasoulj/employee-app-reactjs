import { useState } from "react";
import CustomDatePicker from "../../components/CustomDatePicker/CustomDatePicker";
import { classNames } from "./consts"
import DateIconView from "./DateIconView";



function DateButton({ value, onChange, fromDate, disabled }: { value?: Date, onChange: (value?: Date) => void, fromDate?: Date, disabled?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);

    return <>
        <CustomDatePicker
            fromDate={fromDate}
            isOpen={isOpen}
            value={value}
            onChange={onChange}
            closeModal={() => setIsOpen(false)}
        />
        <button disabled={disabled} className={classNames.dateBox} onClick={() => setIsOpen(true)}>
            <DateIconView value={value} />
        </button>
    </>
}

export default DateButton;