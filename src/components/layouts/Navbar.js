import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from '../../assets/images/pngegg(4).png'
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx:trigger?
        {
            backgroundColor:"rgba(0,0,0,0.6)"
        }
        :
        {
            backgroundColor:"transparent"
        }
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  return (
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <img style={{width:"3vw",marginTop:"1vh"}} src={Logo} />
            <Typography variant="h6" component="div">
            &nbsp;&nbsp;Paladice
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
  );
}