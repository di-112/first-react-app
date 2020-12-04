import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './users.module.css' 

const defaultAvatar = 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/788/896/datas/xlarge.png'

const defaultStatus = 'Not status...' 

const Users = (props) =>  {  

      let pages = []
      let k = 0
      for(let i=props.currentPage-4; i<= props.currentPage+4; i++){
         if(i>0)pages[k]=i;
         else pages[k]=i+9
         k++
      }
      pages.sort((a,b)=>a-b)

      return (
         <div className={styles.users}>
            <div className={styles.numberPage}>
               {pages.map((page)=> <a className={page===props.currentPage?styles.activePage:''}
                     onClick={(e)=>props.changePage(page)}
                  >{page}</a>
                  )}
            </div>
            {props.users.map( (user)=> {
               return  (
               <div className= {styles.user}>
                  <div className={styles.logo}>
                     <NavLink to={`profile/`+user.id}> <img src={user.photos.small==null?defaultAvatar:user.photos.small} alt=""/> </NavLink>
                     <span>{user.name}</span>
                     <button  disabled={props.arrFollowingProgress.some(id=>id===user.id)} onClick={
                           user.followed?
                           ()=> props.unfollow(user):
                           ()=>props.follow(user)
                        } 
                     > {user.followed?'unfollow':'follow'}  </button>
                  </div>
                  <div className={styles.info}>
                     <div> status: <span>{user.status?user.status:defaultStatus}</span></div>
                     <div> id: <span>{user.id}</span></div>
                  </div>
               </div>
               )}
            )}
         </div>
      )
}


export default Users