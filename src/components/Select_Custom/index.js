import { FormControl, InputLabel, Select } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from "react";

// const arr = Array()

function Select_Custom({props1, props2, props3, props4}) {


    let idLabelTemp = "lbl" + props1.toString().replace(/\s/g, '');
    let idSelectTemp = "slt" + props1.toString().replace(/\s/g, '');
    let widthTemp = props2.toString() + "ch"
     if (props4 !== undefined && props4.length != 25)
    return (
        
        <div
            style={
                props3.toString() === "NO" ? 
                    {
                        // display:  "inline",
                        marginRight: "30px",
                        marginBottom: "20px" 
                    }
                : 
                    {
                        // lineBreak: "auto",
                        marginRight: "30px",
                        marginBottom: "20px" 
                    }
            }
        >
            <FormControl sx={{ m: 0, minWidth: `${widthTemp}` }}>
                <InputLabel id={idLabelTemp}>{props1}</InputLabel>
                <Select
                    // onChange={handleChange}
                    labelId={idLabelTemp}
                    id={idSelectTemp}
                    label={props1}
                >

                    {
                        props4.map((data, index) => {
                            return (
                                <MenuItem key={index} value={data.id}>{data.Name}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </div>
    )
    else if (props4 !== undefined) 
    return (
        <div
            style={
                props3.toString() === "NO" ? 
                    {
                        // display:  "inline",
                        marginRight: "30px",
                        marginBottom: "20px" 
                    }
                : 
                    {
                        // lineBreak: "auto",
                        marginRight: "30px",
                        marginBottom: "20px" 
                    }
            }
        >
            <FormControl sx={{ m: 0, minWidth: `${widthTemp}` }}>
                <InputLabel id={idLabelTemp}>{props1}</InputLabel>
                <Select
                    // onChange={handleChange}
                    labelId={idLabelTemp}
                    id={idSelectTemp}
                    label={props1}
                >

                    {
                        props4.map((data, index) => {
                            return (
                                <MenuItem key={index} value={data.id}>{data.Code}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </div>
    )
    
} 


export default Select_Custom;