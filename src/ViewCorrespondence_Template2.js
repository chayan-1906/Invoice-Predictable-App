import * as React from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { makeStyles, withStyles, Button, Paper, Select, MenuItem, Divider } from '@material-ui/core';
// import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

function ViewCorrespondence_Template2(props) {
    const useStylesPaper = makeStyles((theme) => ({
        style: {
            top: "0px",
            left: "0px",
            width: "800px",
            height: "550px",
            display: "table",
            margin: "auto",
            marginTop: "60px",
            background: "#2A3E4C 0% 0% no-repeat padding-box",
            opacity: "1"
        }
    }));
    const useStylesBox = makeStyles((theme) => ({
        style: {
            width: "100%",
            height: "65px",
            borderRadius: "10px 10px 0px 0px",
            opacity: "1",
            display: "flex",
            marginBottom: "20px"
        }
    }));
    const useStylesHeading = makeStyles((theme) => ({
        style: {
            marginTop: "25px",
            marginRight: "500px",
            marginLeft: "20px",
            top: "118px",
            left: "110px",
            width: "300px",
            height: "31px",
            textAlign: "left",
            font: "normal normal normal 28px/32px Ubuntu",
            letterSpacing: "0px",
            color: "#FFFFFF",
            textTransform: "capitalize",
            opacity: "1"
        }
    }));
    const useStylesButtonBox = makeStyles((theme) => ({
        style: {
            // top: "641px",
            // left: "458px",
            width: "100%",
            height: "75px",
            opacity: "1"
        }
    }));
    const useStylesClose = makeStyles((theme) => ({
        style: {
            marginTop: "35px",
            color: "#FFFFFF"
        }
    }));
    const CancelButton = withStyles((theme) => ({
        root: {
            color: "#14AFF1",
            opacity: "1",
            backgroundColor: "#2A3E4C",
            // top: "662px",
            // left: "458px",
            // width: "60px",
            // height: "23px",
            textAlign: "left",
            font: "normal normal normal 20px/24px Ubuntu",
            textTransform: "none",
            letterSpacing: "0px",
            border: "none",
            marginLeft: "1000px"
        }
    }))(Button);
    const DownloadButton = withStyles((theme) => ({
        root: {
            color: "#FFFFFF",
            opacity: "100%",
            backgroundColor: "#2A3E4C",
            // top: "651px",
            // left: "1294px",
            // width: "87px",
            // height: "45px",
            font: "normal normal normal 20px/24px Ubuntu",
            textTransform: "none",
            letterSpacing: "0px",
            backgroundColor: "#14AFF1",
            borderRadius: "10px",
            marginLeft: "35px"
        }
    }))(Button);
    const stylePaper = useStylesPaper();
    const styleBox = useStylesBox();
    const styleHeading = useStylesHeading();
    const styleCloseButton = useStylesClose();
    const {title, children, openPopup, setOpenPopup} = props;
    // const styleCancel = useStylesCancel();
    // const styleDownloadButton = useStylesDownload();
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
                <div style={{width: "100%", display: "flex"}}>
                    <h1 className={styleHeading.style}>View Correspondence (2)</h1>
                    <Typography style={{top: "123px", left: "1495px", width: "46px", height: "20px", textAlign: "left", font: "normal normal normal 18px/21px Ubuntu", letterSpacing: "0.33px", color: "#C0C6CA", opacity: "1", marginTop: "35px", marginLeft: "130px", marginRight: "20px"}}>View:</Typography>
                    <Select style={{width: "180px", height: "45px", background: "#283A46 0% 0% no-repeat padding-box", border: "1px solid #356680", borderRadius: "10px", opacity: "1", marginTop: "20px", marginLeft: "20px", marginRight: "50px"}} defaultValue={"Template1"}>
                        <MenuItem value={"Template_1"}>Template 1</MenuItem>
                        <MenuItem value={"Template_2"}>Template 2</MenuItem>
                    </Select>
                    <CloseRoundedIcon onClick={() => setOpenPopup(false)} className={styleCloseButton.style}/>
                    <Divider style={{backgroundColor: 'white', marginTop: "20px"}}/>
                </div>
            </Box>
            <div>
                <Typography style={{top: "205px", left: "150px", width: "1300px", height: "275px", textAlign: "left", font: "normal normal normal 20px/28px Ubuntu", letterSpacing: "0.36px", opacity: "1", color: "#C0C6CA", padding: "10px", marginLeft: "20px"}}>Subject: Invoice Details - {Account Name} <br/><br/> Dear Sir/Madam, <br/><br/> Gentle reminder that you have one or more open invoices on your account. Please get back to us with an expected date of payment. If you have any specific issue with the invoice(s), please let us know so that we can address it at the earliest. <br/><br/> Please find the details of the invoices below: <br/><br/></Typography>
                <Typography style={{top: "205px", left: "150px", width: "1300px", height: "275px", textAlign: "left", font: "normal normal normal 20px/28px Ubuntu", letterSpacing: "0.36px", opacity: "1", color: "#C0C6CA", padding: "10px", marginLeft: "20px"}}>In case you have already made a payment for the above items, please send us the details to ensure the payment is posted. <br/><br/> Let us know if we can be of any further assistance. Looking forward to hearing from you. Kind Regards, [Sender’s First Name][Sender’s Last Name] Phone : [Sender’s contact number] Fax : [If any] Email : [Sender’s Email Address] Company Name[Sender’s Company Name]</Typography>
            </div>
            <Divider style={{marginBottom: "15px"}}/>
            <div>
                {/* <ScrollView >
                    <Typography>
                        Subject: Invoice Details - {"Account Name"} Dear Sir/Madam, Greetings! This is to remind you that there are one or more open invoices on your account. Please provide at your earliest convenience an update on the payment details or clarify the reason for the delay. If you have any specific issue with the invoice(s), please let us know so that we can address it to the correct Department. Please find the details of the invoices below:
                    </Typography>
                </ScrollView> */}
            </div>
            <Divider style={{marginBottom: "15px"}}/>
            <Box p={1} className={useStylesButtonBox.style}>
                <CancelButton onClick={() => setOpenPopup(false)} disableRipple>Cancel</CancelButton>
                <DownloadButton variant="outlined" color="primary">Download</DownloadButton>
            </Box>
        </Paper>
        </DialogContent>
        </Dialog>
    );
}

export default ViewCorrespondence_Template2;