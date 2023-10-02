import { useState, useRef } from "react";
import Draggable from "react-draggable";

import "./swipe-list.css";

function ItemDragable({ children, action }) {
    const [isDrag, setIsDrag] = useState(false)
    const [isActionOpen, setIsActionOpen] = useState(false)
    const [percent, setPercent] = useState(0)
    const [left, setLeft] = useState(0)

    const itemRef = useRef();
    const actionRef = useRef();

    console.debug(isActionOpen);

    const handleStart = () => {
        setIsDrag(true)
    }

    const handleClick = () => {
        console.log(isDrag, left)
        if (left !== 0) {
            setIsActionOpen(false)
            setLeft(0)
        } else {
            console.log('click')
        }
    }

    const handleStop = () => {
        if (percent > 30) {
            setIsActionOpen(true)
            const w = actionRef?.current?.offsetWidth
            const leftWithAction = left > 0 ? w : w * -1
            setLeft(leftWithAction)
        } else {
            setLeft(0)
        }

        setIsDrag(false)
    }

    const handleDrag = (e, data) => {
        // e.preventDefault();
        const w = itemRef.current.offsetWidth
        const x = data.x < 0 ? data.x * -1 : data.x
        const p = x / w * 100

        setPercent(p)
        setLeft(data.x)
    }
    return <>
        <div className='box-action' ref={actionRef}>
            {action}
        </div>
        <div className='item-group'>
            <Draggable
                axis="x"
                handle=".item"
                defaultPosition={{ x: 0, y: 0 }}
                position={{ x: left, y: 0 }}
                onStart={handleStart}
                onDrag={handleDrag}
                onStop={handleStop}
            >
                <div
                    ref={itemRef}
                    className='item'
                    style={{ transform: `translate3d(${left}px, 0, 0px)` }}
                    onClick={handleClick}
                >{children}</div>
            </Draggable>
        </div>
    </>
}

export default ItemDragable;