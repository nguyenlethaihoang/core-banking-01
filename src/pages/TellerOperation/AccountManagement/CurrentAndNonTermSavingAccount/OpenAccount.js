import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";    
import { useEffect, useState } from "react";
import Select_Custom from "../../../../components/Select_Custom";
import TextField_Custom from "../../../../components/TextField_Custom";
import { padding } from "@mui/system";
import Popup_Custom from "../../../../components/Popup_Custom";
import Popup_Custom_Fail from "../../../../components/Popup_Custom_Fail";
import axios from "axios";

const categoryData = [
    {id: 1,
    Name: '1000 - Tiền  gửi thanh toán' },
    {
    id: 2,
    Name: '2000 - Tiết kiệm không kỳ hạn'},
]

const currencyData = [
    {
        id: 1,
        Name: 'USD' 
    },
    {
        id: 2,
        Name: 'EUR'
    },
    {
        id: 3,
        Name: 'GBP'
    },
    {
        id: 4,
        Name: 'JPY'
    },
    {
        id: 5,
        Name: 'VND'
    },
]

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

function checkNameCustomerID(a, b) {
    let temp = ""
    a.map((data, index) => {
        // console.log("b")
        // console.log(b)
        // console.log("data.GB_FullName")
        // console.log(data.GB_FullName)
        if (b.includes(data.GB_FullName))
        {
            temp = data.id.toString()
            
        }
    })
    return temp
}

function OpenAccount() {

    const [buttonPopup, setButtonPopup] = useState(false)
    const [buttonPopupFail, setButtonPopupFail] = useState(false)

    const [bioCustomer, setBioCustomer] = useState([]);
    useEffect(() => {
        const fetchDataCustomer = async () => {
            const response = await fetch(`https://cb-be.azurewebsites.net/customer/get_all_customer`);
            const data = await response.json();
            // console.log("data")
            // console.log(data.data.customer)
            setBioCustomer(data.data.customer);  
        };
        fetchDataCustomer();
    }, []);

    const [bioProductLine, setBioProductLine] = useState([]);
    useEffect(() => {
        const fetchDataCustomer = async () => {
            const response = await fetch(`https://cb-be.azurewebsites.net/storage/get_product_line`);
            const data = await response.json();
            // console.log("dataProductLine")
            // console.log(data)
            setBioProductLine(data.rows);  
        };
        fetchDataCustomer();
    }, []);

    const [bioChargeCode, setBioChargeCode] = useState([]);
    useEffect(() => {
        const fetchDataCustomer = async () => {
            const response = await fetch(`https://cb-be.azurewebsites.net/storage/get_charge_code`);
            const data = await response.json();
            setBioChargeCode(data.rows);  
        };
        fetchDataCustomer();
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
                        1.1 Open Account
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
                        <Select_Custom props1="Customer ID" props2="35" props3="city" props4={bioCustomer}/>
                        <Select_Custom props1="Category" props2="35" props3="city" props4={categoryData}/>
                        <Select_Custom props1="Product Line" props2="35" props3="city" props4={bioProductLine}/>
                        <Select_Custom props1="Currency" props2="35" props3="city" props4={currencyData}/>
                        <TextField_Custom props1="Account Title" props2="35" props3="YES"/>
                        <TextField_Custom props1="Short Title" props2="35" props3="YES"/>
                        <Select_Custom props1="Account Officer" props2="25" props3="account_officer" props4={bioAccountOfficer}/>
                        <Select_Custom props1="Charge Code" props2="25" props3="account_officer" props4={bioChargeCode}/>
                    </div>
 
                    <hr/>
                    <p><b>JOIN HOLDER</b></p>
                    <div
                        style={{ 
                            display: "flex", 
                            width: "100%", 
                            flexWrap: "wrap",
                            paddingTop: "10px"
                        }}
                    >
                        
                        <br/>
                        <Select_Custom props1="ID Join Holder" props2="35" props3="account_officer" props4={bioCustomer}/>
                        <Select_Custom props1="Relation Code" props2="35" props3="account_officer" props4={bioAccountOfficer}/>
                        <TextField_Custom props1="Join Notes" props2="35" props3="NO"/>
  
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
                                let txtCustomerID = document.getElementById('sltCustomerID').textContent.toString();
                                let txtCategory = document.getElementById('sltCategory').textContent.toString();
                                let txtProductLine = document.getElementById('sltProductLine').textContent.toString();
                                let txtCurrency = document.getElementById('sltCurrency').textContent.toString();

                                // console.log("txtCustomerID")
                                // console.log(txtCustomerID)
                                // console.log(checkNameCustomerID(bioCustomer, txtCustomerID))
                                // console.log("txtCategory")
                                // console.log(txtCategory)
                                // console.log(checkName(categoryData, txtCategory))
                                // console.log("txtProductLine")
                                // console.log(txtProductLine)
                                // console.log(checkName(bioProductLine, txtProductLine))
                                // console.log("txtCurrency")
                                // console.log(txtCurrency)
                                // console.log(checkName(currencyData, txtCurrency))

                                // console.log("accountTitle")
                                // console.log( document.getElementById('txtAccountTitle').value)
                                // console.log("shortTitle")
                                // console.log( document.getElementById('txtShortTitle').value)
                                // console.log("joinNotes")
                                // console.log(document.getElementById('txtJoinNotes').value)





                                axios.post('https://cb-be.azurewebsites.net/account/debit_account/open',{
                                    accountTitle: document.getElementById('txtAccountTitle').value,
                                    shortTitle: document.getElementById('txtShortTitle').value,
                                    joinNotes: document.getElementById('txtJoinNotes').value,

                                    customerID: checkNameCustomerID(bioCustomer, txtCustomerID),
                                    category: checkName(categoryData, txtCategory),
                                    productLine: checkName(bioProductLine, txtProductLine),
                                    currency: checkName(currencyData, txtCurrency),
                                })
                                .then(res => {
                                    // console.log("res")
                                    // console.log(res)
                                    setButtonPopup(true)

                                })
                                .catch(err=>{
                                    // console.log("err")
                                    // console.log(err)
                                    setButtonPopupFail(true)
                                })
                            }
                             
                        }
                        >
                            SAVE
                        </Button>
                        <Popup_Custom 
                            trigger={buttonPopup}
                            setTrigger={setButtonPopup}
                        >
                            
                        </Popup_Custom>
                        <Popup_Custom_Fail 
                            trigger={buttonPopupFail}
                            setTrigger={setButtonPopupFail}
                            
                        >
                            
                        </Popup_Custom_Fail>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
 
export default OpenAccount