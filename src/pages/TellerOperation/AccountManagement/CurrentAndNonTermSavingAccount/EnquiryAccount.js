import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";    

function EnquiryAccount() {
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
                        1.2 Enquiry Account
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ paddingLeft: "30px"}}>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default EnquiryAccount