import { connect } from 'react-redux'
import {updateNewPostValueCreator, addPostCreator} from '../../../redux/reducers/profileReducer'
import MyPosts from './myPosts'

const mapStateToProps = (state) =>{
   return {
   arrPosts: state.profilesPage.arrPosts,
   newPostCurrentValue: state.profilesPage.newPostCurrentValue
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      addPost: () => dispatch(addPostCreator()),
      updateNewPostValue: (text) => dispatch(updateNewPostValueCreator(text))
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer