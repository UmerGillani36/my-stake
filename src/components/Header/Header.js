import React from 'react'
import classes from './Header.module.css';
import {BsDiscord} from 'react-icons/bs'; 
import {ImTelegram} from 'react-icons/im'; 
import {FaUser} from 'react-icons/fa'; 
import {AiFillLock} from 'react-icons/ai'; 
import { InputAdornment, TextField } from '@mui/material';
import logo from '../../assets/icons/logo.png'
const list=[
    {label:'Sports',isHot:false},
    {label:'Live',isHot:false},
    {label:'Casino',isHot:false},
    {label:'Live Casino',isHot:false},
    {label:'Virtual Sport',isHot:false},
    {label:'Racing',isHot:false},
    {label:'Esports',isHot:false},
    {label:'Tournaments',isHot:true},
    {label:'Mini Games',isHot:true},
    {label:'Promotions',isHot:true},
]
const Header = () => {
  return (
    <div className={classes.Header}>
        <div className={classes.AuthWrapper}>
            <div className={classes.SocialLinks}>
                {/* When you use react router replace span with NavLink with same styles */}
                <span className={classes.link}>Affiliate</span>
                <span className={classes.link}>Live Chat</span>
                <span className={classes.linkIcons}><BsDiscord className={classes.Discord}/><ImTelegram className={classes.Telegram}/></span>
            </div>
            <div className={classes.Form}>
                <span className={classes.ForgotPassword}>Forgot Password?</span>
                <button className={classes.SignupAction}>Sign Up</button>
                <TextField 
                variant='outlined'  
                sx={{"& .MuiInputBase-root": {
                    height: 26,
                    color:'white',
                    fontSize:11,
                    background:'#3e3e46'
                    },
                    '& fieldset.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'grey',
                    },
                }}
                placeholder='Username' 
                size='small' 
                className={classes.Input}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FaUser className={classes.userIcon}/>
                        </InputAdornment>
                    ),
                   
        }}>

                </TextField>
                <TextField 
                variant='outlined'  
                type='password'
                sx={{"& .MuiInputBase-root": {
                    height: 26,
                    color:'white',
                    fontSize:11,
                    background:'#3e3e46'
                    },
                    '& fieldset.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'grey',
                    },
                }}
                placeholder='password' 
                size='small' 
                className={classes.Input}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AiFillLock className={classes.passIcon}/>
                        </InputAdornment>
                    ),
                   
        }}>

                </TextField>
                <button className={classes.LoginAction}>Log In</button>

            </div>
        </div>
        <div className={classes.Navbar}>
            <div className={classes.LogoWrapper}>
                <img src={logo} alt='logo' className={classes.Logo}/>
            </div>
            <div>
                <ul className={classes.navLinks}>
                    {list.map((li)=>
                    <li className={classes.navLink}>
                        {li.label}
                        {li.isHot && <span className={classes.Hot}>Hot</span>}
                    </li>
                    )}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header