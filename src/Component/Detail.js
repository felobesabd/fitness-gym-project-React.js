import React from "react";
import {Box, Stack, Button, Typography} from "@mui/material";

import bodyPartIcon from '../assets/icons/body-part.png';
import targetIcon from '../assets/icons/target.png';
import equipmentIcon from '../assets/icons/equipment.png';

const Detail = ({ detailExercise })=> {

    const { bodyPart, gifUrl, name, target, equipment } = detailExercise;

    const extraDetails = [
        {
            icon: bodyPartIcon,
            name: bodyPart
        },
        {
            icon: targetIcon,
            name: target
        },
        {
            icon: equipmentIcon,
            name: equipment
        },
    ]

    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }}
                            fontWeight={700} textTransform="capitalize">
                    {name}
                </Typography>
                <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize', color: '#ff2526' }}>{name}</span>{' '}
                    bup is one of the best <br /> exercises to target your{' '}
                    <span style={{ textTransform: 'capitalize', color: '#ff2526' }}>{target}.{' '}</span>
                    It will help you improve your{' '}<br /> mood and gain energy.
                </Typography>
                {
                    extraDetails?.map((item) => (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px',
                            height: '100px' }}>
                            <img src={item.icon} alt={bodyPart}
                                 style={{ width: '50px', height: '50px' }} />
                        </Button>
                        <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                            {item.name}
                        </Typography>
                    </Stack>
                ))
                }
            </Stack>
        </Stack>
    );
}

export default Detail;