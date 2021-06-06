import * as React from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { Paper, Button, Divider, makeStyles, withStyles, Grid, Box, Typography, Dialog, DialogContent, Input } from '@material-ui/core';
import axios from "axios";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";

function AddInvoiceCalendarPicker(props) {
    const useStylesPaper = makeStyles((theme) => ({
        style: {
            // top: "211px",
            // left: "407px",
            width: "1000px",
            height: "550px",
            margin: "auto",
            marginTop: "50px",
            boxShadow: "0px 8px 24px #00000029",
            background: "#2A3E4C 0% 0% no-repeat padding-box",
            borderRadius: "10px 10px 0px 0px",
            opacity: "1"
        }
    }));
    const useStylesBox = makeStyles((theme) => ({
        style: {
            // top: "211px",
            // left: "407px",
            // width: "1000px",
            height: "85px",
            margin: "auto",
            display: "flex",
            background: "#2A3E4C 0% 0% no-repeat padding-box",
            borderRadius: "10px 10px 0px 0px",
            opacity: "1"
        }
    }));
    const useStylesHeading = makeStyles((theme) => ({
        style: {
            marginTop: "25px",
            marginRight: "750px",
            marginLeft: "20px",
            top: "241px",
            left: "437px",
            width: "147px",
            height: "31px",
            textAlign: "left",
            font: "normal normal normal 28px/32px Ubuntu",
            letterSpacing: "0px",
            color: "#FFFFFF",
            textTransform: "capitalize",
            opacity: "1"
        }
    }));
    const useStylesClose = makeStyles((theme) => ({
        style: {
            marginTop: "35px",
            color: "#FFFFFF"
        }
    }));
    const useStylesButtonBox = makeStyles((theme) => ({
        style: {
            // top: "641px",
            // left: "458px",
            width: "1000px",
            height: "100px",
            opacity: "1"
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
            marginLeft: "20px",
        }
    }))(Button);
    const ClearButton = withStyles((theme) => ({
        root: {
            color: "#FFFFFF",
            opacity: "100%",
            backgroundColor: "#2A3E4C",
            borderColor: "#14AFF1",
            // top: "651px",
            // left: "1294px",
            // width: "87px",
            // height: "45px",
            font: "normal normal normal 20px/24px Ubuntu",
            textTransform: "none",
            letterSpacing: "0px",
            border: "1px solid #14AFF1",
            borderRadius: "10px",
            marginLeft: "690px"
        }
    }))(Button);
    const AddButton = withStyles((theme) => ({
        root: {
            // top: "661px",
            // left: "1426px",
            // width: "37px",
            // height: "23px",
            textAlign: "left",
            font: "normal normal normal 20px/24px Ubuntu",
            letterSpacing: "0px",
            color: "#FFFFFF",
            textTransform: "none",
            opacity: "1",
            background: "#14AFF1 0% 0% no-repeat padding-box",
            borderRadius: "10px",
            marginLeft: "20px"
        }
    }))(Button);

    const stylePaper = useStylesPaper();
    const styleBox = useStylesBox();
    const styleHeading = useStylesHeading();
    const styleCloseButton = useStylesClose();

    const [CustName, setCustName] = React.useState('');
    const [CustNum, setCustNum] = React.useState('');
    const [InvNumber, setInvNumber] = React.useState('');
    const [InvAmount, setInvoiceAmount] = React.useState('');
    const [DueDate, setDueDate] = React.useState('');
    const [Notes, setNotes] = React.useState('');

    const {title, children, openPopup, setOpenPopup} = props;

    var date = new Date("2021-03-22");
    const [selectedDate, setSelectedDate] = React.useState(date);
    
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    function Add() {
        if (CustName==='' || CustNum==='' ||  InvNumber==='' || InvAmount==='')
            alert("Enter all the field!!!");
        else {
            let getURL = `http://localhost:8080/1805588/dataAdd.do?CustName=${CustName}&CustNum=${CustNum}&InvNumber=${InvNumber}&InvAmount=${InvAmount}&Notes=${Notes}`;
            axios.get(getURL).then((response) => {                
                console.log(response);
           })
           .catch((error) => {
                console.log(error);
           });
           window.location.reload();
        }
    }

    function Clear() {
        CustName = ''
        CustNum = ''
        InvNumber = ''
        InvAmount = ''
        DueDate=''
    }

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
                <h1 className={styleHeading.style}>Add Invoice</h1>
                <CloseRoundedIcon onClick={() => setOpenPopup(false)} className={styleCloseButton.style}/>
            </Box>
            <Divider style={{marginBottom: "20px"}}/>
            <body style={{height: "350px"}}>
                <div style={{width: "500px", float: "left"}}>
                    <div style={{display: "flex", marginTop: "30px"}}>
                        <Typography style={{color: "#97A1A9", top: "0px", left: "0px", width: "153px", height: "23px", textAlign: "left", font: "normal normal normal 20px/24px Ubuntu", letterSpacing: "0.19px",marginTop: "10px", marginBottom: "25px", marginRight: "20px", paddingLeft: "20px"}}>Customer Name <span style={{color: "#FF5B5B"}}>*</span></Typography>
                        <Input onChange={event => setCustName(event.target.value)} style={{ color: "#FFFFFF", border: "1px solid #356680", borderRadius: "10px", borderWidth: "1px", opacity: "1", width: "300px", height: "45px", marginBottom: "14px", padding: "2px"}} placeholder="Jessica"></Input>
                    </div>
                    <div style={{display: "flex"}}>
                        <Typography style={{color: "#97A1A9", top: "0px", left: "0px", width: "153px", height: "23px", textAlign: "left", font: "normal normal normal 20px/24px Ubuntu", letterSpacing: "0.19px", marginTop: "25px", marginBottom: "25px", marginRight: "20px", paddingLeft: "20px"}}>Customer No <span style={{color: "#FF5B5B"}}>*</span></Typography>
                        <Input onChange={event => setCustNum(event.target.value)} style={{color: "#FFFFFF", border: "1px solid #356680", borderRadius: "10px", borderWidth: "1px", opacity: "1", width: "300px", height: "45px", marginTop: "14px", marginBottom: "14px", padding: "2px"}}></Input>
                    </div>
                    <div style={{display: "flex", width: "500px"}}>
                        <Typography style={{color: "#97A1A9", top: "0px", left: "0px", width: "153px", height: "23px", textAlign: "left", font: "normal normal normal 20px/24px Ubuntu", letterSpacing: "0.19px", marginTop: "25px", marginBottom: "25px", marginRight: "20px", paddingLeft: "20px"}}>Invoice No <span style={{color: "#FF5B5B"}}>*</span></Typography>
                        <Input onChange={event => setInvNumber(event.target.value)} style={{color: "#FFFFFF", border: "1px solid #356680", borderRadius: "10px", borderWidth: "1px", opacity: "1", width: "300px", height: "45px", marginTop: "14px", marginBottom: "14px", padding: "2px"}}></Input>
                    </div>
                    <div style={{display: "flex", width: "500px"}}>
                        <Typography style={{color: "#97A1A9", top: "0px", left: "0px", width: "153px", height: "23px", textAlign: "left", font: "normal normal normal 20px/24px Ubuntu", letterSpacing: "0.19px", marginTop: "25px", marginBottom: "10px", marginRight: "20px", paddingLeft: "20px"}}>Invoice Amount <span style={{color: "#FF5B5B"}}>*</span></Typography>
                        <Input onChange={event => setInvoiceAmount(event.target.value)} style={{color: "#FFFFFF", border: "1px solid #356680", borderRadius: "10px", borderWidth: "1px", opacity: "1", width: "300px", height: "45px", marginTop: "14px", marginBottom: "5px", padding: "2px"}}></Input>
                    </div>
                </div>
                <div style={{width: "500px", float: "right"}}>
                    <div style={{display: "flex", marginTop: "30px"}}>
                        <Typography style={{color: "#97A1A9", top: "0px", left: "0px", width: "130px", height: "23px", textAlign: "left", font: "normal normal normal 20px/24px Ubuntu", letterSpacing: "0.19px", marginTop: "10px", marginBottom: "25px", marginLeft: "40px"}}>Due Date <span style={{color: "#FF5B5B"}}>*</span></Typography>
                        <MuiPickersUtilsProvider utils={DateFnsUtils} style={{color: "#FFFFFF", border: "1px solid #356680", borderRadius: "10px", borderWidth: "1px", opacity: "1", width: "300px", height: "45px", marginBottom: "14px", padding: "2px"}}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    format="dd/MM/yyyy"
                                    defaultDate={date}
                                    placeholder="dd/MM/yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    style={{ width: "300px", height: "45px", background: "#283A46 0% 0% no-repeat padding-box", border: "1px solid #356680", borderRadius: "10px", padding: "5px" }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </div>
                    <div style={{display: "flex"}}>
                        <Typography style={{color: "#97A1A9", top: "0px", left: "0px", width: "120px", height: "23px", textAlign: "left", font: "normal normal normal 20px/24px Ubuntu", letterSpacing: "0.19px", marginTop: "25px", marginBottom: "25px", marginLeft: "40px"}}>Notes</Typography>
                        <Input onChange={event => setNotes(event.target.value)} style={{color: "#FFFFFF", border: "1px solid #356680", borderRadius: "10px", borderWidth: "1px", opacity: "1", width: "300px", height: "150px", marginTop: "14px", marginBottom: "14px", padding: "2px"}}>Jessica</Input>
                    </div>
                </div>
            </body>
            <Box p={1} className={useStylesButtonBox.style}>
                <Divider style={{marginBottom: "15px"}}/>
                <CancelButton onClick={() => setOpenPopup(false)} disableRipple>Cancel</CancelButton>
                <ClearButton variant="outlined" onClick={Clear}>Clear</ClearButton>
                <AddButton variant="outlined" color="primary" onClick={Add}>Add</AddButton>
            </Box>

        </Paper>
        </DialogContent>
        </Dialog>
    );
}

export default AddInvoiceCalendarPicker;