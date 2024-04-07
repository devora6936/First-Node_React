import { useDispatch, useSelector } from "react-redux"
import { update } from "../../slices/postSlice"
import React, { useEffect, useState } from "react"
import useGet from "../../hooks/useGet"
import Post from "./post"
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


const Posts = () => {
    const [txt,setTxt]=useState("")

    const dispatch = useDispatch()
    const url = 'posts';

    const { data, loading, refetch } = useGet(url)
    useEffect(() => { loading ? console.log('loading') : dispatch(update({ arr: data })) }, [data])
    const postArr = useSelector((myStore) => myStore.postSlice.posts)

    
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
            {postArr.length? postArr.map(post => post.title.includes(txt)&&<Post post={post} refetch={refetch} />):<h2>there are no posts</h2>}
           
        </>
    )
}

export default Posts