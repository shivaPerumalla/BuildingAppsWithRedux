import React from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';

const CourseList = ({courses})=>(
    <table className = "table">
        
            <thead>
                <tr>
                <th>
                    </th>
                    <th>
                        Title
                    </th>
                    <th>
                        Author
                    </th>
                    <th>
                        Category
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                  courses.map((course)=>{

                    return (
                    <tr key={course.id}> 
                    <td>
                        <a className = "btn btn-light" href ={ "https://www.pluralsight.com/courses/" + course.slug}>
                            Watch
                        </a>
                        </td>

                    <td >
                        <Link to = {"/course/"}>{course.title}</Link>
                  </td>
                  <td>{course.authorId}</td>
                  <td>{course.category}</td>
                  </tr>
                    )
                  })  
                }
            </tbody>
       
    </table>
);

CourseList.propTypes = {
    courses : PropTypes.array
}
export default CourseList;