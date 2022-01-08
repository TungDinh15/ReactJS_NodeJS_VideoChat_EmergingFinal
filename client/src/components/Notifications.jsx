import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

function Notifications() {

    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <div>
            {call.isReceivedCall && !callAccepted && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1>Join with {call.name} :   </h1>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={answerCall}
                    >
                         ACCEPT
                    </Button>
                </div>
            )}
        </div>
    )
};

export default Notifications

