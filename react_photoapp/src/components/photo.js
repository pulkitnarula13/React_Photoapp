import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Photo extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            likeCount: 0
        };
    }

    // handleLikeClick = () => {
    //     this.setState({
    //     likeCount: this.state.likeCount + 1
    //     });
    // }

//     render() {
//         return (
//         <div>
//             <img src={this.props.src} alt={this.props.alt} />
//             <div>
//             <button onClick={this.handleLikeClick}>
//                 <i className="fa fa-heart"></i>
//             </button>
//             {this.state.likeCount} likes
//             </div>
//         </div>
//         );
//     }
// }

render() {
    return (
        <div>
            <img src={this.props.src} alt={this.props.alt} />
            {/* <img src="https://www.seekpng.com/png/full/196-1965201_facebook-heart-icon-download-youtube-logo-circle-png.png" alt="Like" /> */}
            <i className="fa fa-heart"></i>

        </div>
        );
    }
}

export default Photo;