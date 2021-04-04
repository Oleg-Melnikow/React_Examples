import React, {KeyboardEvent, useEffect, useState} from 'react';
import style from "./Select.module.css"


type ItemType = {
    value: string
    title: string
}

export type SelectPropsType = {
    value?: string,
    onChange: (value: string) => void,
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState<boolean>(false);
    const [hoverItem, setHoverItem] = useState(props.value)

    const selectItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoverItem);

    useEffect(() => {
        setHoverItem(props.value);
    }, [props.value])

    const showItems = () => setActive(!active);
    const onItemClick = (value: string) => {
        props.onChange(value);
        showItems();
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key ===  "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoverItem) {
                    const nextElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (nextElement) {
                        props.onChange(nextElement.value);
                    }
                    return;
                }
            }
            if(!selectItem){
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key ===  "Escape"){
            setActive(false);
        }
            }

    return (
        <>
            <select>
                <option value="1">Minsk</option>
                <option value="2">Kiev</option>
                <option value="3">Warsaw</option>
            </select>
            <div className={style.select} tabIndex={0} onKeyUp={onKeyUp}>
                <h3 onClick={showItems}>{selectItem && selectItem.title}</h3>
                {active && <div className={style.items}>
                    {props.items.map(i => <div className={style.item + " " + (hoveredItem === i ? style.selected : "")}
                                               onMouseEnter={() => setHoverItem(i.value)}
                                               key={`${i.value}-${i.title}`}
                                               onClick={() => onItemClick(i.value)}>{i.title}</div>)}
                </div>}
            </div>

        </>
    )
}