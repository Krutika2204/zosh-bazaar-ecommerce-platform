import { Avatar, Box, Grid as MuiGrid, Grid, LinearProgress, Rating } from '@mui/material'
import React from 'react'
import type { Review } from '../../../types/reviewTypes';



const RatingCard = ({totalReview}:any) => {
    return (
        <div className="border p-5 rounded-md">


            <div className="flex items-center space-x-3 pb-10">
                <Rating
                    name="read-only"
                    value={4.6}
                    precision={0.5}
                    readOnly
                />

                <p className="opacity-60">{totalReview} Ratings</p>
            </div>
            <Box>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                >
                    <MuiGrid item xs={2} component={"div" as any}>
                        <p className="p-0">Excellent</p>
                    </MuiGrid>
                    <MuiGrid item xs={7} component={"div" as any}>
                        <LinearProgress
                            className=""
                            sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                            variant="determinate"
                            value={40}
                            color="success"
                        />
                    </MuiGrid>
                    <MuiGrid item xs={2} component={"div" as any}>
                        <p className="opacity-50 p-2">19259</p>
                    </MuiGrid>
                </Grid>
            </Box>
            <Box>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                >
                    <MuiGrid item xs={2} component={"div" as any}>
                        <p className="p-0">Very Good</p>
                    </MuiGrid>
                    <MuiGrid item xs={7} component={"div" as any}>
                        <LinearProgress
                            className=""
                            sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                            variant="determinate"
                            value={30}
                            color="success"
                        />
                    </MuiGrid>
                    <MuiGrid item xs={2} component={"div" as any}>
                        <p className="opacity-50 p-2">19259</p>
                    </MuiGrid>
                </Grid>
            </Box>
            <Box>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                >
                    <MuiGrid item xs={2} component={"div" as any}>
                        <p className="p-0">Good</p>
                    </MuiGrid>
                    <MuiGrid item xs={7} component={"div" as any}>
                        <LinearProgress
                            className="bg-[#885c0a]"
                            sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                            variant="determinate"
                            value={25}

                        />
                    </MuiGrid>
                    <MuiGrid item xs={2} component={"div" as any}>
                        <p className="opacity-50 p-2">19259</p>
                    </MuiGrid>
                </Grid>
            </Box>
            <Box>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                >
                    <MuiGrid item xs={2} component={"div" as any}>
                        <p className="p-0">Avarage</p>
                    </MuiGrid>
                    <MuiGrid item xs={7} component={"div" as any}>
                        <LinearProgress
                            className=""
                            sx={{
                                bgcolor: "#d0d0d0",
                                borderRadius: 4,
                                height: 7,
                                "& .MuiLinearProgress-bar": {
                                    bgcolor: "#885c0a", // stroke color
                                },
                            }}
                            variant="determinate"
                            value={21}
                            color="success"
                        />
                    </MuiGrid>
                    <MuiGrid item xs={2} component={"div" as any}>
                        <p className="opacity-50 p-2">19259</p>
                    </MuiGrid>
                </Grid>
            </Box>
            <Box>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                >
                    <MuiGrid item xs={2} component={"div" as any}>
                        <p className="p-0">Poor</p>
                    </MuiGrid>
                    <MuiGrid item xs={7} component={"div" as any}>
                        <LinearProgress
                            className=""
                            sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                            variant="determinate"
                            value={10}
                            color="error"
                        />
                    </MuiGrid>
                    <MuiGrid item xs={2} component={"div" as any}>
                        <p className="opacity-50 p-2">19259</p>
                    </MuiGrid>
                </Grid>
            </Box>


        </div>
    )
}

export default RatingCard