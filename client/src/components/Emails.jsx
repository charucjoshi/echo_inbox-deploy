    //Display emails
import {EMPTY_TABS} from '../constants/constant';
import NoMails from './common/NoMails';
import Email from './Email';
import {DeleteOutlined} from '@mui/icons-material';
import {API_URLS} from '../services/api.urls';
import {useParams, useOutletContext} from 'react-router-dom';
import useApi from '../hooks/useApi';
import {useEffect, useState} from 'react';
import {Checkbox, Box,List} from '@mui/material';

const Emails = () => {
    const {openDrawer} = useOutletContext();
    const {type} = useParams();
    const [selectedEmails, setSelectedEmails] = useState([]);
    const [refreshScreen, setRefreshScreen] = useState(false);

    const getEmailsService = useApi(API_URLS.getEmailFromType);
    const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
    const deleteEmailsService = useApi(API_URLS.deleteEmails);

    useEffect(() => {
        getEmailsService.call({}, type);
    }, [type, refreshScreen] )
    
    const selectAllEmails = (e) => {
        if(e.target.checked){
            const emails = getEmailsService?.response?.map(email => email._id);
            setSelectedEmails(emails);
        }
        else{
            setSelectedEmails([]);
        }
    }
    
    const deleteSelectedEmails = (e) => {
        if(type === 'bin'){
            deleteEmailsService.call(selectedEmails);
        }
        else{
            moveEmailsToBinService.call(selectedEmails);
        }
        setRefreshScreen(prevState => !prevState);
    }


    return (
        <Box style={openDrawer ? {color: '#000000', width: 'calc(100%-250px)', marginLeft: 250} : {color: '#000000', width: '100%'}}>
            <Box style={{padding: '20px 10px 0 10px', display: 'flex', alignItems: 'center'}}>    
                <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />
                <DeleteOutlined onClick={(e) => deleteSelectedEmails(e)}/>
            </Box>
            <List>
            {
                getEmailsService?.response?.map(email =>(
                    <Email
                        key={email.id}
                        email={email}
                        selectedEmails={selectedEmails}
                        setRefreshScreen={setRefreshScreen}
                        setSelectedEmails={setSelectedEmails}
                    />
                ))
            }
            </List>
            {
                getEmailsService?.response?.length === 0 &&
                    <NoMails message={EMPTY_TABS[type]} />
            }
        </Box>
    )
}

export default Emails;
