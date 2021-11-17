import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icons from '@material-ui/icons/MoreVert';
import '../Repository/DropDown.css'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    marginTop:'0.5rem',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:hover': {
      //background: #2A44AF;

      backgroundColor: '#3455DB',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{width:'163px',display:'flex',flexDirection:'co' }}>
      <div
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="secondary"
        onClick={handleClick}>
        <div id="vertical-icons-container"> 
            <Icons color="action" fontSize="small" /> 
        </div>
      </div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose} 
        >
          <div id="drop-down-container">
            <a href="/#/addcoursepage" style={{textDecoration:'none',color:'#767676'}}>
              <StyledMenuItem className="drop-down-list-item">
                  <ListItemText primary="Edit"  />
              </StyledMenuItem>
            </a>
            <a href="/#/addcoursepage" style={{textDecoration:'none',color:'#767676'}}>
            <StyledMenuItem className="drop-down-list-item">
              <ListItemText primary="Delete"  />
            </StyledMenuItem>
            </a>
            <a href="/#/addcoursepage" style={{textDecoration:'none',color:'#767676'}}>
              <StyledMenuItem className="drop-down-list-item">
                  <ListItemText primary="Move up"  />
              </StyledMenuItem>
            </a>
            <a href="/#/addcoursepage" style={{textDecoration:'none',color:'#767676'}}>
              <StyledMenuItem className="drop-down-list-item">
                  <ListItemText primary="Move Down"  />
              </StyledMenuItem>
            </a>
          </div> 
      </StyledMenu>
    </div>
  );
}