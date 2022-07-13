import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './Profile.css'
import { inject } from 'mobx-react';

function Profile(props) {
    console.log(props.AuthStore.user)
    return (
        <div>
            <div className='profile-container'>
                <div className='profile-image'>
                    <Stack direction="row" spacing={2}>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 200, height: 200 }}
                        />
                    </Stack>
                </div>
                <div className='first-last-name-profile'>Ahmad Gabarin</div>
                <div className='black-line'></div>
            </div>
        </div>
    )
}

export default inject(`AuthStore`)(Profile)