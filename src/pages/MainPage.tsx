import React, { useCallback, useEffect } from 'react'
import BeerList from '../components/BeerList'
import Pagination from '../components/Pagination'
import Search from '../components/Search'
import Select from '../components/Select'
import Spinner from '../components/Spinner'
import { useAppDispatch, useAppSelector } from '../store'
import { loadBeer } from '../store/beer'
import { changePage, changeQuery, changeLimit } from '../store/beer/slice'

const MainPage: React.FC = () => {
    const { list, loading, error } = useAppSelector((state) => ({
        list: state.beer.list,
        loading: state.beer.loading,
        error: state.beer.error,
    }))
    const params = useAppSelector((state) => ({
        page: state.beer.page,
        per_page: state.beer.limit,
        beer_name: state.beer.query
    }))
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(loadBeer(params))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, params.page, params.per_page, params.beer_name])

    const onPage = useCallback((page: number) => {
        dispatch(changePage(page))
    }, [dispatch])

    const onSearch = useCallback((value: string) => {
        dispatch(changeQuery(value))
    }, [dispatch])

    const onLimit = useCallback((value: number) => {
        dispatch(changeLimit(value))
    }, [dispatch])

    return (
        <div>
            <h3>The best world's beer</h3>
            <div className='d-flex gap-2'>
                <Search onChange={onSearch} />
                <Select value={params.per_page} onChange={onLimit} />
            </div>
            <BeerList items={list} />
            <Pagination page={params.page} limit={params.per_page} onChange={onPage} />
            {loading && <Spinner />}
            {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
    )
}

export default MainPage