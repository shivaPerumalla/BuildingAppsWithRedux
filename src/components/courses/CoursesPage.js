import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import * as courseActions from '../../redux/actions/courseActions';
import CourseList from './CourseList';
class CoursesPage extends React.Component{
   componentDidMount(){
       this.props.actions();
   }
   
    render(){
    return (
       <React.Fragment>
            <h2>Courses</h2> 
            {
                this.props.courses && this.props.courses.length >0 ? (<CourseList courses = {this.props.courses}/>) : null
            }
            
        </React.Fragment>
    );    
    }
}

CoursesPage.propTypes = {
}
function mapStateToProps(state){
    return {
        courses : state.courses
    }
}

 function mapDispatchToProps(dispatch){
    return {
        actions : ()=>dispatch(courseActions.loadCourses())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
