import React from "react";
import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow, CircularProgress, Checkbox, Button, Paper, Box, Grid, InputAdornment, Input } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import clsx from 'clsx';
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import AddInvoiceCalendarPicker from './AddInvoiceCalendarPicker';
import EditInvoicePopup from './EditInvoicePopup';
import DeleteInvoicePopup from './DeleteInvoicePopup';
import ViewCorrespondence_Template1 from "./ViewCorrespondence_Template1";
import SearchIcon from '@material-ui/icons/Search';
import add_logo from './assets/add_icon.svg';
import edit_logo from './assets/edit_icon.svg';
import delete_logo from './assets/delete_icon.svg';
import mainLogo from './assets/main_logo.svg';
import HRCLogo from './assets/logo.svg';

function MainPage() {
     const useStyles = makeStyles({
          root: {
               '&:hover': {
                    backgroundColor: 'transparent',
               },
          },
          icon: {
               border: "2px solid #97A1A9",
               borderRadius: "4px",
               width: 16,
               height: 16,
               boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',

               '$root.Mui-focusVisible &': {
                    outline: '2px auto rgba(19,124,189,.6)',
                    outlineOffset: 2,
               },
               'input:disabled ~ &': {
                    boxShadow: 'none',
                    background: 'rgba(206,217,224,.5)',
               },
          },
          checkedIcon: {
               backgroundColor: '#14AFF1',
               backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
               '&:before': {
                    display: 'block',
                    width: 16,
                    height: 16,
                    backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" + " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " + "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
                    content: '""',
               }
          },
          font1: {
               textAlign: 'left',
               font: 'normal normal normal 18px/21px Ubuntu',
               letterSpacing: "0px",
               color: '#97A1A9',
               opacity: "1",
           },
           font2: {
               textAlign: 'left',
               font: 'normal normal normal 20px/24px Ubuntu',
               letterSpacing: "0px",
               color: '#FFFFFF',
               opacity: "1",
           },
           arrowup: {
               marginTop: "10px",
           },
           arrowdown: {
               margin: "0px",
           }
     });
     
     const useStylesBox = makeStyles((theme) => ({
          style: {
              marginTop: "20px",
              marginLeft: "30px",
              width: "94%",
              height: "100%",
              background: "#273D49CC 0% 0% no-repeat padding-box",
              borderRadius: "10px",
              opacity: "1"
          }
     }));
     const useStylesPaper = makeStyles((theme) => ({
          style: {
               top: "0px",
               left: "0px",
               width: "100%",
               height: "100%",
               display: "table",
               position: "absolute",
               background: "transparent radial-gradient(closest-side at 50% 50%, #58687E 0%, #39495E 100%) 0% 0% no-repeat padding-box",
               opacity: "1"
          }
     }));
     const useStylesImage = makeStyles((theme) => ({
          style: {
               top: "207px",
               left: "1154px",
               width: "14px",
               height: "14px",
               background: "transparent url('img/Path 18189.png') 0% 0% no-repeat padding-box",
               marginRight: "10px",
               opacity: "1"
          }
     }));
     const styles = theme => ({
          search: {
               position: 'relative',
               borderRadius: theme.shape.borderRadius,
               marginRight: theme.spacing.unit * 2,
               marginLeft: "0px",
               width: '100%',
               [theme.breakpoints.up('sm')]: {
                    marginLeft: theme.spacing.unit * 3,
                    width: 'auto'
               }
          },
          searchIcon: {
               width: theme.spacing.unit * 9,
               height: '100%',
               position: 'absolute',
               pointerEvents: 'none',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center'
          },
     });

     const styleImg = useStylesImage();
     const stylePaper = useStylesPaper();
     const styleBox = useStylesBox();
     let [responseData, setResponseData] = React.useState([]);
     let [isNext, setIsNext] = React.useState(false);
     let [pageNumber, setPageNumber] = React.useState(1);
     let [pageCount, setCount] = React.useState(1);
     const [VCOpenPopup, setVCOpenPopup] = React.useState(false);
     const [AddOpenPopup, setAddOpenPopup] = React.useState(false);
     const [EditOpenPopup, setEditOpenPopup] = React.useState(false);
     const [DeleteOpenPopup, setDeleteOpenPopup] = React.useState(false);

     let count = 5;
     let getURL = `http://localhost:8080/1805588/InfiniteScrollingServlet?$page=${pageNumber}&limit=${count}`;
     const getData = () => {
          axios.get(getURL).then((response) => {
               setResponseData([...responseData, ...response.data]);
               console.log(response);
          })
          .catch((error) => {
               console.log(error);
          });
     };
     function getMoreData() {
          setCount(pageCount + 1);
          getData();
     }
     React.useEffect(() => {
          setIsNext(true);
          getMoreData();
     }, []);

     const classes = useStyles();

     return (
          <Paper className={stylePaper.style}>
               <div>
                    <Grid container spacing={2} style={{ marginLeft: "30px", marginTop:"20px" }}>
                         <Grid item xs={5}><img src = {mainLogo} className = "CustLogo"/></Grid>
                         <Grid item xs={7}><img src = {HRCLogo} className = "HRCLogo"/></Grid>
                    </Grid>
                    <div className = 'Header' style={{ marginLeft: "30px", color:"#FFFFFF", font: "normal normal normal 20px/24px Ubuntu" }}><h1>Invoice List</h1></div>
               </div>
               <Box p={1} className={styleBox.style}>
                    <Button variant="contained" style={{ width: "106px", height: "45px", background: "#14AFF1 0% 0% no-repeat padding-box", margin: "20px", borderRadius: "10px", textTransform: "none", font: "normal normal normal 20px/24px Ubuntu", letterSpacing: "0px", color: "#FFFFFF", opacity: "1" }}>Predict</Button>
                    <Button variant="outlined" style={{ width: "237px", height: "45px", marginRight: "300px", border: "1px solid #14AFF1", borderRadius: "10px", textTransform: "none", font: "normal normal normal 20px/24px Ubuntu", letterSpacing: "0px", color: "#FFFFFF", opacity: "1" }} onClick={() => setVCOpenPopup(true)}>View Correspondence</Button>
                    <Button variant="outlined" style={{ width: "99px", height: "45px", border: "1px solid #14AFF1", margin: "20px", borderRadius: "10px", textTransform: "none", font: "normal normal normal 20px/24px Ubuntu", letterSpacing: "0px", color: "#FFFFFF", opacity: "1", textAlign: "left" }} onClick={() => setAddOpenPopup(true)}><img src={add_logo} className={styleImg.style}/>Add</Button>
                    <Button variant="outlined" style={{ width: "102px", height: "45px", border: "1px solid #97A1A9", marginLeft: "5px", borderRadius: "10px", textTransform: "none", font: "normal normal normal 20px/24px Ubuntu", letterSpacing: "0px", color: "#FFFFFF", opacity: "1", textAlign: "left" }} onClick={() => setEditOpenPopup(true)}><img src={edit_logo} className={styleImg.style}/>Edit</Button>
                    <Button variant="outlined" style={{ width: "123px", height: "45px", border: "1px solid #14AFF1", marginLeft: "25px", marginRight: "20px", borderRadius: "10px", textTransform: "none", font: "normal normal normal 20px/24px Ubuntu", letterSpacing: "0px", color: "#FFFFFF", opacity: "1", textAlign: "left" }} onClick={() => setDeleteOpenPopup(true)}><img src={delete_logo} className={styleImg.style}/>Delete</Button>
                    <Input placeholder ="Search by Invoice Number" variant="outlined" style={{ width: "300px", height: "45px", background: "#283A46 0% 0% no-repeat padding-box", border: "1px solid #356680", borderRadius: "10px", opacity: "1", textAlign: "left", font: "normal normal normal 18px/21px Ubuntu", letterSpacing: "0px", color: "#97A1A9", opacity: "1", paddingLeft: "10px" }}
                         className={classes.root} size="small"
                         InputProps={{endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>}}
                    />
                    <InfiniteScroll
                         dataLength={responseData.length}
                         next={getMoreData}
                         hasMore={isNext}
                         loader = {
                              <div style={{ height: "80%", paddingLeft: "35%", overflow: "hidden" }}>
                                   <p>Loading Data...</p>
                                   <CircularProgress />
                              </div>
                         }>
                         <Table>
                              <TableHead>
                                   <TableRow>
                                        <Checkbox
                                             className={classes.root}
                                             disableRipple
                                             color="default"
                                             checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                                             icon={<span className={classes.icon} />}
                                        />
                                        <TableCell style={{color: "#97A1A9", color: "#97A1A9", font: "normal normal normal 18px/21px Ubuntu", letterSpacing: "0px", opacity: "1"}}>Customer Name</TableCell>
                                        <TableCell style={{color: "#97A1A9", color: "#97A1A9", font: "normal normal normal 18px/21px Ubuntu", letterSpacing: "0px", opacity: "1"}}>Customer #</TableCell>
                                        <TableCell style={{color: "#97A1A9", color: "#97A1A9", font: "normal normal normal 18px/21px Ubuntu", letterSpacing: "0px", opacity: "1"}}>Sales Order Id</TableCell>
                                        <TableCell style={{color: "#97A1A9", color: "#97A1A9", font: "normal normal normal 18px/21px Ubuntu", letterSpacing: "0px", opacity: "1", display: "flex"}}>
                                             <div style={{display: 'flex'}}>Sales Order Currency
                                                  <div style={{display:'flex', flexDirection:'column'}}>
                                                       <ArrowDropUpIcon fontsize="small" className={classes.arrowup}/>
                                                       <ArrowDropDownIcon fontsize="small" className={classes.arrowdown}/>
                                                  </div>
                                             </div>
                                        </TableCell>
                                        <TableCell style={{color: "#97A1A9", color: "#97A1A9", font: "normal normal normal 18px/21px Ubuntu", letterSpacing: "0px", opacity: "1"}}>Due date <div style={{display: "flex"}}><ArrowDropUpIcon/><ArrowDropDownIcon/></div></TableCell>
                                        <TableCell style={{color: "#97A1A9", color: "#97A1A9", font: "normal normal normal 18px/21px Ubuntu", letterSpacing: "0px", opacity: "1"}}>Predicted Payment Date</TableCell>
                                        <TableCell style={{color: "#97A1A9", color: "#97A1A9", font: "normal normal normal 18px/21px Ubuntu", letterSpacing: "0px", opacity: "1"}}>Predicted Aging Bucket</TableCell>
                                        <TableCell style={{color: "#97A1A9", color: "#97A1A9", font: "normal normal normal 18px/21px Ubuntu", letterSpacing: "0px", opacity: "1"}}>Notes</TableCell>
                                   </TableRow>
                              </TableHead>
                              <TableBody>
                                   {responseData.map((data) =>
                                        <TableRow>
                                             <Checkbox
                                                  className={classes.root}
                                                  disableRipple
                                                  color="default"
                                                  val={data.invoice_id}
                                                  checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                                                  icon={<span className={classes.icon} />}
                                             />
                                             <TableCell style={{color: "#FFFFFF", letterSpacing: "0px", font: "normal normal normal 20px/24px Ubuntu", opacity: "1", textAlign: "left"}}>{data.name_customer}</TableCell>
                                             <TableCell style={{color: "#FFFFFF", letterSpacing: "0px", font: "normal normal normal 20px/24px Ubuntu", opacity: "1", textAlign: "left"}}>{data.cust_number}</TableCell>
                                             <TableCell style={{color: "#FFFFFF", letterSpacing: "0px", font: "normal normal normal 20px/24px Ubuntu", opacity: "1", textAlign: "left"}}>{data.invoice_id}</TableCell>
                                             <TableCell style={{color: "#FFFFFF", letterSpacing: "0px", font: "normal normal normal 20px/24px Ubuntu", opacity: "1", textAlign: "left"}}>{data.total_open_amount}</TableCell>
                                             <TableCell style={{color: "#FFFFFF", letterSpacing: "0px", font: "normal normal normal 20px/24px Ubuntu", opacity: "1", textAlign: "left"}}>{data.due_in_date}</TableCell>
                                             <TableCell style={{color: "#FFFFFF", letterSpacing: "0px", font: "normal normal normal 20px/24px Ubuntu", opacity: "1", textAlign: "left"}}>--</TableCell>
                                             <TableCell style={{color: "#FFFFFF", letterSpacing: "0px", font: "normal normal normal 20px/24px Ubuntu", opacity: "1", textAlign: "left"}}>--</TableCell>
                                             <TableCell style={{color: "#FFFFFF", letterSpacing: "0px", font: "normal normal normal 20px/24px Ubuntu", opacity: "1", textAlign: "left"}}>Lorem Ipsum dolor...</TableCell>
                                        </TableRow>
                                   )}
                              </TableBody>
                         </Table>
                    </InfiniteScroll>
               </Box>
               <ViewCorrespondence_Template1
                    title="View Correspondence Popup"
                    openPopup={VCOpenPopup}
                    setOpenPopup={setVCOpenPopup}>
               </ViewCorrespondence_Template1>
               <AddInvoiceCalendarPicker
                    title="Add Popup"
                    openPopup={AddOpenPopup}
                    setOpenPopup={setAddOpenPopup}>
               </AddInvoiceCalendarPicker>
               <EditInvoicePopup
                    title="Edit Popup"
                    openPopup={EditOpenPopup}
                    setOpenPopup={setEditOpenPopup}>
               </EditInvoicePopup>
               <DeleteInvoicePopup
                    title="Delete Popup"
                    openPopup={DeleteOpenPopup}
                    setOpenPopup={setDeleteOpenPopup}>
               </DeleteInvoicePopup>
          </Paper>
     );
}

export default MainPage;
