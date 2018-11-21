// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { getPosts } from "../Actions/Actions";
// import PropTypes from "prop-types";

// // import { NavLink } from '../../node_modules/reactstrap';

// class PostsList extends Component {
//   constructor(props) {
//     super(props);
//     state = {
//       posts: this.props.posts
//     };
//   }

//   componentDidMount() {
//     this.props.getPosts();
//   }

//   //   handleDisplay = e => {
//   //     this.props.history.push(`/students/${e.target.id}`);
//   //   };
//   render() {
//     console.log(this.state);

//     return (
//       <div>
//         <div className="post">
//           {/* {this.props.student.students.map((student) => 
//                 <div  className='img_wrap' key={Math.random()} id= {student._id} onClick = {this.handleDisplay}>
//                     <img id= {student._id} className='student-image' src ={student.src}/>
//                     <div className='img__description'>
//                         <p className='text' id= {student._id}>{student.firstName}</p>
//                     </div>
//                 </div>
//                 )} */}
//         </div>
//       </div>
//     );
//   }
// }
// PostsList.propTypes = {
//   getPosts: PropTypes.func.isRequired
//   // student: PropTypes.object.isRequired
// };

// export default connect(
//   null,
//   { getPosts }
// )(PostsList);
