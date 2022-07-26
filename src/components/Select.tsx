import React from 'react'

const Select = () => {
    return (
        <div>
            <select className="form-select" defaultValue={10}>
                <option value={10}>10</option>
                <option value={4}>4</option>
            </select>
        </div>
    )
}

export default Select