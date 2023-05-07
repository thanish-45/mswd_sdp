import {AppBar,Toolbar,styled} from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
const Header =styled(AppBar)`
background: #111111
`;
const Tabs =styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: inherit;
text-decoration: none;
`
function Navbar() {
  return (
    <div>
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>PIM HOME)</Tabs>
                <Tabs to='/all'>All TEAMS</Tabs>
                <Tabs to='/add'>Add New Team</Tabs>
                <Tabs to='/login'>Log Out</Tabs>
                <Tabs to='/Features'>Features</Tabs>
              

            </Toolbar>
        </Header>
    </div>
  )
}

export default Navbar;