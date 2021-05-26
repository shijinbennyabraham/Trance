import React from 'react'
import {Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import useDownloader from 'react-use-downloader';
import {db,storage} from './firebase_config'

function SavedVideo({item,videoFiles,setVideoFiles,user}) {

    const deleteVideo=()=>{
        setVideoFiles(videoFiles.filter((el)=>
            el.id!==item.id
        ))
        db.ref('users/'+user.localId+'/'+item.id).remove()
        var storageRef = storage.ref();
      
        var desertRef = storageRef.child('videos/'+user.localId+'/'+item.filename);

    
        desertRef.delete().then(() => {
            console.log("deleted")
        }).catch((error) => {
            console.log(error)
        });   
    }
    

    return (

        <div className="upload-div">
                <p>{item.filename}</p>
                <div className="saved-buttons" style={{display:'flex',transition:'0.2s ease'}}>
                    <div>
                        <a href={item.url} download={item.filename} target="_blank">
                        <Button color="primary" variant="contained" style={{textTransform:'capitalize',
                        backgroundColor:'#6C63FF',color:'white'}}><CloudDownloadIcon style={{marginRight:"5px"}}/>Download</Button></a>
                        <Button color="primary" variant="contained" style={{textTransform:'capitalize',
                        backgroundColor:'#6C63FF',color:'white',marginLeft:'1em'}} onClick={deleteVideo}><DeleteIcon/></Button>
                    </div>
                </div>                       
        </div>
    )
}

export default SavedVideo