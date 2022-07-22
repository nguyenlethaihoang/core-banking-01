import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TextField_Custom from '../../../components/TextField_Custom'
import Select_Custom from "../../../components/Select_Custom";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import axios from "axios";


function createData(CustomerID, CustomerType, GBFullName, DocID, CellPhoneOfficeNum) {
    return { CustomerID, CustomerType, GBFullName, DocID, CellPhoneOfficeNum };
  }

let rows = [
    // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const customerTypeData = [
    {id: 1,
    Name: 'P - Person' },
    {
    id: 2,
    Name: 'C - Corporate'},
]

function EnquiryCustomer() {

    const [bioGetAll, setBioGetAll] = useState([]);
    useEffect(() => {
        const fetchDataGetAll = async () => {
            await axios.get('https://cb-be.azurewebsites.net/customer/get_all_customer', {
                // https://cb-be.azurewebsites.net/customer/enquiry_customer
            }).then(response => {
                console.log("response")
                console.log(response)
                const dataRes = response.data.data.customer
                setBioGetAll(dataRes); 
                //return data.data.customer
                 
            })
            
        };
        console.log(bioGetAll)
        fetchDataGetAll();
    }, []);

    return(
        <div>
            <Accordion >
                <AccordionSummary
                    expandIcon  ={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography 
                        variant="h6" 
                        align="center" 
                        color="#0a3060"
                        fontWeight= "700"
                        sx={{
                            padding: "10px"
                        }}
                    >
                        3. Enquiry Customer
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ paddingLeft: "30px"}}>
                    <div
                        style={{ 
                            display: "flex", 
                            width: "100%", 
                            flexWrap: "wrap"
                        }}
                    >
                        
                        
                        <Select_Custom props1="Customer Type" props2="20" props3="NO" props4={customerTypeData}/>
                        <TextField_Custom props1="Customer ID" props2="30" props3="NO"/>
                        <TextField_Custom props1="Cell Phone/Office Num" props2="20" props3="NO"/>
                        <TextField_Custom props1="GB Full Name" props2="30" props3="NO"/>
                        <TextField_Custom props1="Doc ID" props2="20" props3="NO"/>
                        <Select_Custom props1="Main Sector" props2="20" props3="NO"/>
                        <Select_Custom props1="SubSector" props2="20" props3="NO"/>
                        <Select_Custom props1="Main Industry" props2="20" props3="NO"/>
                        <Select_Custom props1="Sub Industry" props2="20" props3="NO"/>
                        
                    </div>
                    <div
                        style={{ 
                            // display: "flex", 
                            width: "100%", 
                            paddingBottom: "20px",
                            // backgroundColor: "#333", 
                            // flexWrap: "wrap"
                        }}
                    >
                        <Button 
                            variant="outlined" 
                            startIcon={<ManageSearchIcon />}
                            onClick={() => {
                                rows = [];
                                console.log(bioGetAll)
                                // setBioGetAll(rows)
                                bioGetAll.map((value, index) => {
                                    console.log(createData(value.id, value.CustomerType, value.GB_FullName, value.DocID, value.PhoneNumber))
                                    rows.push(createData(value.id, value.CustomerType, value.GB_FullName, value.DocID, value.PhoneNumber))
                                })
                                console.log(rows)
                                
                              }}
                        >
                            Search
                        </Button>
                    </div>
                    <div
                        style={{ 
                            // display: "flex", 
                            width: "100%", 
                            // backgroundColor: "#333", 
                            // flexWrap: "wrap"
                        }}
                    >
                        <TableContainer component={Paper}>
                            <Table 
                                sx={{ minWidth: 650 }} 
                                aria-label="simple table"
                                id="sample-table"
                            > 
                                <TableHead>
                                <TableRow>
                                    <TableCell>Customer ID</TableCell>
                                    <TableCell align="right">Customer Type</TableCell>
                                    <TableCell align="right">GB Full Name</TableCell>
                                    <TableCell align="right">Doc ID</TableCell>
                                    <TableCell align="right">Cell Phone/Office Num</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {bioGetAll.map((row,index) => (
                                    <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="right" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="right">{row.CustomerType}</TableCell>
                                        <TableCell align="right">{row.GB_FullName}</TableCell>
                                        <TableCell align="right">{row.DocID}</TableCell>
                                        <TableCell align="right">{row.PhoneNumber}</TableCell>
                                    </TableRow>
          ))}
                                </TableBody>
                            </Table>
    </TableContainer>

                    </div>
                
 

                </AccordionDetails>
            </Accordion>
        </div>
    ) 
}

export default EnquiryCustomer