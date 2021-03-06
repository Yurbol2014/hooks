import React,{useState, useEffect} from "react";
import ReactDOM from 'react-dom/client';

const App = () => {
   
   const [value, setValue]= useState(0);
   const [visible, setVisible] = useState(true);

   if (visible){
      return (
         <div>
            <button
               onClick={()=> setValue((v)=> v+1)}>
            +</button>
            <button
               onClick={()=> setVisible(false)}>hide
            </button>
            {/*<HookCounter value={value}/>*/}
            
         <Notification />
         </div>
      )
   } else {
      return <button
         onClick = {()=> setVisible(true)}>show
      </button>
   }


};

//const HookCounter = ({value}) => {
//useEffect(()=> {console.log('mount');
//return ()=> console.log('unmount')}, []); //аналог componentDidMount вместе c UnMount
//useEffect(()=> console.log('update'));  //аналог componentDidUpdate
////useEffect(()=>()=> console.log('unmount'), []);//аналог componentUnMount
//return <p>{value}</p>
//}


//const Notification = () => {
//   const [hay, setHay] = useState(true);
//   useEffect(()=>{
//     const timeout = setTimeout(()=> setHay(false), 2500);
//     return () => clearTimeout(timeout);// устранение утечки памяти
//   },[])
//   return (<div>{hay && <p>Hello</p>}</div>)
//}


//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

