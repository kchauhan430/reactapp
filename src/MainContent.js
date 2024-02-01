//var a = 20;
import big10 from './images/big-10.jpg';
function maincontent(){
    const herobg = {
        backgroundImage:`url(${big10})`,
        marginTop: "-90px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight:"660px",
    };
    return(
        <div className="main-content" >
            <div className='hero' style={herobg}>
                <h2 className='subtitle'> INDUSTRIAL. HOMES. ELECTRICAL.</h2>
                <h1 className='title'>The Builder</h1>
            </div>
            
        </div>
    );
   /* if(a == 20){
        return(
            <div className="main-content">
                <h1>Welcome to begginer ReactJS App</h1>
            </div>
        );
    }
    else{
        return(
            <h1>Welcome to advanced ReactJS App</h1>
        );
    }*/
}

export default maincontent;