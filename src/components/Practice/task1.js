import QrCode from "../../images/qr-code.webp"

function Head(){
    return (<div >
        <div className="color" style={{display:"flex" ,justifyContent:"space-between",alignItems:"center",width:"100%"}}>
            <div style={{width:"33%",color:"white",padding:"20px"}}>
                <p>Our mission is to provide complete convenience to all estate dealers through a safe, fast and reliable service that you can access anywhere, anytime,  </p>
            </div>
            <div style={{width:"33%",color:"white",textAlign:"center"}}>
            <h1 class="wer" > About Us</h1>
            </div >
            <div style={{width:"33%",color:"white",display:"flex",justifyContent:"center"}}><img src={QrCode} style={{width:"200px",}}/></div>
        </div>
    </div>);

 
    
}
function Center(props){
    return (
        <div className="cards">
            <h2>{props?.title} </h2>
            <p>{props?.pra}</p>
  </div>
    )
  }  
export {Center};
export default Head 

