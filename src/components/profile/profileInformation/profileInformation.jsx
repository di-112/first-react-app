import React from 'react'
import styles from './profileInformation.module.css'

const defaulPhoto = 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/788/896/datas/xlarge.png'
const defaultStatus = 'Not status...' 


const ContactInfo = (props)=> {
  return <span>{`${props.socialNet}:`} {
    props.allContacts?
      props.allContacts[props.socialNet]?  
        <a href={props.allContacts[props.socialNet]}>{props.allContacts[props.socialNet]}</a> 
        :`not ${props.socialNet}`
      :`not ${props.socialNet}`}
  </span>
  }


class ProfileStatus extends React.Component{
  
  state = {
    editMode: false,
    status: this.props.profileInformation.status
  }

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  componentDidUpdate = (prevProps, prevUpdate) =>{
    if(prevProps.profileInformation.status!=this.props.profileInformation.status)this.setState({
      status: this.props.profileInformation.status
    })
  }
    
  onChange=(e)=>{
    this.setState({
      status: e.currentTarget.value
    })
  }

  render(){
    return (
      <div className={styles.ptofile__status}>
      {this.state.editMode?
        <div className={styles.profile__updateStatus}>
         <input autoFocus 
         onChange={this.onChange} value={this.state.status} placeholder={this.state.status}></input>
         <button onClick={()=>{this.toggleEditMode(); this.props.updateStatus(this.state.status)}}>Update</button>
         <button onClick={this.toggleEditMode}>Cancel</button>
        </div>:
        <span onDoubleClick={this.toggleEditMode} className={styles.profile__status}>Status: {this.props.profileInformation.status
        ?this.props.profileInformation.status:defaultStatus}</span>}
      </div>
    )
  }
}


class ProfileInformation extends React.Component { 

  render()  {
    return (
    <div className={styles.profile__me}>
      <div className={styles.profile__logo}>
               <img src={this.props.profileInformation.photos.large?this.props.profileInformation.photos.large:defaulPhoto} alt=""/>
               <ProfileStatus {...this.props}/>
      </div>
      <div className={styles.profile__info}>
            <span className={styles.profile__title}>User's information:</span>
            <span>Name: {this.props.profileInformation.fullName}</span>
            <span>Do you find work?: {this.props.profileInformation.lookingForAJob?'yes':'no'}</span>
            <span>id: {this.props.profileInformation.userId}</span>
            <div className={styles.contacts}>
                <span className={styles.contacts__title}>Contacts:</span>
                <ContactInfo allContacts={this.props.profileInformation.contacts} socialNet='vk'/>
                <ContactInfo allContacts={this.props.profileInformation.contacts} socialNet='gihub'/>
                <ContactInfo allContacts={this.props.profileInformation.contacts} socialNet='instagram'/>
            </div>
      </div>
   </div>
    )
  }
}

export default ProfileInformation