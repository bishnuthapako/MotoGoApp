import React, { Component } from 'react';

class PostShowPage extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmitClick(){
        this.props.handleSubmit()
        debugger
        this.history.push('/dashboard')
    }
    render() {
        return (
            <div>
                <img className="postShowImg" src="https://thumpertalk.com/applications/core/interface/imageproxy/imageproxy.php?img=http://www.zeta-racing.com/bikes/images/drz/pz04.jpg&key=c5a35e44fa9087e1d4b2c043c44ad31aebacf93a990c19b99211306a8adb18c3" alt="Avatar" />
                <div className="bikeShowDesc" style={{
                        fontSize: '12px',
                    }}>
                    <h1 style={{
                        textDecoration: "underline"
                    }}><b>{this.props.year} {this.props.make} {this.props.model}</b></h1>
                    <br/>
                    <br/>
                    <p style={{
                        fontSize: '25px'
                    }}>
                        {this.props.description}
                </p>
                </div>
                <h1 id="price">${this.props.price}/day</h1>

                <button onClick={this.props.handleSubmit}>Confirm</button>
                <button onClick={this.props.toggleBikeShow}>Go Back</button>
            </div>
        )
    }
}
export default PostShowPage;
