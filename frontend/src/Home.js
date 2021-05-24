import React,{useEffect, useState} from 'react'
import bg1 from './assets/bg1.svg'
import bg2 from './assets/bg2.svg'
import {Button} from '@material-ui/core'
import VideoPreview from './Videopreview'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {db} from './firebase_config'
import SavedVideo from './SavedVideo'


function Home({logout,user}) {

    const [upfile,setUpfile]=useState('Upload music to see something cool');
    const [uploaded,setUploaded]=useState(false)
    const [song,setSong]=useState(null)
    const [file, setFile] = useState(null)
    const [modalOpen,setModalOpen]=useState(false);
    const [videoFiles, setVideoFiles]=useState([])

    const[items,setItems]=useState(
        [
            {
                id:1,
                name:"Rasputin"
            },
            {
                id:2,
                name:"Big bang"
            },
            {
                id:3,
                name:"Inspection"
            }
    ]
    )

    useEffect(() => {
        
        var itemsRef=db.ref('users/'+user?.localId)
        console.log(user)
        console.log('users/'+user?.localId)
        
        itemsRef.on('value',(snapshot)=>{
          var items=snapshot.val()
          var videos=[]
          for(var item in items){
            videos.push(
              {
                  id: item,
                  url:items[item].url,
                  filename:items[item].filename
              }
            )
          }
    
          setVideoFiles(videos)
        })

    }, [])

    const fileUpload = (e)=>{
        const song=e.target.files[0]
        setFile(song)
        if(song){
            setUpfile(e.target.files[0].name)
            setUploaded(true)
            const reader=new FileReader();
            reader.onload = ()=>{
            setSong(reader.result);
            }
            reader.readAsDataURL(song)
        }
        else{
            setUploaded(false)
            setUpfile('Upload music to see something cool')
        }
        
    }
    console.log(videoFiles);
   
    
    return (
            <div style={{position:'relative',minHeight:'85vh',overflow:'hidden',zIndex:2}}>
                <img src={bg1} alt="" style={{position:'absolute',right:'2%',bottom:'40%',zIndex:-1}}/>
                <img src={bg2} alt="" style={{position:'absolute',left:'-12%',bottom:'-20%',zIndex:-1}}/>
            <div className="home-main"> 
                <h3 className="welcome">Welcome {user?.email}</h3>
                <div style={{margin:'0 auto 0 auto',width:'95%'}}>
                    <h4 style={{marginTop:'3em',marginBottom:'1em'}}>Add file</h4>
                    <div className="upload-div">
                        <p>{upfile}</p>
                        {uploaded?<audio id="uploaded-audio" src={song} controls/>:""}
                        <div style={{display:'flex',transition:'0.2s ease'}}>
                            <div>
                                <input
                                accept="audio/*"
                                id="contained-button-file"
                                style={{display:'none'}}
                                type="file"
                                onChange={fileUpload}/>
                                <label htmlFor="contained-button-file">
                                    <Button variant="contained" component="span" variant="primary" style={{
                                    backgroundColor:'#6C63FF',
                                    color:'white',textTransform:'capitalize'
                                    }}><CloudUploadIcon style={{marginRight:'5px'}}/>Upload</Button>
                                </label>
                            </div>
                            <div>
                                {
                                uploaded?<VideoPreview upfile={upfile} file={file} user={user}/>:""}
                                {/*<Button variant="contained" component="span" style={{
                                backgroundColor:'#6C63FF',
                                color:'white',marginLeft:'20px'
                                }} onClick={()=>setModalOpen(true)}>Visualize</Button>:"" */}   
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div style={{margin:'0 auto 0 auto',width:'95%'}}>
                    <h4 style={{marginTop:'2em',marginBottom:'1em'}}>Saved videos</h4>
                    {items.length===0?
                    <div className="upload-div" style={{minHeight:'20vh'}}>
                    <p style={{margin:'auto'}}>No saved videos yet</p>
                    </div>:  
                    <div>
                        {items.map(item=>{
                            return(
                                <SavedVideo key={item.id} item={item} items={items} setItems={setItems}></SavedVideo>
                            )
                        })}
                    </div>
                    }
                      
                </div>
               
            </div>
            </div>
           
    )
}

export default Home
