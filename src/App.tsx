import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Navbar from './components/Navbar'
import { ItemPage } from './pages/item-page'
import { MainPage } from './pages/main-page'

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<ItemPage />} />
      </Routes>
    </div>
  );
}

export default App
