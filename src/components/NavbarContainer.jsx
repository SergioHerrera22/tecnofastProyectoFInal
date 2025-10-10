import { useEffect, useState } from 'react'
import { getCategories } from '../firebase/db'
import NavBar from './NavBar'

function NavbarContainer () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then(data => setCategories(data))
  }, [])
  
  return <NavBar categories={categories} />
}

export default NavbarContainer
