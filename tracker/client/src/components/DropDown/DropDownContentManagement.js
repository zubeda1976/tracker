import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import plusSign from '../../assets/Leading Icon.png'
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    marginTop:'0.5rem',
    color: '#767676',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
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
      //#3455DB

      backgroundColor: '#3455DB',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus(prop) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div id="drop-down"
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}>
        <img src={plusSign} alt="+" style={{marginRight:'0.5rem',width:'15.5px',height:'15.5px'}}/>
        <div style={{fontFamily:'Lato',
fontStyle: 'normal',
fontWeight: '600',
fontSize: '14px',color:'white'}}>Create</div>
      </div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          <div id="drop-down-list">
                <StyledMenuItem className="drop-down-list-item" onClick={()=>{prop.setAddModule(true)}} >
                    <ListItemText primary="Module" />
                </StyledMenuItem>
                 <StyledMenuItem className="drop-down-list-item">
                    <ListItemText primary="Coursework" onClick={()=>{prop.funcAddCourseCall()}} />
                  </StyledMenuItem>
          </div>
           
      </StyledMenu>
    </div>
  );
}