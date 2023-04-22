import React,{useState} from "react";
import { ReactDOM } from "react";
export default function FavoriteColor(){
    const [color,setColor]=useState("red");
    var src;
    const img=(key)=>{
        switch (key) {
            case "blue":
                src='https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-anh-meo-cute-1.jpg'
                break;
        
            case "red":
               src='https://demoda.vn/wp-content/uploads/2022/02/anh-meo-cute-dang-yeu.jpeg'
                break;
            case "pink":
                 src='https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg'
                break;
            case "green":
                 src='https://static2.yan.vn/YanNews/202203/202203150551328043-4c92a17b-8427-421a-a237-7a396faf06cd.jpeg'
                break;
            }
            return src;
    }
    
    return(
        <>
        <h1>My favorite color is {color} !</h1>
        
        <button type='button' onClick={()=>{setColor("blue");img({color})}}>Blue</button>
        <button type='button' onClick={()=>{setColor("red");img({color})}}>Red</button>
        <button type='button' onClick={()=>{setColor("pink");img({color})}}>Pink</button>
        <button type='button' onClick={()=>{setColor("green");;img({color})}}>Green</button>
        <br>
        </br>
        <img src={img(color)} width={100}></img>
        
        </>
    )
}