import { useDispatch, useSelector } from "react-redux"
import { update } from "../../slices/userSlice"
import React, { useEffect, useState } from "react"
import useGet from "../../hooks/useGet"
import User from './user'
import useHttp from '../../hooks/useHttp';
import AddDialog from "./addDialog"

import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    border: 'solid 1px',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const Users=()=>{
    const [txt,setTxt]=useState("")
    const{add}=useHttp()
    const dispatch = useDispatch()
    const url = 'users';

    const { data, loading, refetch } = useGet(url)
    useEffect(() => { loading ? console.log('loading') : dispatch(update({ arr: data })) }, [data])
    const userArr = useSelector((myStore) => myStore.userSlice.users)

    
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        onChange={(e)=>setTxt(e.target.value)}
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Toolbar>
        </Box>
            <AddDialog refetch={refetch}/>
            {userArr.length? userArr.map(user => user.name.includes(txt)&&<User user={user} refetch={refetch} />):<h2>there are no users </h2>}
            
        </>
    )
}

export default Users