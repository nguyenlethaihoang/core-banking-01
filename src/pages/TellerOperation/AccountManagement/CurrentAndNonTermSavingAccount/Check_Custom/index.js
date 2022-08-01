import { Button, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Select_Custom from '../../../../../components/Select_Custom';
import TextField_Custom from '../../../../../components/TextField_Custom';
import './Check_Custom.css'
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import Select_Value_Custom from '../../../../../components/Select_Value_Custom';
import TextField_Value_Custom from '../../../../../components/TextField_Value_Custom';


const categoryData = [
    {id: 1,
    Name: '1000 - Tiền  gửi thanh toán' },
    {
    id: 2,
    Name: '2000 - Tiết kiệm không kỳ hạn'},
]

const currencyData = [{id: 1, Name: 'USD' },{id: 2,Name: 'EUR'},{id: 3,Name: 'GBP'},{id: 4,Name: 'JPY'},{id: 5,Name: 'VND'},]

function Check_Custom(props1) {
    let tmpURL = `https://cb-be.azurewebsites.net/account/debit_account/get/${props1.AccountCode}`
    const [bioFilled, setBioFilled] = useState([]);
    useEffect(() => {
        const fetchDataFilled = async () => {
            const response = await fetch(`${tmpURL}`);
            const data = await response.json();
            console.log("Du lieu debitaccount nhan tu backend");
            console.log(data.data)
            setBioFilled(data.data);  
        };  
        fetchDataFilled();
    }, []);

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

    const [bioRelationCode, setBioRelationCode] = useState([]);
    useEffect(() => {
        const fetchDataRelationCode = async () => {
            const response = await fetch(`https://cb-be.azurewebsites.net/storage/get_relation`);
            const data = await response.json();
            console.log("relation")
            console.log(data.rows)
            setBioRelationCode(data.rows);  
        };
        fetchDataRelationCode();
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
                    <EditIcon 
                        onClick={()=> {
                            // const element = document.getElementById('foo');
                            // element.css({
                            //     'backgroundColor':'red',
                            // })
                            document.getElementById("foo").style['pointer-events'] = 'auto';
                            document.getElementById("foo").style['opacity'] = '1';
                            document.getElementById("bar").style['pointer-events'] = 'auto';
                            document.getElementById("bar").style['opacity'] = '1';
                        }}
                    />
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
                    flexWrap: "wrap",
                    paddingBottom: "20px"
                }}
            >
                <h3>Account Code: {bioFilled.id} </h3>
            </div>
            <div
                id='foo'
                style={{ 
                    display: "flex", 
                    width: "100%", 
                    flexWrap: "wrap"
                }}
            >
                 
                <Select_Value_Custom props1="Customer ID" props2="35" props3="city" props4={bioCustomer} props5={bioFilled} props6="CustomerID"/>
                <Select_Value_Custom props1="Category" props2="35" props3="city" props4={categoryData} props5={bioFilled} props6="Category"/>
                <Select_Value_Custom  props1="Product Line" props2="35" props3="city" props4={bioProductLine} props5={bioFilled} props6="ProductLine"/>
                <Select_Value_Custom props1="Currency" props2="15" props3="city" props4={currencyData} props5={bioFilled} props6="Currency"/>
                <TextField_Value_Custom props1="Account Title" props2="40" props3="YES" props4={bioFilled.AccountTitle}/>
                <TextField_Value_Custom props1="Short Title" props2="40" props3="YES" props4={bioFilled.ShortTitle}/>
                <Select_Value_Custom props1="Account Officer" props2="25" props3="account_officer" props4={bioAccountOfficer} props5={bioFilled} props6="AccountOfficer"/>
                <Select_Value_Custom props1="Charge Code" props2="25" props3="account_officer" props4={bioChargeCode} props5={bioFilled} props6="ChargeCode"/>
            </div>
 
            <hr/>
            <p><b>JOIN HOLDER</b></p>
            <div
                id='bar'
                style={{ 
                    display: "flex", 
                    width: "100%", 
                    flexWrap: "wrap",
                    paddingTop: "10px"
                }}
            >
                
                <br/>
                <Select_Value_Custom props1="ID Join Holder" props2="35" props3="account_officer" props4={bioCustomer} props5={bioFilled} props6="JoinHolderID"/>
                <Select_Value_Custom props1="Relation Code" props2="35" props3="account_officer" props4={bioRelationCode} props5={bioFilled} props6="RelationCode"/>
                <TextField_Value_Custom props1="Join Notes" props2="35" props3="NO" props4={bioFilled.JoinNotes}/> 

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