export default interface InputFormInterface {
    id: any,
    name: string,
    onChange: any,
    error?: string,
    type?: string,
    label?: string,
    containerClass?: string,
    defaultCss?: string,
    placeholder?: string,
    className?: string,
    value?: any,
    ref?: any,
    disabled?: boolean,
    useLabel?: boolean,
    showErrorText?: boolean,
    onKeyPress?: any,
    onFocus?: any,
    onPast?: any,
    isRequired?: boolean,
}

export interface InputChoiceInterface {
    id: number;
    name: string;
    picture?: string;
    label?: string;
}