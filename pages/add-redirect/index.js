import { Box, CircularProgress, TextField } from "@mui/material";
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from "axios";

export default function GetVideoCode() {

  const [token, setToken] = useState('')
  const [query, setQuery] = useState('')
  const [url, setUrl] = useState('')
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(()=>{
    let token = localStorage.getItem('token')
    if(token){
      setToken(token)
    }else{
      window.location.replace('/login')
    }
  }, [])

  function getData() {
    setError(false)
    setErrorMessage("")
    try {
        if(query.length == 0){
            return
        }
        setLoading(true)
        let data = { esUrl: query }
        axios.post('https://msn-backend.essentiallysports.com/add/redirect', data, {
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
        }).then((res)=>{
            if(res.status == 200){
                if (res.data.code == 200) {
                    setUrl(res.data.url)
                    setLoading(false)
                }
            }
        })
    } catch (error) {
        console.log(error)
        setLoading(false)
        setError(true)
        setErrorMessage(error.toString())
    }
  }

  return (
    <main>
      <Box sx={{ width: { xs: 'auto', sm: 'auto', md: '800px' }, margin: 'auto', background: 'white', height: 'auto', mt: '50px', borderRadius: '20px', padding: '30px' }}>
        <Box>
          <h1>Get Redirected URL</h1>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
            <TextField 
                variant="outlined"
                label="Enter query"
                onChange={(event)=>{
                    setQuery(event.target.value)
                }}
                sx={{ width: '500px' }}
                value={query}
            />
            <Button variant="contained" onClick={(event) => {
                getData()
            }}>
                Submit
            </Button>
          </Box>
          {loading && <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <CircularProgress/>
          </Box>}
          {error && <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <p>{errorMessage}</p>
          </Box>}
          {<Box sx={{ display: 'flex', gap: '30px', marginTop: '20px', marginLeft: '80px' }}>
            <h3>Short url - {url}</h3>
          </Box>}
          <Box>
          </Box>
        </Box>
      </Box>
    </main>
  )
}