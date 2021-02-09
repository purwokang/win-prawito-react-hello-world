import React, { Component, Fragment } from 'react'
// import { connect } from 'react-redux';
import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp';
// import { RootContext } from '../../Home/Home';

class YouTubeCompPage extends Component {
  render() {
    return (
      <Fragment>
        <p>YouTube Component</p>
        <hr />
        <YouTubeComp
          time='7.12'
          title='Tutorial React JS - Bagian 1'
          desc='2x ditonton. 2 hari yang lalu.' />
        <YouTubeComp
          time='8.02'
          title='Tutorial React JS - Bagian 2'
          desc='200x ditonton. 10 hari yang lalu.' />
        <YouTubeComp
          time='5.04'
          title='Tutorial React JS - Bagian 3'
          desc='250x ditonton. 20 hari yang lalu.' />
        <YouTubeComp
          time='4.12'
          title='Tutorial React JS - Bagian 4'
          desc='230x ditonton. 100 hari yang lalu.' />
        <YouTubeComp />
        <hr />
        {/* <p>Total Order: {value.state.totalOrder}</p> */}
      </Fragment>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     order: state.totalOrder
//   }
// }

// export default connect(mapStateToProps)(YouTubeCompPage);
export default YouTubeCompPage;