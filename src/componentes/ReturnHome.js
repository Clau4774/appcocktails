import React from 'react'
import { useNavigate } from 'react-router-dom'


const ReturnHome = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }

  return (
    <button onClick={navigateHome}>
      Home
    </button>
  )
}

export default ReturnHome
