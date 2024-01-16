import React, {useRef, useState} from 'react'
import '../assets/styles/SubAccordionItem.css'
import {AppIcon} from "./icon/AppIcon";
import {useLocation} from "react-router";

interface SubAccordionItemProps {
    item: any,
    grandparent: string,
    parent: string,
    isReduce: boolean,
}

function SubAccordionItem(props: SubAccordionItemProps) {
    const {item, grandparent, parent, isReduce} = props;
    const [isShowing, setIsShowing] = useState(false);
    const [active, setActive] = useState<boolean>(false);
    let ref = useRef<HTMLLIElement>(null)


    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    const splitLink = item?.link?.split("/");
    const handleActive = () => {
        setActive(true)
    }

    var menuItems = document.querySelectorAll(".wrap-sub-accordion");

    menuItems.forEach(function (item) {
        item.addEventListener(
            "click",
            function (e) {
                menuItems.forEach(function (item) {
                    item.classList.remove("active");
                });
                item.classList.add("active");
            },
            false
        );
    });

    return (
        <li className={`wrap-sub-accordion${(active || splitLink && (splitLocation[3] === splitLink[3]) )?' active' : ''}`}
            ref={ref} onClick={()=>handleActive()}
        >
            <a className="sub-accordion-action" href={item.link}>
                <span className='sub-accordion-icon'><AppIcon name={item.icon} size={18}/></span>
                {!isReduce &&
                    <span className='sub-accordion-text'>{item.libelle}</span>
                }
            </a>
        </li>
    )
}

export default SubAccordionItem
