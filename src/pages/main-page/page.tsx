import React, { useCallback, useEffect } from 'react'
import BeerList from '../../components/BeerList'
import Pagination from '../../components/Pagination'
import Search from '../../components/Search'
import Spinner from '../../components/Spinner'
import { useAppDispatch, useAppSelector } from '../../store'
import { loadBeer } from '../../store/beer'
import { changePage, changeQuery } from '../../store/beer/slice'

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

    return (
        <Spinner active={loading}>
            <h3>The best world's beer</h3>
            <div>
                <Search onChange={onSearch}/>
            </div>
            <BeerList items={list} />
            <Pagination page={params.page} limit={params.per_page} onChange={onPage} />
            {error && <div className="alert alert-danger mt-3">{error}</div>}
        </Spinner>
    )
}

export default MainPage