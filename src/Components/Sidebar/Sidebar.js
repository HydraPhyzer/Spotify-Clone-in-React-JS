import React from 'react'
import SidebarComponenets from '../SidebarComponents/SidebarComponenets'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Favorite from '@material-ui/icons/Favorite';
import { useSelector} from 'react-redux';

const Sidebar = () => {
  
  let State = useSelector((state) => {
    return state.Reducer;
  })
  let {items:AllPlaylist}=State.Playlist;

  return (
    <div className='Sidebar'>
      <div className="SidebarLogo">
        <img src="/Logo/OnScreenLogo.jpg" alt="" />
      </div>

      <div className="Comp1">
        <SidebarComponenets Icon={HomeIcon} Title="Home" />
        <SidebarComponenets Icon={SearchIcon} Title="Search" />
        <SidebarComponenets Icon={LibraryMusicIcon} Title="Your Library" />
      </div>

      <div className='Comp2'>
        <SidebarComponenets Icon={AddBoxIcon} Title="Create Playlist" />
        <SidebarComponenets Icon={Favorite} Title="Liked Songs" />
      </div>

      <hr className='Row' />

      <div className='Comp3'>
        {
            AllPlaylist?
            AllPlaylist.map((Single,Ind) => {
              return(
                <SidebarComponenets PID={Single.id} key={Ind} Title={Single.name} />
              )
            }):""
        }
      </div>
    </div>
  )
}

export default Sidebar