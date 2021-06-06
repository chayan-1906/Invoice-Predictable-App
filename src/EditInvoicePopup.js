import * as React from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { Paper, Button, Divider, Input, makeStyles, withStyles, Box, Typography, Dialog, DialogContent } from '@material-ui/core';

function EditInvoicePopup(props) {
    const useStylesPaper = makeStyles((theme) => ({
        style: {
            // top: "210px",
            // left: "689px",
            width: "543px",
            height: "465px",
            margin: "auto",
            
            background: "#2A3E4C 0% 0% no-repeat padding-box",
            borderRadius: "10px 10px 0px 0px",
            opacity: "1"
        }
    }));
    const useStylesBox = makeStyles((theme) => ({
        style: {
            // top: "210px",
            // left: "689px",
            // width: "543px",
            height: "50px",
            margin: "10px",
            display: "flex",
            background: "#2A3E4C 0% 0% no-repeat padding-box",
            borderRadius: "10px 10px 0px 0px",
            opacity: "1"
        }
    }));
    const useStylesHeading = makeStyles((theme) => ({
        style: {
            marginRight: "320px",
            top: "240px",
            left: "719px",
            width: "146px",
            height: "31px",
            textAlign: "left",
            font: "normal normal normal 28px/32px Ubuntu",
            letterSpacing: "0px",
            color: "#FFFFFF",
            textTransform: "captitalize",
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
            // top: "642px",
            // left: 740px",
            width: "483px",
            height: "80px",
            opacity: "1"
        }
    }));
    const CancelButton = withStyles((theme) => ({
        root: {
            color: "#14AFF1",
            opacity: "1",
            // top: "663px",
            // left: "740px",
            // width: "60px",
            // height: "23px",
            textAlign: "left",
            font: "normal normal normal 20px/24px Ubuntu",
            textTransform: "none",
            letterSpacing: "0px",
            border: "none",
            marginLeft: "15px",
            marginTop: "5px",
            marginRight: "200px",
            float: "left"
        }
    }))(Button);
    const ResetButton = withStyles((theme) => ({
        root: {
            color: "#FFFFFF",
            opacity: "1",
            // top: "662px",
            // left: "1023px",
            // width: "52px",
            // height: "23px",
            textAlign: "left",
            border: "1px solid #14AFF1",
            font: "normal normal normal 20px/24px Ubuntu",
            textTransform: "none",
            letterSpacing: "0px",
            borderRadius: "10px",
            marginTop: "5px",
            marginLeft: "15px",
            marginRight: "30px"
        }
    }))(Button);
    const SaveButton = withStyles((theme) => ({
        root: {
            color: "#FFFFFF",
            opacity: "1",
            // top: "662px",
            // left: "1140px",
            // width: "42px",
            // height: "23px",
            textAlign: "left",
            background: "#14AFF1 0% 0% no-repeat padding-box",
            font: "normal normal normal 20px/24px Ubuntu",
            textTransform: "none",
            letterSpacing: "0px",
            borderRadius: "10px",
            marginTop: "5px",
            border: "none",
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
                        <h1 className={styleHeading.style}>Edit Invoice</h1>
                        <CloseRoundedIcon onClick={() => setOpenPopup(false)} className={styleCloseButton.style}/>
                    </Box>
                    <Divider style={{marginBottom: "20px"}}/>
                    <body style={{height: "270px"}}>
                        <div style={{width: "500px"}}>
                            <div style={{display: "flex", marginTop: "30px"}}>
                                <Typography style={{color: "#97A1A9", top: "341px", left: "719px", width: "144px", height: "23px", textAlign: "left", font: "normal normal normal 20px/24px Ubuntu", letterSpacing: "0.19px", marginTop: "10px", marginBottom: "25px", marginLeft: "25px", marginRight: "25px"}}>Invoice Amount</Typography>
                                <Input style={{color: "#FFFFFF", border: "1px solid #356680", borderRadius: "10px", borderWidth: "1px", opacity: "1", width: "300px", height: "45px", marginBottom: "14px", padding: "2px"}}></Input>
                            </div>
                            <div style={{display: "flex"}}>
                                <Typography style={{color: "#97A1A9", top: "415px", left: "519px", width: "55px", height: "23px", textAlign: "left", font: "normal normal normal 20px/24px Ubuntu", letterSpacing: "0.19px", marginTop: "25px", marginBottom: "25px", marginLeft: "25px", marginRight: "113px"}}>Notes</Typography>
                                <Input style={{color: "#FFFFFF", border: "1px solid #356680", borderRadius: "10px", borderWidth: "1px", opacity: "1", width: "300px", height: "150px", marginTop: "14px", marginBottom: "14px", padding: "2px"}}>Jessica</Input>
                            </div>
                        </div>
                    </body>
                    <Divider style={{marginBottom: "10px"}}/>
                    <Box p={1} className={useStylesButtonBox.style}>
                        <CancelButton onClick={() => setOpenPopup(false)} variant="outlined" disableRipple>Cancel</CancelButton>
                        <ResetButton variant="outlined">Reset</ResetButton>
                        <SaveButton variant="outlined" color="primary">Save</SaveButton>
                    </Box>
                </Paper>
            </DialogContent>
        </Dialog>
    );
}

export default EditInvoicePopup;