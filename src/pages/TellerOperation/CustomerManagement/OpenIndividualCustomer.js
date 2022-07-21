import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TextField_Custom from '../../../components/TextField_Custom'
import Select_Custom from "../../../components/Select_Custom";
import DatePicker_Custom from "../../../components/DatePicker_Custom";
import Button_Custom from "../../../components/Button_Custom";
import axios from "axios";
import { useEffect, useState } from "react";

function checkName(a, b) {
    checkName = 0
    a.map((data, index) => {
        // console.log("data")
        // console.log(data.Name)
        // console.log("b")
        // console.log(b)
        if (data.Name == b)
        {
            checkName = data.id
            return data.id
            
        }
    })
    return checkName
}

function OpenIndividualCustomer() {
    
    const [bioCity, setBioCity] = useState([]);
    useEffect(() => {
        const fetchDataCity = async () => {
            const response = await fetch(`https://cb-be.azurewebsites.net/storage/get_city_province`);
            const data = await response.json();
            setBioCity(data.rows);  
        };
        fetchDataCity();
    }, []);

    const [bioCountry, setBioCountry] = useState([]);
    useEffect(() => {
        const fetchDataCountry = async () => {
            const response = await fetch(`https://cb-be.azurewebsites.net/storage/get_country`);
            const data = await response.json();
            setBioCountry(data.rows);  
        };
        fetchDataCountry();
    }, []);

    const [bioDoctype, setBioDoctype] = useState([]);
    useEffect(() => {
        const fetchDataDoctype = async () => {
            const response = await fetch(`https://cb-be.azurewebsites.net/storage/get_doctype`);
            const data = await response.json();
            setBioDoctype(data.rows);  
        };
        fetchDataDoctype();
    }, []);

    const [bioMainSector, setBioMainSector] = useState([]);
    useEffect(() => {
        const fetchDataMainSector = async () => {
            const response = await fetch(`https://cb-be.azurewebsites.net/storage/get_sector`);
            const data = await response.json();
            setBioMainSector(data.rows);  
        };
        fetchDataMainSector();
    }, []);

    const [bioMainIndustry, setBioMainIndustry] = useState([]);
    useEffect(() => {
        const fetchDataMainIndustry = async () => {
            const response = await fetch(`https://cb-be.azurewebsites.net/storage/get_industry`);
            const data = await response.json();
            setBioMainIndustry(data.rows);  
        };
        fetchDataMainIndustry();
    }, []);

    const [bioAccountOfficer, setBioAccountOfficer] = useState([]);
    useEffect(() => {
        const fetchDataAccountOfficer = async () => {
            const response = await fetch(`https://cb-be.azurewebsites.net/storage/get_account_officer`);
            const data = await response.json();
            setBioAccountOfficer(data.rows);  
        };
        fetchDataAccountOfficer();
    }, []);

    
    return (
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
                        1. Open Individual Customer
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
                        <TextField_Custom props1="First Name" props2="22.5" props3="NO"/>
                        <TextField_Custom props1="Last Name" props2="22.5" props3="NO"/>
                        <TextField_Custom props1="Middle Name" props2="22.5" props3="NO"/>
                        <TextField_Custom props1="GB Short Name" props2="35" props3="YES"/>
                        <TextField_Custom props1="GB Full Name" props2="35" props3="YES"/>
                        <DatePicker_Custom props1="Birthday" props2="350" props3="YES"/>
                        <TextField_Custom props1="GB Street" props2="35" props3="YES"    />
                        <TextField_Custom props1="GB Town/Dist" props2="35" props3="YES"/>  
                        <TextField_Custom props1="Mobile Phone" props2="15" props3="NO"/>  
                        <Select_Custom props1="City/Province" props2="35" props3="city" props4={bioCity}/>
                        <Select_Custom props1="GB Country" props2="30" props3="country" props4={bioCountry}/>
                        <Select_Custom props1="Nationality" props2="30" props3="country" props4={bioCountry}/>
                        <Select_Custom props1="Residence" props2="30" props3="country" props4={bioCountry}/>
                        <Select_Custom props1="Doc Type" props2="20" props3="doctype" props4={bioDoctype}/>
                        <TextField_Custom props1="Doc ID" props2="20" props3="YES"/>
                        <DatePicker_Custom props1="Doc Issue Date" props2="350" props3="YES"/>
                        <DatePicker_Custom props1="Doc Expiry Date" props2="350" props3="YES"/>
                        <TextField_Custom props1="Email Address" props2="35" props3="NO"/>
                        <Select_Custom props1="Main Sector" props2="30" props3="main_sector" props4={bioMainSector}/> 
                        <Select_Custom props1="SubSector" props2="30" props3="sub_sector" props4={bioMainSector}/>
                        <Select_Custom props1="Main Industry" props2="30" props3="main_industry" props4={bioMainSector}/>
                        <Select_Custom props1="Industry" props2="30" props3="sub_industry" props4={bioMainIndustry}/> 
                        <Select_Custom props1="Account Officer" props2="25" props3="account_officer" props4={bioAccountOfficer}/>
                    </div>
                    <div
                        style={{ 
                            // display: "flex", 
                            width: "100%", 
                            // backgroundColor: "#333", 
                            // flexWrap: "wrap"
                        }}
                    >
                        {/* <Button_Custom props1="Save"/>  */}
                        <Button 
                            sx={{ width: `40ch`, mr: `400px`, padding: ``}} 
                            variant="contained"
                            // color="success"
                            size="large"
                            // href="https://google.com"
                            onClick={() => {
                                
                                let temp = document.getElementById('sltCity/Province').textContent.toString();
                                // temp = temp[0] + temp[1]

                                let temp01 = document.getElementById('sltGBCountry').textContent.toString();
                                temp01 = temp01[0] + temp01[1]

                                console.log("check name")
                                console.log(checkName(bioCity, temp))
                                console.log(temp)
                                console.log(bioCity)

                                axios.post('https://cb-be.azurewebsites.net/customer/create_individual_customer',{
                                    firstName: document.getElementById('txtFirstName').value,
                                    lastName: document.getElementById('txtLastName').value,
                                    middleName: document.getElementById('txtMiddleName').value,
                                    GB_shortName: document.getElementById('txtGBShortName').value,
                                    GB_fullName: document.getElementById('txtGBFullName').value,
                                    GB_street: document.getElementById('txtGBStreet').value,
                                    // cityProvince: temp,
                                    // cityProvince: '4',
                                    // GB_country: temp01,

                                })
                                .then(res => {
                                    console.log(res)
                                    // console.log(temp)
                                    // console.log(temp01)
                                    // console.log(document.getElementById('sltGBCountry').options[document.getElementById('sltGBCountry').selectedIndex].value);  
                                })
                                .catch(err=>{
                                    console.log(err)
                                })
                            }}
                        >
                            SAVE
                        </Button>
                    </div>
                        


                </AccordionDetails>
            </Accordion>
        </div>

        
    )
}

export default OpenIndividualCustomer;