import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Stack } from '@mui/material'
import FetchFromApi from '../utilities/FetchFromApi'
import { useEffect } from 'react'
import { useState } from 'react'
import Video from './Video'
import { nanoid } from 'nanoid'
const SearchVideos = () => {
    const [data, setData] = useState([])
    const { searchTerm } = useParams()
    useEffect(() => {
        FetchFromApi(`search?q=${searchTerm}&part=snippet,id`).then((data) => setData(data.items))
    }, [searchTerm])
    return (
        <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap", mt: "2em" }}>
            <Box sx={{ width: "1300px", margin: "auto" }}>
                <Video key={nanoid()} data={data} />
            </Box>
        </Stack>
    )
}

export default SearchVideos