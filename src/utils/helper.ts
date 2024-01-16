export const dateToString = (str: Date): string => {
    if (!str) return '';
    const date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
};

export const getPartialDateToString = (str: Date): string => {
    if (!str) return '';
    const date = new Date(str)
    return date.toLocaleString('fr',{month:'short', year:'numeric'})
};

export const HtmlToString = (htmlString: string): string => {
    let plainString = ''
    plainString = htmlString.replace(' </label>', ': ');
    plainString = plainString.replace('</div>', '\n');
    plainString = plainString.replace(/<[^>]+>/g, '');
    return plainString;
}