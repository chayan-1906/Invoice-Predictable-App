import * as React from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { Paper, Button, Divider, makeStyles, withStyles, Box, Dialog, DialogContent } from '@material-ui/core';

function DeleteInvoicePopup(props) {
    const useStylesPaper = makeStyles((theme) => ({
        style: {
            // top: "294px",
            // left: "654px",
            width: "611px",
            height: "100%",
            margin: "auto",
            
            background: "#2A3F4D 0% 0% no-repeat padding-box",
            boxShadow: "0px 8px 24px #00000029",
            borderRadius: "6px",
            opacity: "1"
        }
    }));
    const useStylesBox = makeStyles((theme) => ({
        style: {
            // top: "211px",
            // left: "407px",
            // width: "611px",
            // height: "40px",
            margin: "auto",
            display: "flex",
            background: "#2A3E4C 0% 0% no-repeat padding-box",
            borderRadius: "10px 10px 0px 0px",
            opacity: "1"
        }
    }));
    const useStylesHeading = makeStyles((theme) => ({
        style: {
            marginLeft: "20px",
            marginRight: "310px",
            top: "324px",
            left: "684px",
            width: "217px",
            height: "31px",
            textAlign: "left",
            font: "normal normal normal 28px/32px Ubuntu",
            letterSpacing: "0px",
            color: "#FFFFFF",
            opacity: "1"
        }
    }));
    const useStylesClose = makeStyles((theme) => ({
        style: {
            marginTop: "20px",
            top: "327px",
            left: "1211px",
            height: "24px",
            width: "24px",
            color: "#FFFFFF",
            opacity: "1"
        }
    }));
    const useStylesButtonBox = makeStyles((theme) => ({
        style: {
            // top: "641px",
            // left: "458px",
            width: "611px",
            height: "70px",
            opacity: "1"
        }
    }));

    const CancelButton = withStyles((theme) => ({
        root: {
            color: "#FFFFFF",
            opacity: "100%",
            backgroundColor: "#2A3E4C",
            borderColor: "#14AFF1",
            // top: "566px",
            // left: "1009px",
            marginBottom: "25px",
            width: "100px",
            height: "45px",
            font: "normal normal normal 20px/24px Ubuntu",
            textTransform: "none",
            letterSpacing: "0px",
            border: "1px solid #14AFF1",
            borderRadius: "10px",
            marginTop: "10px",
            marginLeft: "330px"
        }
    }))(Button);
    const DeleteButton = withStyles((theme) => ({
        root: {
            color: "#FFFFFF",
            opacity: "100%",
            backgroundColor: "#14AFF1",
            // top: "566px",
            // left: "1009px",
            marginBottom: "25px",
            width: "100px",
            height: "45px",
            font: "normal normal normal 20px/24px Ubuntu",
            textTransform: "none",
            letterSpacing: "0px",
            border: "1px solid #14AFF1",
            borderRadius: "10px",
            marginTop: "10px",
            marginLeft: "30px"
        }
    }))(Button);

    const stylePaper = useStylesPaper();
    const styleBox = useStylesBox();
    const styleHeading = useStylesHeading();
    const styleCloseButton = useStylesClose();
    const {title, children, openPopup, setOpenPopup} = props;
    return (
        <Dialog open={openPopup} fullWidth={ true } maxWidth={"xl"}  
        PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          }}>
            <DialogContent>
        <Paper className={stylePaper.style}>
            <Box p={1} className={styleBox.style}>
                <h1 className={styleHeading.style}>Delete Record(s)?</h1>
                <CloseRoundedIcon onClick={() => setOpenPopup(false)} className={styleCloseButton.style}/>
            </Box>
            <Divider style={{marginBottom: "20px"}}/>
            <body style={{height: "145px"}}>
                <p style={{textAlign: "left", marginLeft: "30px", top: "0", left: "0", width: "531px", height: "23px", font: "normal normal normal 20px/24px Ubuntu", letterSpacing: "0", color: "#C0C6CA" }}>You'll lose your record(s) after this action. We can't recover them once you delete. 
                <br></br>
                <br></br>
                Are you sure you want to <span style={{top: "72px", left: "231px", width: "184px", height: "23px", textAlign: "left", font: "normal normal medium 20px/24px Ubuntu", letterSpacing: "0", color: "#FF5E5E"}}>permanently delete</span> them?
                </p>
            </body>
            <Divider style={{marginBottom: "10px"}}/>
            <Box p={1} className={useStylesButtonBox.style}>
                <CancelButton onClick={() => setOpenPopup(false)} variant="outlined" color="primary">Cancel</CancelButton>
                <DeleteButton variant="outlined">Delete</DeleteButton>
            </Box>
        </Paper>
        </DialogContent>
        </Dialog>
    );
  }

export default DeleteInvoicePopup;