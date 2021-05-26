import React, { useEffect,useState } from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import axios from 'axios'
import Loading from './Loading'




const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: 'white',
    backgroundColor:'red',
    padding:0
  },
});

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="9" style={{fontSize:'18px'}}>{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


export default function Videopreview({upfile, user, file}) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [loading,setLoading]=useState(true);
  const [uploadedvideo,setUploadedVideo]=useState("");
  const [exists,setExists]=useState(false);

  useEffect(() => {
    console.log(user)
  }, [])
  useEffect(()=>{
    setLoading(true)
    setExists(false)
  },[upfile])


  const handleClickOpen = (e) => {

    
    const formData = new FormData();

    formData.append("file", file);
    formData.append("localId", user?.localId)
    formData.append("idToken", user?.idToken)
    
    axios({
      method: 'post',
      url: 'http://ec2-18-117-66-244.us-east-2.compute.amazonaws.com/uploader',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
    .then(response => 
      {
        console.log(response)
        console.log(response.data.data.url)
        setUploadedVideo(response.data.data.url)
        setLoading(false)
      })
    .catch(errors => {
      console.log(errors)
    })
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

      {/* action="http://127.0.0.1:5000/uploader" */}
  return (
    <div>
      {/* <form noValidate autoComplete="off" method="POST"  encrypt="multipart/form-data">
      <input type="hidden" name="user" value={user} />
      <input type="file" style={{display:'none'}} name="file" value={file} /> */}
      <div>
      <Button type="submit" variant="contained" color="primary" style={{marginLeft:'20px',backgroundColor:'#6C63FF',
          color:'white',textTransform:'capitalize'}} onClick={handleClickOpen}>
        <BlurOnIcon/> Visualize
      </Button>
      {/* </form> */}
      </div>
      
      <Dialog overlayStyle={{backgroundColor: 'transparent'}} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth='sm' style={{backgroundColor:'#1C2135',color:'white'}}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{backgroundColor:'#1C2135',color:'white'}}>
          {upfile} - Visualization
        </DialogTitle>
        <DialogContent style={{backgroundColor:'#1C2135',color:'white'}}>
          
          {
            loading?
            <div>
              Creating visualization...
              <Loading/>
            </div>:
            <div>
            <video src={uploadedvideo} controls autoPlay style={{width:'100%',height:'100%'}}/>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <a href={uploadedvideo} download={`${upfile}-Visualization.mp4`} target="_blank">
            <Button variant="contained" style={{backgroundColor:'#6C63FF',
            color:'white',marginTop:'20px',textTransform:'capitalize'}}><CloudDownloadIcon style={{marginRight:'5px'}}/>Download</Button></a>
            </div>
            </div>
            
          }
        </DialogContent>
        
      </Dialog>
    </div>
  );
}