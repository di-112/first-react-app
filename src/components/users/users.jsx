import React from 'react'
import styles from './users.module.css' 


const defaultAvatar = 'https://img2.freepng.ru/20180325/pcw/kisspng-computer-icons-user-profile-avatar-avatar-5ab751f86d73d2.5490619515219635124483.jpg'

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
               {pages.map((page)=> <a 
                     className={page==props.currentPage?styles.activePage:''}
                     onClick={(e)=>props.changePage(page)}
                  >{page}</a>
                  )
               }
            </div>
            {props.users.map( (user)=> {
               return  (
               <div className= {styles.user}>
                  <div className={styles.logo}>
                     <img src={user.photos.small==null?defaultAvatar:user.photos.small} alt=""/>
                     <span>{user.name}</span>
                     <button  onClick={
                           user.followed?
                           ()=>props.unfollow(user.id):
                           ()=>{props.follow(user.id); props.addFriend({avatar: user.photos.small==null?defaultAvatar:user.photos.small, name: user.name, id: props.friends.length+1})}
                        } 
                     > {user.followed?'unfollow':'follow'}  </button>
                  </div>
                  <div className={styles.info}>
                     <div> status: <span>{user.status==null?defaultStatus:user.status}</span></div>
                     <div> id: <span>{user.id}</span></div>
                  </div>
               </div>
               )}
            )}
         </div>
      )
}


export default Users