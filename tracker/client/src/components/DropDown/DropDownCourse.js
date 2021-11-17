import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icons from '@material-ui/icons/MoreVert';
import '../Repository/DropDown.css'
import {deleteCourseWork,moveUp,moveDown} from "./../Repository/GithubRepository.js";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    marginTop:'0.5rem',
    color:'#767676'
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

      backgroundColor:  '#3455DB',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function funcMoveDown(){
    //alert(props.name)
    if(document.getElementById(props.id).nextSibling===null){
      alert("no next")
    }
      else{
      let nextId=document.getElementById(props.id).nextSibling.id;
      moveDown(props.db,props.refresh,props.id,props.parentId,nextId)
    }
  }
  function funcMoveUp(){
    if(document.getElementById(props.id).previousSibling===null){
      alert("no previous ")
    }else{
      let previousId=document.getElementById(props.id).previousSibling.id;
      moveUp(props.db,props.refresh,props.id,props.parentId,previousId)
      }
  }
  function funcDelete(){
    deleteCourseWork(props.refresh,props.db,props.id,props.name,props.parentId,onCourseWorkDeleted)
  }
  function onCourseWorkDeleted(result){
      props.refresh(props.id)
      alert(props.name +" has been deleted")
  }
  return (
    <div style={{width:'163px',display:'flex',flexDirection:'co' }}>
      <div
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
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
            <StyledMenuItem className="drop-down-list-item">
              <ListItemText primary="Review"  />
            </StyledMenuItem>
          
            <StyledMenuItem className="drop-down-list-item">
                  <ListItemText primary="Edit"  />
            </StyledMenuItem>
          
            <StyledMenuItem className="drop-down-list-item" onClick={funcDelete}  >
                  <ListItemText primary="Delete"  />
            </StyledMenuItem>
       
            <StyledMenuItem className="drop-down-list-item" onClick={funcMoveUp}>
              <ListItemText primary="Move up"  />
            </StyledMenuItem>
          
            <StyledMenuItem className="drop-down-list-item" onClick={funcMoveDown}>
                  <ListItemText primary="Move Down"  />
            </StyledMenuItem>
          
          </div> 
      </StyledMenu>
    </div>
  );
}