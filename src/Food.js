import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Datac } from './ContextAPI'
import Nav from './Nav'
import TopPosts from './TopPosts'

function Food() {
  const readata = useContext(Datac)
  console.log(readata)
  return (
    <div>
      <Nav/>
      <div>
      <h1 className='toph1'>Food</h1>
        <div className='bomain3'>
          <div>
            {
              readata.filter(item=>item.cat==="Food").map((item)=>(
                <div className='bolmain1'>
                <div key={item.id} className= 'bolmain'>
                  <div>
                  <img src={item.Image} height='180px' width='310px' className='boimage' />
                  </div>
                  <div>
                  <Link to = {`/Blog/${item.cat}/${item.id}`} state={`${item.id}`} className='linktt' ><p className='boname'>{item.Name}</p></Link>
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
      Food</div>
  )
}

export default Food