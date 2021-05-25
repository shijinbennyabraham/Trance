import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Marvel from './assets/Marvel.mp4'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import axios from 'axios'
import ProgressBar from './ProgressBar'



const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


export default function Videopreview({upfile, user, file}) {
  const [open, setOpen] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    console.log(user)
  }, [])
  useEffect(()=>{
    setProgress(0)
  },[upfile])

  const handleClickOpen = (e) => {

    const formData = new FormData();

    formData.append("file", file);
    formData.append("localId", user.localId)
    formData.append("idToken", user.idToken)
    
    axios({
      method: 'post',
      url: 'http://ec2-18-220-72-7.us-east-2.compute.amazonaws.com/uploader',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
    .then(response => console.log(response))
    .catch(errors => console.log(errors))

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

      <Button type="submit" variant="contained" color="primary" style={{marginLeft:'20px',backgroundColor:'#6C63FF',
          color:'white',textTransform:'capitalize'}} onClick={handleClickOpen}>
        <BlurOnIcon/> Visualize
      </Button>
      {/* </form> */}


      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth='sm' style={{backgroundColor:'#1C2135',color:'white'}}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{backgroundColor:'#1C2135',color:'white'}}>
          {upfile} - Visualization
        </DialogTitle>
        <DialogContent style={{backgroundColor:'#1C2135',color:'white'}}>
          {
            progress===100?
            <div>
            <video src={Marvel} controls autoPlay style={{width:'100%',height:'100%'}}/>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <a href={Marvel} download={`${upfile}-Visualization.mp4`}>
            <Button variant="contained" style={{backgroundColor:'#6C63FF',
            color:'white',marginTop:'20px',textTransform:'capitalize'}}><CloudDownloadIcon style={{marginRight:'5px'}}/>Download</Button></a>
            </div>
            </div>:
            <div>
              Visualizing...
              <ProgressBar progress={progress} setProgress={setProgress}/>
            </div>
            
          }
          
          
          
        </DialogContent>
        
      </Dialog>
    </div>
  );
}