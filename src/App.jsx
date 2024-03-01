import { useState,useEffect } from 'react';
import { Button,Col,Row } from 'react-bootstrap'
import axios from 'axios' 
import './App.css'

function App() {
  const[colorchange,setcolorchange] = useState(' rgb(41, 180, 80)') 
     const [data,setData]=useState([]) 
     const [randomId,setRandomId]=useState(Math.floor(Math.random() * (30 - 1 + 1)) + 1) 
     useEffect(()=>{ 
         axios.get("https://dummyjson.com/users").then((res)=>{ 
            setData(res.data.users) 
         }) 
     },[]) 

     const handleclick=()=>{ 
         const randomcolors ='#'+Math.random().toString(16).slice(2,8) 
         setcolorchange(randomcolors) 
     } 
 console.log('color',colorchange); 

   return ( 
     <div> 
  <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center  '> 
         <div  style={{width:'680px',height:'750', backgroundColor:colorchange}} className=' border rounded-3 shadow'> 
         <h1 style={{textAlign:'center',height:'60px',marginTop:'15px'}}>Random User On Refresh</h1>
         {data.filter((detail)=>detail.id==randomId).map(detail=>(<Row> 
         <Col  className='d-flex flex-column align-items-center justify-content-center mt-3'> 
             <img width={200} height={200} style={{borderRadius:'100px'}} className='border border-2 ' src={detail.image} alt="" /> 
             <p className='content' >{detail.lastName} <span>  <p style={{fontSize:'20px', marginLeft:'8px'}} >{detail.gender}</p> </span></p> 
             <div className='row'> 
                 <div className='col-6 text-center '> 
                         <p className='content '>Birth Date </p> 
                         <p  >{detail.birthDate}</p> 
                 </div> 
                 <div className='col-6 text-center mb-2'> 
                         <p className='content'>Age</p> 
                         <p>{detail.age}</p> 
                 </div> 
                 <div className='col-6 text-center mb-2'> 
                         <p  className='content me-4 '>Weight</p> 
                         <p>{detail.weight}</p> 
                 </div> 
                 <div className='col-6 text-center mb-2'> 
                         <p className='content'>Height</p> 
                         <p>{detail.height}</p> 
                 </div> 
             </div> 
            <div className='button mb-3' onClick={handleclick}> <Button onClick={()=>setRandomId(Math.floor(Math.random() * (30 - 1 + 1)) + 1)} variant="success">Refresh</Button></div> 
         </Col> 
         <Col className='d-flex flex-column '> 
             <div  > 
                 <p  className='content mt-4'>Home Address</p> 
                 <p>{detail.address.address}</p> 
             </div> 
             <div > 
                 <p className='content' >Mobile Phone </p> 
                 <p>{detail.phone}</p> 
             </div> 
             <div > 
                 <p className='content' >Company</p> 
                 <p>{detail.company.name}</p> 
             </div> 
             <div > 
                 <p className='content' >Job Title</p> 
                 <p>{detail.company.title}</p> 
             </div> 
             <div > 
                 <p className='content mt-1'>E-mail </p> 
                 <p>{detail.email}</p> 
             </div> 
         </Col> 
       </Row>))} 

         </div> 
      </div> 
     </div> 
   ) 
 } 

export default App