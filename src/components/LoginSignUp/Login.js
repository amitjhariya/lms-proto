import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';

function Login() {

    const [values, setValues] = useState({
        password: '',
        email: '',
        showPassword: false
    })

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="login">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-sm-4 login__left">

                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="row justify-content-end">
                            <div className="col-7">
                                <p>Don't have a account? <a href="/signup">Sign up now</a></p>
                            </div>

                        </div>
                        <div className="col-11 align-self-center">
                            <div className="row p-3">
                                <div className="col">
                                    <h3>Log in to FutureTal</h3>
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="col">
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-Email"
                                            type="email"
                                            value={values.email}
                                            onChange={handleChange('email')}
                                            labelWidth={70}
                                        />
                                    </FormControl>
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="col">
                                    <FormControl className="mt-3" fullWidth variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={values.showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            labelWidth={70}
                                        />
                                        <a className="text-end" href="/forgot">Forgot password?</a>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="col">
                                    <Button className="col" variant="contained" color="primary">Log in</Button>
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="col">
                                    <p className="text-center">OR</p>
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="col">
                                <Button className="col-6" variant="outlined" color=""><img src="https://ai.devoteam.com/wp-content/uploads/sites/91/2018/05/google-logo-icon-png-transparent-background.png" width="20px" />  Log in with Google</Button>
                                <Button className="col-6" variant="outlined" color=""><FacebookIcon />Log in with Facebook</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Login
