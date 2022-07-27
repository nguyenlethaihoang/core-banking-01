import { AccountCircle } from "@mui/icons-material";
import { Button, Checkbox, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system";
import './LoginForm.css'



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function LoginForm() {
    return (
        <div className="main" 
            // action="/"
         >
            <Typography
                fontWeight= "700" 
                variant="h4"
                color="#ea8685"
                sx={{
                    padding: "50px"
                  }}
            >
                VIET VICTORY
            </Typography>

            <Typography
                fontWeight= "600" 
                color="white"
                sx={{
                    paddingLeft: "40px",
                    paddingBottom: "100px"
                  }}
            >
                Trao nghề nghiệp - Trao tương lai
            </Typography>
            <Typography
                fontWeight= "600" 
                color="white"
                sx={{
                    paddingLeft: "70px",
                    paddingBottom: "30px"
                }}
            >Please login to continue</Typography>

            <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '20px' }}>
                <AccountCircle 
                    sx={{ color: 'white', mr: 1, my: 0.5 }} 
                />
                <TextField 
                    id="txtUsername" 
                    label="Username" 
                    variant="filled"
                    sx={{ 
                        input: { color: 'black' }, 
                        bgcolor: 'white',
                        borderRadius: 2,
                        // p: 2,
                        minWidth: 300,
                    }}
                    color="secondary"
                    
                />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '20px'}}>
                <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5 }} />
                <TextField 
                    id="txtPassword" 
                    label="Password"
                    type="password" 
                    variant="filled"
                    sx={{ 
                        input: { color: 'black' }, 
                        bgcolor: 'white',
                        borderRadius: 2,
                        // p: 2,
                        minWidth: 300,
                    }}
                    color="secondary"
                    
                />
            </Box>
            
            <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
                <Checkbox 
                    {...label} 
                    defaultChecked 
                    sx={{
                        color: "white",
                        '&.Mui-checked': {
                        color: "white",
                        },
                    }}
                /> 
                <Typography
                    color="white"
                    sx={{ display: 'inline'}}
                >Remember me</Typography>
            </Box>
            <br />
            <Button 
                variant="contained"
                sx={{ 
                    padding: '10px 50px', 
                    marginTop: '45px', 
                    marginLeft: '100px', 
                    backgroundColor: '#f8c291',
                    color: '#0a3d62',
                    fontStyle: 'bold',
                    '&:hover': {
                        backgroundColor: '#f8c291',
                        borderColor: '#0062cc',
                        boxShadow: 'none',
                      },
                }}
                type={"submit"}
                onClick= {
                    // canClick() && 
                    () => {
                        console.log('txtUsername')
                        console.log(document.getElementById('txtUsername').value)
                        console.log('txtPassword')
                        console.log(document.getElementById('txtPassword').value) 
                        if (localStorage) {
                            console.log("Save thanh cong")
                            var name = document.getElementById('txtUsername').value;
                            localStorage.setItem('name', name);
                            var pass = document.getElementById('txtPassword').value;
                            localStorage.setItem('pass', pass);
                            // localStorage.clear()
                        }
                        window.location.reload(false)
                        // window.history.pushState('Home', 'Title Home', '/')

                    }
                }
            >
                Log in
            </Button>


        </div>
    )
}

export default LoginForm