const getShortString = (str: string | null | undefined, len = 50) => {
    if (str) return str.length > len ? str.substr(0, len) + '...' : str
}

export default getShortString
