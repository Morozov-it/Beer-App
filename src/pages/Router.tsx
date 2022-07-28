import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Spinner from '../components/Spinner'
const MainPage = React.lazy(() => import('./MainPage'))
const ItemPage = React.lazy(() => import('./ItemPage'))

const Router: React.FC = () => {
    return (
        <div className="container mt-5 pt-3">
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/:id" element={<ItemPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default React.memo(Router)