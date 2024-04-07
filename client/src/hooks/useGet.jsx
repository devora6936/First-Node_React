import { useState } from 'react'
import axios from 'axios'
import useAxios from 'axios-hooks'

const UseGet = (url) => {
const prefixUrl='http://localhost:1000/api/'

    const [{ data, loading, error }, refetch] = useAxios(`${prefixUrl}${url}`)
    if(error)
    console.log(error);
    return {data,loading,refetch}

}
export default UseGet