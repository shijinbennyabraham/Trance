import React from 'react'
import {Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

function SavedVideo({item}) {
    return (
        <div className="upload-div">
                <p>{item}</p>
                <div style={{display:'flex',transition:'0.2s ease'}}>
                    <div>
                        <Button color="primary" variant="contained" style={{textTransform:'capitalize',
                        backgroundColor:'#6C63FF',color:'white'}}><CloudDownloadIcon style={{marginRight:"5px"}}/>Download</Button>
                        <Button color="primary" variant="contained" style={{textTransform:'capitalize',
                        backgroundColor:'#6C63FF',color:'white',marginLeft:'1em'}}><DeleteIcon/></Button>
                    </div>
                </div>                       
        </div>
    )
}

export default SavedVideo