import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Datac } from './ContextAPI'
import './Home.css';
import TopPosts from './TopPosts';

function Latest() {
  const blogdetails = useContext(Datac);
  const latdata = blogdetails.sort(function(a,b){
      return new Date(b.Date) - new Date(a.Date);
  })
  const [show,setShow] = useState(false)

 
  return (
    <div>
      <h2 className='toph1'>Latest Article</h2>
      <div className='mainnnnn'>
        <div>
          <hr></hr>
          <div className='latmain1'>
            <div >
              <img src={latdata[0].Image} width='280px' height='243px' className='latimage'/>
            </div>
            <div>
            <Link to = {`/Blog/${latdata[0].cat}/${latdata[0].id}`} state={`${latdata[0].id}`} className='linktt' ><p className='mainlatname'>{latdata[0].Name}</p></Link>
              <p className='mainlatsub'>{latdata[0].Des}</p>
              <p className='mainlatyear'>{latdata[0].cat} / {latdata[0].Date}</p>
            </div>
          </div>
          <hr></hr>
          <div>
            {
              latdata.slice(1,4).map((item) => (
                <div>
                <div className='latmain1'>
                  <div >
                    <img src={item.Image} width='280px' height='180px' className='latimage'/>
                  </div>
                  <div><Link to = {`/Blog/${item.cat}/${item.id}`} state={`${item.id}`} className='linktt'><p  className='mainlatname'>{item.Name}</p></Link>
                    <p className='mainlatsub'>{item.Des}</p>
                    <p className='mainlatyear'>{item.cat} / {item.Date}</p>
                  </div>
                </div>
                <hr></hr>
                </div>
                )
                )
            }

            {
              (show &&
              latdata.slice(4,6).map((item)=>(
                <div>
                <div className='latmain1'>
                  <div >
                    <img src={item.Image} width='280px' height='180px' className='latimage'/>
                  </div>
                  <div>
                  <Link to = {`/Blog/${item.cat}/${item.id}`} state={`${item.id}`} className='linktt' ><p className='mainlatname'>{item.Name}</p></Link>
                    <p className='mainlatsub'>{item.Des}</p>
                    <p className='mainlatyear'>{item.cat} / {item.Date}</p>
                  </div>
                </div>
                <hr></hr>
                </div>
              )))
            }
          </div>
          {(show?<button onClick={()=>setShow(false)}>Show Less</button>:<button onClick={()=>setShow(true)}>Show More</button>)}
          <div className='neydeiv'>
            <img src={latdata[0].Image} width = '850px' height='450px' className='newdivimg'/>
            <div className='neydeiv1'>
            <Link to = {`/Blog/${latdata[0].cat}/${latdata[0].id}`} state={`${latdata[0].id}`} className='linktt' ><p className='latdataname'>{latdata[0].Name}</p> <br></br></Link>
            <p className='latdatasub'>{latdata[0].cat} / {latdata[0].Date}</p>
            </div>
        </div>
        </div>
        <div className='latmain3'>
        
        <div className='latmain2'>
          <p>Advertisement</p>
        </div>
        <div>
          <TopPosts/>
        </div>
        </div>
      </div>
      </div>
  )
}

export default Latest