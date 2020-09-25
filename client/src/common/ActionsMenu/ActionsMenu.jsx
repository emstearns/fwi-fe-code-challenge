import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const ActionsMenu = ({ actions }) => {
  const [open, setOpen] = useState(false);
  const anchor = useRef();

  return (
    <>
      <IconButton
        ref={anchor}
        aria-label="Actions"
        aria-controls="actions-menu"
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="actions-menu"
        open={open}
        keepMounted
        anchorEl={anchor.current}
        onClose={() => setOpen(false)}
      >
        {actions.map((action) => (
          <MenuItem key={action.title} onClick={action.onClick}>
            {action.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

ActionsMenu.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default ActionsMenu;
