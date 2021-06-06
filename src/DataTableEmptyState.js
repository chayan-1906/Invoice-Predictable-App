import * as React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Box from "@material-ui/core/Box";
import error_logo from './assets/error_outline-24px.svg';

function DataTableEmptyState() {
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
    const useStylesBox = makeStyles((theme) => ({
        style: {
            marginTop: "161px",
            marginLeft: "30px",
            width: "94%",
            height: "70%",
            background: "#273D49CC 0% 0% no-repeat padding-box",
            borderRadius: "10px",
            opacity: "1"
        }
    }));
    const useStylesImage = makeStyles((theme) => ({
        style: {
            top: "482px",
            left: "940px",
            width: "39px",
            height: "39px",
            background: "0% 0% no-repeat padding-box",
            marginTop: "200px",
            opacity: "1"
        }
    }));
    const stylePaper = useStylesPaper();
    const styleBox = useStylesBox();
    const styleImg = useStylesImage();
    return (
        <Paper className={stylePaper.style}>
            <Box p={1} className={styleBox.style}>
                <img src={error_logo} className={styleImg.style}/>
                <Typography style={{top: "536px", left: "832px", width: "257px", height: "25px", textAlign: "center", font: "", letterSpacing: "0px", color: "#FFFFFF", opacity: "1", margin: "auto", marginTop: "5px", padding: "5px"}}>No results found</Typography>
                <Typography style={{top: "576px", left: "728px", width: "464px", height: "18px", textAlign: "center", font: "", letterSpacing: "0px", color: "#C0C6CA", opacity: "1",  margin: "auto", marginTop: "5px", padding: "5px"}}>Try adjusting your search to find what you are looking for</Typography>
                <Typography style={{top: "624px", left: "905px", width: "113px", height: "23px", textAlign: "center", font: "", letterSpacing: "0px", color: "#14AFF1", opacity: "1",  margin: "auto", marginTop: "20px", padding: "5px"}}>Clear Search</Typography>
            </Box>
        </Paper>
    );
}

export default DataTableEmptyState;