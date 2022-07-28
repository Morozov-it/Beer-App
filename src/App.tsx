import React, { useCallback, useEffect, useState } from 'react'
import styles from './styles/App.module.scss'
import BasketModal from './components/BasketModal'
import Navbar from './components/Navbar'
import { useAppDispatch } from './store'
import { loadBasket } from './store/basket/actions'
import Router from './pages/Router'

const App: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const openModal = useCallback(() => {
    setVisible(true)
    document.body.style.overflow = 'hidden'
  }, [])
  const closeModal = useCallback(() => {
    setVisible(false)
    document.body.style.overflow = 'unset'
  }, [])

  useEffect(() => {
    dispatch(loadBasket())
  }, [dispatch])

  return (
    <div className={styles.app}>
      <Navbar openModal={openModal} />
      <Router />
      {visible && <BasketModal closeModal={closeModal} />}
    </div>
  )
}

export default App
