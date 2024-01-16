import React from 'react'
import SubAccordionItem from "./SubAccordionItem";
import '../assets/styles//CustomDropdown.css'

interface CustomDropdownProps{
    parent: string,
    categories?: any,
    pages?: any,
    isReduce: boolean,
}
function CustomDropdown(props: CustomDropdownProps) {
    const {parent, categories, pages, isReduce} = props;
    // console.log(categories);
    return (
        <div
            className="wrap-dropdown"
        >
            {
                (categories.length) ? (
                    <ul className="dropdown-container">
                        {categories.map((categorie: any, index: number) => (
                            <SubAccordionItem
                                isReduce={isReduce}
                                grandparent={parent}
                                parent={`${categorie.libelle}-${categorie.id}`}
                                item={categorie}
                                key={`menu-categorie-${index}-${categorie.id}`}
                            />
                        ))}
                    </ul>
                ) : null
            }
        </div>
    )
}

export default CustomDropdown