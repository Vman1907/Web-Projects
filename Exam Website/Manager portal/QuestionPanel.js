import React, { useEffect, useState } from 'react'
import "./Question.css"
import $ from "jquery"

export default function Question(){

    const [data, setData] = useState({
        section: "Science & Mathematics",
        type: "Text",
        options: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        answer: "a"
    })

    const changeHandler = (e)=>{
        // console.log(e.target.value);
        setData(prev=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
        
    }

    
    const optionsChangeHandler = (e)=>{
        const options = data.options
        options[e.target.name]=e.target.value
        setData(prev=>{
            return {
                ...prev,
                options:options
            }
        })
    } 
    
    useEffect(()=>{
        if(data.type === "Image" || data.type === "Paragraph with Image"){
            $("span#file_input").removeClass("hidden")
        }else{
            $("span#file_input").addClass("hidden")
        }
        
    })

    return(
        <div className="question">
            <span>Question Panel</span>
            <form>
            <div className="row selector justify-content-center">
               <div className="col-5">
                   <span>Section</span>
                   <select name="section" value={data.section} onChange={changeHandler}>
                       <option>Science & Mathematics</option>
                       <option>English</option>
                       <option>General Knowledge</option>
                       <option>Technical Reasoning</option>
                       <option>Coding and Aptitude</option>
                   </select>
               </div> 
               <div className="col-5">
                   <span>Type</span>
                   <select name="type" value={data.type} onChange={changeHandler}>
                       <option>Text</option>
                       <option>Image</option>
                       <option>Paragraph</option>
                       <option>Paragraph with Image</option>
                   </select>
               </div>
            </div>
            <div className="row q_selector justify-content-center">
                <div className="col-10">
                    <span>Question</span>
                    <textarea  rows="6" cols="93"/>
                </div>
            </div>
            <div className="row options_selector justify-content-center">
                <div className="col-5">
                    <span>Options</span>
                    <span className="options"><span>A</span>
                    <input name="a" value={data.options.a} onChange={optionsChangeHandler} type="text"/>
                    </span>
                    <span className="options"><span>B</span>
                    <input name="b" value={data.options.b} onChange={optionsChangeHandler} type="text"/>
                    </span>
                    <span className="options"><span>C</span>
                    <input name="c" value={data.options.c} onChange={optionsChangeHandler} type="text"/>
                    </span>
                    <span className="options"><span>D</span>
                    <input name="d" value={data.options.d} onChange={optionsChangeHandler} type="text"/>
                    </span>
                </div>
                <div className="col-5 answer">
                    <span>Answer</span>
                    <select name="answer" value={data.answer} onChange={changeHandler}>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                        <option>d</option>
                    </select>
                    <span id="file_input" className="custom-file-input hidden">
                        <span>Upload Image</span>
                    <input type="file"/>
                    </span>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-2">

                <button>Save</button>
                </div>
            </div>
            </form>
        </div>
    )
}