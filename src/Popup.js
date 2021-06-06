import React from 'react'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

export default function Popup(props) {

    const {title, children, openPopup, setOpenPopup, closePopup, setClosePopup} = props;

    return (
        <Dialog open={openPopup} fullWidth={ true } maxWidth={"xl"} onClose={closePopup} 
        PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          }}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

