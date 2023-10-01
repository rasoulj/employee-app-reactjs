import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState} from 'react'
import Footer from '../Footer';
import MonthView from './MonthView';
import DateIconView from '../../pages/EmployeePage/DateIconView';

function CustomDatePicker({ isOpen, value, onChange, closeModal, fromDate }: { isOpen: boolean, value?: Date, onChange: (value: Date | undefined) => void, closeModal: () => void, fromDate?: Date }) {
    const [date, setDate] = useState(value);

    useEffect(() => {
        setDate(value);
    }, [value])

    const onSave = () => {
        if (onChange) onChange(date);
        closeModal();
    }

    const onCancel = () => {
        closeModal();
        setDate(value);
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onCancel}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    

                                    <MonthView
                                        fromDate={fromDate}
                                        value={date}
                                        onChange={setDate}
                                    />

                                    {/* <div className='h-16'></div> */}
                                    <Footer>
                                        <div className="flex flex-1">
                                            <div className="flex flex-1 h-16 justify-around align-bottom">
                                                <div className='flex flex-1 self-center'>
                                                <DateIconView value={date} />
                                                </div>
                                            </div>
                                            <div className="flex flex-1 h-16 justify-around align-bottom">

                                                <button onClick={onCancel} className="w-16 ml-8 h-10 rounded-md bg-sky-50 justify-center self-center" >
                                                    <div className="text-center text-sky-500 text-sm font-medium">Cancel</div>
                                                </button>
                                                <button
                                                    onClick={onSave}
                                                    className="w-16 h-10 rounded-md bg-sky-500 justify-center  self-center"
                                                >
                                                    <div className="text-center text-white text-sm font-medium">Save</div>
                                                </button>
                                            </div>
                                        </div>
                                    </Footer>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CustomDatePicker;