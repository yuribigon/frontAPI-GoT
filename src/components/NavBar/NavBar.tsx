import {
	AppBar,
	Button,
	Container,
	Toolbar,
	Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
	const navigate = useNavigate();
	return (
		<React.Fragment>
			<Container sx={{ flexGrow: 1 }}>
				<AppBar position="fixed" color="secondary">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Game of Thrones - Characters
						</Typography>
						<Button variant="contained" color="primary" onClick={()=>navigate('/')}>
							Home
						</Button>
					</Toolbar>
				</AppBar>
			</Container>
		</React.Fragment>
	);
};

export default Navbar;