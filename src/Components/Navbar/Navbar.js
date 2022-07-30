import React from 'react'
import './Navbar.css'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useSelector } from 'react-redux'
const Navbar = () => {

  let State=useSelector((state)=>
  {
    return state.Reducer;
  })
  return (
    <div className='Navbar'>
      <div className="Part1">
        <ChevronLeftIcon className='Icon'/>
        <ChevronRightIcon className='Icon'/>
      </div>
      <div className="Part2">
        {State.User.images?<img src={State?.User?.images[0]?.url} alt="User Name" />:""}
        <p>{State.User.display_name}</p>
      </div>
    </div>
  )
}

export default Navbar