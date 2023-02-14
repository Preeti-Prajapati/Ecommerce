import { Card, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'

const Listitem = ({image,itemName,rate,ratereview,onClick}) => {
    return (
        <Card sx={{ maxWidth: 300, marginTop: '20px' }} onClick={onClick}>
            <CardMedia
                component="img"
                alt="image"
                height="400"
                image={image} />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {itemName}
                </Typography>
                <Typography variant="p" style={{ fontWeight: 'bold' }}>
                    <span style={{ fontSize: '12px', fontWeight: 'bold', padding: '5px', color: 'orange' }}>$</span>{rate}
                </Typography>
                <div style={{display:'flex',justifyContent:'center'}}>
                <Rating
                    name="simple-controlled"
                    // value={value}
                    onChange={(event, newValue) => {
                        // setValue(newValue);
                    }}
                />
                <Typography variant="p" style={{ fontWeight: 'bold',color:'blue' }}>{ratereview}</Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default Listitem