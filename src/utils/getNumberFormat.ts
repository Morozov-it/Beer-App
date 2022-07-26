const getNumberFormat = (value: number, options = {}) => {
    return new Intl.NumberFormat('ru-RU', options).format(value)
}

export default getNumberFormat