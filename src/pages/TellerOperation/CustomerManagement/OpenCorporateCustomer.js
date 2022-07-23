import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TextField_Custom from '../../../components/TextField_Custom'
import Select_Custom from "../../../components/Select_Custom";
import DatePicker_Custom from "../../../components/DatePicker_Custom";
import Button_Custom from "../../../components/Button_Custom";
import axios from "axios";
import { useEffect, useState } from "react";
import Popup_Custom from "../../../components/Popup_Custom";

function checkName(a, b) {
    let temp = ""
    a.map((data, index) => {
        if (data.Name == b)
        {
            temp = data.id.toString()
            
        }
    })
    return temp
}

function checkCode(a, b) {
    let temp = ""
    a.map((data, index) => {
        if (data.Code == b)
        {
            temp = data.id.toString()
            
        }
    })
    return temp
}

function OpenCorporateCustomer() {
    const [buttonPopup, setButtonPopup] = useState(false)

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
                        2. Open Corporate Customer
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
                        <TextField_Custom props1="GB Short Name." props2="30" props3="YES" />
                        <TextField_Custom props1="GB Full Name." props2="30" props3="YES" />
                        <DatePicker_Custom props1="Incorp Date.=" props2="30" props3="YES" />
                        <TextField_Custom props1="GB Street." props2="30" props3="YES" />
                        <TextField_Custom props1="GB Town/Dist." props2="30" props3="YES" />

                        <Select_Custom props1="City/Province." props2="25" props3="YES" props4={bioCity}/>
                        <Select_Custom props1="GB Country." props2="25" props3="YES" props4={bioCountry}/>
                        <Select_Custom props1="Nationality." props2="25" props3="YES" props4={bioCountry}/>
                        <Select_Custom props1="Residence." props2="25" props3="YES" props4={bioCountry}/>
                        <Select_Custom props1="Doc Type." props2="25" props3="YES" props4={bioDoctype}/>

                        <TextField_Custom props1="Doc ID." props2="30" props3="YES" />
                        <TextField_Custom props1="Doc Issue Place." props2="30" props3="YES" />
                        <DatePicker_Custom props1="Doc Issue Date" props2="30" props3="YES" />
                        <DatePicker_Custom props1="Doc Expiry Date" props2="30" props3="NO" />
                        <TextField_Custom props1="Contact Person." props2="30" props3="NO" />
                        <TextField_Custom props1="Position." props2="20" props3="NO" />
                        <TextField_Custom props1="Email Address." props2="30" props3="NO" />
                        <TextField_Custom props1="Remarks." props2="30" props3="NO" />

                        <Select_Custom props1="Main Sector." props2="30" props3="YES" props4={bioMainSector}/>
                        <Select_Custom props1="Sector." props2="30" props3="YES" props4={bioMainSector}/> 
                        <Select_Custom props1="Main Industry." props2="30" props3="NO" props4={bioMainIndustry}/>
                        <Select_Custom props1="Industry." props2="30" props3="NO" props4={bioMainIndustry}/>
                        <Select_Custom props1="Account Officer." props2="30" props3="NO" props4={bioAccountOfficer}/>

                    </div>

                    {/* <Button_Custom props1="Save"/>  */}
                    <Button 
                        sx={{ width: `40ch`, mr: `400px`, padding: ``}} 
                        variant="contained"
                        // color="success"
                        size="large"
                        // href="https://google.com"
                        onClick={() => {
                            let txtCity = document.getElementById('sltCity/Province.').textContent.toString();
                            let txtCountry = document.getElementById('sltGBCountry.').textContent.toString();
                            let txtNationality = document.getElementById('sltNationality.').textContent.toString();
                            let txtResidence = document.getElementById('sltResidence.').textContent.toString();
                            let txtDoctype = document.getElementById('sltDocType.').textContent.toString();
                            let txtMainSector = document.getElementById('sltMainSector.').textContent.toString();
                            let txtMainIndustry = document.getElementById('sltMainIndustry.').textContent.toString();
                            let txtAccountOfficer = document.getElementById('sltAccountOfficer.').textContent.toString();

                            console.log(document.getElementById('txtGBShortName.').value)
                            console.log(document.getElementById('txtGBFullName.').value)
                            console.log(document.getElementById('txtGBStreet.').value)
                            console.log(document.getElementById('txtGBTown/Dist.').value)
                            console.log(document.getElementById('txtDocID.').value)
                            console.log(document.getElementById('txtDocIssuePlace.').value)
                            console.log(document.getElementById('txtContactPerson.').value)
                            console.log(document.getElementById('txtPosition.').value)
                            console.log(checkName(bioCity, txtCity))
                            console.log(checkCode(bioCountry, txtCountry))
                            console.log(checkCode(bioCountry, txtNationality))
                            console.log(checkCode(bioCountry, txtResidence))
                            console.log(checkName(bioDoctype, txtDoctype))
                            console.log(checkName(bioMainSector, txtMainSector))
                            console.log(checkName(bioAccountOfficer, txtAccountOfficer))

                            // console.log("check code")   
                            // console.log(checkCode(bioCountry, txtCountry))

                            axios.post('https://cb-be.azurewebsites.net/customer/create_corporate_customer',{
                                GB_ShortName: document.getElementById('txtGBShortName.').value,
                                GB_FullName: document.getElementById('txtGBFullName.').value,
                                GB_Street: document.getElementById('txtGBStreet.').value,
                                GB_Towndist: document.getElementById('txtGBTown/Dist.').value,
                                docID: document.getElementById('txtDocID.').value,
                                docIssuePlace: document.getElementById('txtDocIssuePlace.').value,
                                contactPerson: document.getElementById('txtContactPerson.').value,
                                position: document.getElementById('txtPosition.').value,
                                emailAddress: document.getElementById('txtEmailAddress.').value,
                                remarks: document.getElementById('txtRemarks.').value,
                                
                                cityProvince: checkName(bioCity, txtCity),
                                GB_Country: checkCode(bioCountry, txtCountry),
                                nationality: checkCode(bioCountry, txtNationality),
                                residence: checkCode(bioCountry, txtResidence),
                                doctype: checkName(bioDoctype, txtDoctype),
                                mainSector: checkName(bioMainSector, txtMainSector),
                                sector: checkName(bioMainSector, txtMainSector),
                                // mainIndustry: checkName(bioMainIndustry, txtMainIndustry),
                                accountOfficer: checkName(bioAccountOfficer, txtAccountOfficer),
                            })
                            .then(res => {
                                console.log(res)
                                setButtonPopup(true)

                            })
                            .catch(err=>{
                                console.log(err)
                            })
                        }}
                    >
                        SAVE
                    </Button>
                    <Popup_Custom 
                            trigger={buttonPopup}
                            setTrigger={setButtonPopup}
                        >
                            
                        </Popup_Custom>


                </AccordionDetails>
            </Accordion>
        </div>
    ) 
}

export default OpenCorporateCustomer; 