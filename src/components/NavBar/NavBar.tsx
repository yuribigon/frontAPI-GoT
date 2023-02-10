import {
	AppBar,
	Box,
	Button,
	Toolbar,
	Typography,
} from '@mui/material';
import React from 'react';

const Navbar: React.FC = () => {
	return (
		<React.Fragment>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="fixed" color="secondary">
					<Toolbar>
						{/**cresce o elemento */}
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Game of Thrones - Characters
						</Typography>
						<Button variant="contained" color="primary">
							Busca
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</React.Fragment>
	);
};

export default Navbar;