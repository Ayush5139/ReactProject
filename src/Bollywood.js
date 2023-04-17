import React, { useContext } from 'react'
import {Datac} from './ContextAPI'
import Nav from './Nav.js'
import TopPosts from './TopPosts'
import './Home.css'
import './Bollywood.css'
import { Link } from 'react-router-dom'


function Bollywood() {
 const readata = useContext(Datac)
 console.log(readata)
 const letid = readata.id
  return (
    <div>
      <Nav/>
      <div>
        <h1 className='toph1'>Bollywood</h1>
        <div className='bomain3'>
          <div>
            {
              readata.filter(item=>item.cat==="Bollywood").map((item,{letid})=>(
                <div className='bolmain1'>
                <div key={item.id} className= 'bolmain'>
                  <div>
                  <img src={item.Image} height='180px' width='310px' className='boimage' />
                  </div>
                  <div>
                  <Link to = {`/Blog/${item.cat}/${item.id}`} state={`${item.id}`}  className='linktt'><p className='boname'>{item.Name}</p></Link>
                  <p className='bodes'>{item.Des}</p>
                  <p className='boyear'>{item.cat}/{item.Date}</p>
                  </div>
                </div>
                <hr></hr>
                </div>
                
              ))
            }
          </div>
          <div>
            <TopPosts/>
            <div className='bolad'>
              Advertisement
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Bollywood