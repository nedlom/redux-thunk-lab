// write your CatList component here
import React, { Component } from 'react';

export default class CatList extends Component {


  render() {
    // console.log(this.props.catPics)
    const pics = this.props.catPics.map(pic => {
      return <img src={pic.url} alt= ""/>
    })

    console.log(pics)
    return (
      <div>
        {pics}
      </div>
    )
  }
}

// import React from 'react';

// class CatList extends React.Component {
//   listCats = () => {
//     return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
//   }

//   render() {
//     return (
//       <div>
//         {this.listCats()}
//       </div>
//     )
//   }
// }

// export default CatList;