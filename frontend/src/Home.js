import React from 'react'
import { Button,TextField } from '@material-ui/core';

function Home({logout}) {
    return (
            <div className="container">
                <form method="POST" action="http://127.0.0.1:5000/uploader" enctype="multipart/form-data">
                <input
                accept="audio/*"
                id="contained-button-file"
                type="file"
                name="file"
                style={{display:'none'}}
                />
                <label for="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                Upload
                </Button>
                <Button variant="contained" color="primary" component="span" onClick={logout}>
                Log out
                </Button>
                </label>
                <button type="submit">Submit</button>
                </form>
                <div className="videopreview">
                    Preview
                </div>
            </div>
    )
}

export default Home
