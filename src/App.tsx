import React, { useCallback, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import BasketModal from './components/BasketModal'
import Navbar from './components/Navbar'
import { ItemPage } from './pages/item-page'
import { MainPage } from './pages/main-page'

const App: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const openModal = useCallback(() => {
    setVisible(true)
    document.body.style.overflow = 'hidden'
  }, [])
  const closeModal = useCallback(() => {
    setVisible(false)
    document.body.style.overflow = 'unset'
  }, [])

  return (
    <div className={styles.app}>
      <Navbar openModal={openModal} />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<ItemPage />} />
        </Routes>
      </div>
      {visible && <BasketModal closeModal={closeModal} />}
    </div>
  );
}

export default App
