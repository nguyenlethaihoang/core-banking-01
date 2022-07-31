import { Button, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Select_Custom from '../../../../../components/Select_Custom';
import TextField_Custom from '../../../../../components/TextField_Custom';
import './Check_Custom.css'
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';


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

function Check_Custom(props1) {
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
  return (props1.trigger) ? 
  (

    <div className="popup">
        <div className='popup-inner'>
            
            <h1>
                Open Account 
            </h1>
            <div
                style={{ 
                    display: "flex", 
                    width: "100%", 
                    flexWrap: "wrap",
                    paddingBottom: "20px"
                }}
            >
                <IconButton>
                    <EditIcon />
                </IconButton>
                <IconButton>
                    <PrintIcon />
                </IconButton>
                <IconButton></IconButton>
            </div>
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
                            alignItems: "center",
                            width: "100%", 
                            // flexWrap: "wrap",
                            paddingTop: "10px"
                        }}
                    >
                        <Button 
                            className="close-btn"
                            variant='contained'
                            color='success'
                            sx={{
                                marginRight: "30px"
                            }}
                            onClick={() => {props1.setTrigger(false)}
                            }
                        >
                            Save
                        </Button>

                        <Button 
                            className="close-btn"
                            variant='contained'
                            color='error'
                            onClick={() => {props1.setTrigger(false)}
                            }
                        >
                            Cancel
                        </Button>
                    </div>
            
        </div>
    </div>
  ) :  "";
}

export default Check_Custom