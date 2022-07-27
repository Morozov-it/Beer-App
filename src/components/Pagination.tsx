import React, { useCallback } from 'react'

interface Props {
    page: number
    limit: number
    onChange: (page: number) => void
    totalCount?: number
}

const Pagination: React.FC<Props> = ({ page, limit, onChange, totalCount}) => {
    //TODO: add to server's response total-count
    const length = Math.ceil((totalCount ? totalCount : 250) / Math.max(1, limit))
    const start = Math.max(page - 2, 1)
    const end = Math.min(start + 4, length)

    let items = []

    if (start > 1){
        items.push(1)
        if (start > 2) items.push(null)
    }

    for (let page = start; page <= end; page++) items.push(page)

    if (end < length){
        if (end < length - 1) items.push(null)
        items.push(length)
    }

    const onClick = useCallback((page: number) => {
        return () => onChange(page)
    }, [onChange])

    return (
        <nav className="mt-2 mb-2 d-flex justify-content-end">
            <ul className="pagination">
                {items.map((number, index) => 
                    <li key={index}
                        className={`page-item ${number === page ? 'active' : null}`}
                        onClick={number ? onClick(number) : () => {}}>
                        <span className="page-link">{number ?? '...'}</span>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default React.memo(Pagination)