import React, { useContext, useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridContainer: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    container: {
        width: '600px',
        margin: '35px 0',
        padding: 0,
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
    margin: {
        marginTop: 20,
    },
    padding: {
        padding: 20,
    },
    paper: {
        padding: '10px 20px',
        border: '8px solid black',
        borderRadius: '30px',
    },
}));

function Options({ children }) {

    const {
        me,
        callAccepted,
        name,
        setName,
        callEnded,
        leaveCall,
        callUser
    } = useContext(SocketContext);

    const [idToCall, setIdToCall] = useState('');

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Paper elevation={10} className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container className={classes.gridContainer}>

                        {/* Own Information */}
                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant="h6">
                                Account Information
                            </Typography>
                            <TextField
                                label="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                            />
                            {console.log(me)}
                            <CopyToClipboard
                                text={me}
                                className={classes.margin}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    startIcon={<Assignment fontSize="large" />}
                                >
                                    Get Your Room ID
                                </Button>
                            </CopyToClipboard>
                        </Grid>

                        {/* Calling */}
                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant="h6">
                                Make A Call
                            </Typography>
                            <TextField
                                label="ID to Call"
                                value={idToCall}
                                onChange={(e) => setIdToCall(e.target.value)}
                                fullWidth
                            />
                            {callAccepted && !callEnded ? (
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<PhoneDisabled fontSize="large" />}
                                    fullWidth
                                    onClick={leaveCall}
                                    className={classes.margin}
                                >
                                    Leave
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<Phone fontSize="large" />}
                                    fullWidth
                                    onClick={() => callUser(idToCall)}
                                    className={classes.margin}
                                >
                                    Call
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
        </Container>
    )
};

export default Options
