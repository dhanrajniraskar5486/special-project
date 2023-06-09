import { useEffect } from "react";
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import './Editor.css'

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],               
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      
    [{ 'indent': '-1'}, { 'indent': '+1' }],          
    [{ 'direction': 'rtl' }],                         
    [{ 'size': ['small', false, 'large', 'huge'] }], 
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                        
  ];

const Editor=()=>{

    useEffect(()=>{
        const quillserver= new Quill('#editor', {
            theme: 'snow' ,  modules: {
                toolbar: toolbarOptions
              }
          });
    },[])

    return(
        <div>
       <div className='container' id="editor"></div>
        </div>
    )
}

export default Editor;