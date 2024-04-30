import {useState} from 'react';
import './settings.css'
import {Avatar, Box, Button, Card, Container, Stack, TextField, Typography} from '@mui/material';
import CountrySelect from '../../components/countrySelected/CountrySelect';
import PrimarySearchAppBar from "../../components/TopSerarch/PrimarySearchAppBar.jsx";
// import {avtar} from '../../assets/avatar.png'

export const Settings = () => {
    const [jobs, setJobs] = useState(true)
    const [activeCard, setActiveCard] = useState(1)
    const [values, setValues] = useState({
        AdminName: "",
        email: "",
        phone: "",
        currentPassword: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "AdminName",
            type: "text",
            placeholder: "Admin Name",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Admin Name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "phone",
            type: "phone",
            placeholder: "phone",
            errorMessage: "It should be a valid mobile number!",
            label: "Phone Number",
            pattern: `+20(?=.*[0-9]{3}) (?=.*[0-9]{3}) (?=.*[0-9]{3})`,
            required: true,
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },


    ];
    const password = [
        {
            id: 1,
            name: "currentPassword",
            type: "password",
            placeholder: "Current Password",
            errorMessage: "invalid Passwords!",
            label: "Current Password",
            pattern: values.password,
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 3,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },

    ]

    // const validationSchema = yup.object({
    //   email: yup
    //     .string('Enter your email')
    //     .email('Enter a valid email')
    //     .required('Email is required'),
    //   password: yup
    //     .string('Enter your password')
    //     .min(8, 'Password should be of minimum 8 characters length')
    //     .required('Password is required'),
    // });

    // const WithMaterialUI = () => {
    //   const formik = useFormik({
    //     initialValues: {
    //       email: 'foobar@example.com',
    //       password: 'foobar',
    //     },
    //     validationSchema: validationSchema,
    //     onSubmit: (values) => {
    //       alert(JSON.stringify(values, null, 2));
    //     },
    //   });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
        // console.log("onChange:", e.target.name, " value is ", e.target.value)
    };
    return (
        <div className='settings'>
            <PrimarySearchAppBar/>
            <Card className='container main-content mt-2'>
                <Typography variant="h5" component="h2" className='container fw-bold mt-3 ' sx={{color: 'darkblue'}}>
                    Settings
                </Typography>
                <Container className='mt-4'>
                    <Stack spacing={{xs: 1, sm: 2}} direction="row" useFlexGap flexWrap="wrap">
                        <Button
                            onClick={() => {
                                setActiveCard(1);
                                setJobs(true);
                            }}
                            style={

                                activeCard === 2
                                    ? {backgroundColor: "white", color: "rgba(3, 68, 136, 1)"}
                                    : {backgroundColor: "white"}
                            }
                        >My Profile</Button>
                        <Button
                            onClick={() => {
                                setActiveCard(2);
                                setJobs(false);
                            }}
                            style={
                                activeCard === 1
                                    ? {backgroundColor: "white", color: "rgba(3, 68, 136, 1)"}
                                    : {backgroundColor: "white"}
                            }
                        >Password</Button>
                    </Stack>
                    <form onSubmit={handleSubmit}>
                        {jobs == true ? (
                            <Box sx={{bgcolor: '#fff'}}
                                 className="d-flex flex-wrap"
                            >
                                {/* <Avatar
                className='col-md-12'
                alt="bemy Sharp" 
                src='src' 
                sx={{ width: 50, height: 50 }}
                /> */}
                                {inputs.map((input) => (
                                    <>
                                        {/* <label htmlFor="exampleFormControlInput1" className="form-label">{input.name}</label> */}
                                        <TextField
                                            //  fullWidth
                                            className='mt-4 col-md-6 d-flex'
                                            // sx={{ width: 500 }}
                                            key={input.id}
                                            name={input.name}
                                            label={input.label}
                                            type={input.type}
                                            variant='outlined'
                                            onChange={onChange}
                                        />
                                    </>
                                ))}
                                <CountrySelect/>
                                <div className="mt-4 col-md-12">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Bio</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                                              placeholder='Write Something'></textarea>
                                </div>

                            </Box>
                        ) : (
                            <Box sx={{bgcolor: '#fff'}}>

                                {password.map((password) => (
                                    <>
                                        <TextField
                                            className='mt-4 col-6 d-flex'
                                            // sx={{ width: 500 }}
                                            // fullWidth
                                            key={password.id}
                                            name={password.name}
                                            label={password.label}
                                            type="password"
                                            // value={formik.values.password}
                                            // onChange={formik.handleChange}
                                            // onBlur={formik.handleBlur}
                                            // error={formik.touched.password && Boolean(formik.errors.password)}
                                            // helperText={formik.touched.password && formik.errors.password}
                                        />
                                    </>

                                ))}

                            </Box>

                        )}
                        <Stack spacing={{xs: 1, sm: 2}} direction="row" justifyContent='center' useFlexGap
                               flexWrap="wrap"
                               className='my-5'
                        >
                            <button type="submit" onSubmit={onchange} className="btn btn-primary btn-lg">Submit</button>
                            <button type='reset' className="btn btn-outline-primary btn-lg">Cancel</button>
                        </Stack>
                    </form>
                </Container>
            </Card>
        </div>
    )
}