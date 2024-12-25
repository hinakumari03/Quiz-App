import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../../style/HeaderStyle.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMenuOpen(open);
  };

  const menuItems = [
    { text: 'Manifesto', path: '/' },
    { text: 'Team', path: '/team' },
    { text: 'News', path: '/news' },
    { text: 'Jobs', path: '/jobs' },
    { text: 'About us', path: '/about' },
  ];

  return (
    <Box>
      <AppBar className="nav" sx={{ backgroundColor: '#333333' }}>
        <Toolbar>
          
          <Typography variant="h6" className="bro" sx={{ color: '#F75C50', flexGrow: 1 }}>
            Brocast
          </Typography>

          
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleMenu(true)}
            aria-label="open menu"
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          
          <Drawer
            anchor="right"
            open={menuOpen}
            onClose={toggleMenu(false)}
            onClick={toggleMenu(false)}
          >
            <List>
              {menuItems.map((item) => (
                <ListItem button key={item.text} component={Link} to={item.path}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Drawer>

          
          <Box
            className="navigation-menu"
            sx={{
              display: { xs: 'none', sm: 'flex' },
              '& ul': { display: 'flex', listStyle: 'none', margin: 0, padding: 0 },
              '& li': { margin: '0 15px' },
              '& a': {
                textDecoration: 'none',
                color: '#ffffff',
                '&:hover': { color: '#F75C50' },
              },
            }}
          >
            <ul>
              {menuItems.map((item) => (
                <li key={item.text}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
