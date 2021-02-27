import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import firebase from 'firebase'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    border: 'none'
  },
}));

export default function SimpleModal() {
  const [user, setUser] = useState({})

  useEffect(() => {
    firebase.firestore().collection('Users')
    .get()
    .then(querySnapshot => {
      querySnapshot.docs.map( doc => {
        setUser(doc.data())
      })
    })
  }, [])
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="user-modal">Text in a modal</h2>
        <p id="user-modal-description">
          <h1>dddd</h1>
        </p>
        
      </div>
    );
  
    return (
      <div>
        <img width="60" height="60" onClick={handleOpen} src={user.image} style={{ borderRadius: '50%' }}/>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="user-modal"
          aria-describedby="user-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  }