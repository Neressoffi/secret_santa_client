import React, {useRef, useState} from "react";
import '../assets/styles/CustomAccordion.css'
import CustomDropdown from "./CustomDropdown";

interface CustomAccordionProps {
    item: any,
    isReduce: boolean
}

function CustomAccordion(props: CustomAccordionProps) {
    const {item, isReduce} = props;
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    let ref = useRef<HTMLDivElement>(null)

    return (
        <div className="wrap-accordion" ref={ref}>
            <button
                className={"toggle-button"}
                onClick={toggle}
                type="button"
                style={{width: isReduce ? 'auto' : '100%'}}
            >
                <span className='toggle-icon'>{item.icon}</span>
                {!isReduce &&
                    <span className='toggle-title'>{item.libelle}</span>
                }
            </button>
            {/*{isShowing &&*/}
            <CustomDropdown
                isReduce={isReduce}
                parent={item.libelle}
                pages={item.pages}
                categories={item.categories}
            />
            {/*}*/}

        </div>
    )
}

export default CustomAccordion;
