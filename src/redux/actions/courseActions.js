import courseApi from '../../api/courseApi';
import * as types from './actionTypes';
export function createCourse(course){
  return {type : types.CREATE_COURSE,course}
}

function loadCourseSuccess(courses){
    return {type : types.LOAD_COURSES_SUCCESS , courses }
}

export function loadCourses(){
return function (dispatch){
    // calling api
    return courseApi.getAllCourses()
    .then((courses)=>dispatch(loadCourseSuccess(courses)))
    .catch(error=>{ throw error})
}

}