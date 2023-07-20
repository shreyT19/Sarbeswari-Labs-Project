import { useEffect, useState } from "react";
import "./VisitorNumbers.scss";



const VisitorNumber: React.FC = () => {

    

  return (
    <div className="visitor__section">
      <ReusableComponent limit={50} Character="K" About="Happy Customers" />
      <ReusableComponent limit={150} Character="K" About="Monthly Visitors" />
      <ReusableComponent limit={300} Character="+" About="Top Partners" />
      {/* <ReusableComponent limit={15} About="Countries Worldwide" /> */}
    </div>
  );
};

export default VisitorNumber;

interface Props {
  limit: number;
  Character?: string;
    About?: string;
}

export const ReusableComponent: React.FC<Props> = ({ limit, Character,About }) => {
    let interval: any;
    const [count,setCounter] = useState<number>(0);
   
    useEffect(()=>{
        const handleScreenLoad = ()=>{
            setCounter(prevNumber=>prevNumber+1);
        }
        
        if(limit===50){
            interval = setInterval(()=>{
                if(count<limit){
                    handleScreenLoad();
                }else{
                    clearInterval(interval);
                }
            },10);
        }
        if(limit===150){
            interval = setInterval(()=>{
                if(count<limit){
                    handleScreenLoad();
                }else{
                    clearInterval(interval);
                }
            },4);
        }

        if(limit===300){
            interval = setInterval(()=>{
                if(count<limit){
                    handleScreenLoad();
                }else{
                    clearInterval(interval);
                }
            },2.5);
        }
        

        return ()=>{
            clearInterval(interval);
        }
    },[count])
    

  return (
    <div className="one">
      <div>
        <span>{count}</span>
        <span>{Character}</span>
      </div>
      <p>{About}</p>
    </div>
  );
};
