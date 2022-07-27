import React, { useCallback, useState } from 'react'
import throttle from 'lodash/throttle'

interface Props {
    onChange: (value: string) => void
}

const Search: React.FC<Props> = ({ onChange }) => {
    const [value, setValue] = useState<string>('')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const changeThrottle = useCallback(throttle((value: string) => onChange(value), 1000), [onChange])

    const onHandleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        changeThrottle(e.target.value)
    }, [setValue, changeThrottle])

    return (
        <div className='flex-grow-1'>
            <input
                type="text"
                className="form-control"
                placeholder='search beer...'
                value={value}
                onChange={onHandleChange} />
        </div>
    )
}

export default React.memo(Search)