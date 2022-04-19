import React from 'react';

import {
Nav,
NavLink,
Bars,
NavMenu
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/overview' activeStyle>
			Overview
		</NavLink>
		<NavLink to='/implementation' activeStyle>
			Implementation
		</NavLink>
		<NavLink to='/validation' activeStyle>
			Validation
		</NavLink>
		<NavLink to='/charts' activeStyle>
			Charts
		</NavLink>
		<NavLink to='/data' activeStyle>
			Data
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
