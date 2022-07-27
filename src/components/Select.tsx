import React from 'react'

interface Props {
    value: number
    onChange: (value: number) => void
}

const Select: React.FC<Props> = ({ value, onChange }) => {
    return (
        <div className='d-flex align-items-center gap-1'>
            Limit
            <select className="form-select" defaultValue={value} onChange={(e) => onChange(Number(e.target.value))}>
                <option value={12}>12</option>
                <option value={10}>10</option>
                <option value={4}>4</option>
            </select>
        </div>
    )
}

export default React.memo(Select)