import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
    video: {
        width: '550px',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
        borderRadius: '30px',
        border: '5px solid black',
    },
    gridContainer: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    paper: {
        padding: '10px',
        border: '10px solid black',
        margin: '10px',
        borderRadius: '30px',
        textAlign: 'center',
        backgroundColor: '#002200',
    },
    nickname: {
        alignContent: 'center',
        color: 'white',
    },
}));

function VideoPlayer() {

    const {
        name,
        callAccepted,
        myVideo,
        userVideo,
        callEnded,
        stream,
        call
    } = useContext(SocketContext)

    const classes = useStyles();

    return (
        <Grid container className={classes.gridContainer} >

            {/* Own Video */}
            {stream && (
                <Paper className={classes.paper} >
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h5"
                            gutterBottom
                            className={classes.nickname}
                        >
                            {name || 'Your Name'}
                        </Typography>
                        <video
                            playsInline
                            muted
                            ref={myVideo}
                            autoPlay
                            className={classes.video}
                        />
                    </Grid>
                </Paper>
            )}

            {/* User Video */}
            {callAccepted && !callEnded && (
                <Paper className={classes.paper} >
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h5"
                            gutterBottom
                            className={classes.nickname}
                        >
                            {call.name || 'Name'}
                        </Typography>
                        <video
                            playsInline
                            ref={userVideo}
                            autoPlay
                            className={classes.video}
                        />
                    </Grid>
                </Paper>
            )}

        </Grid>
    )
};

export default VideoPlayer
