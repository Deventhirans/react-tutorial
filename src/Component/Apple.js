import React from 'react';


class Apple extends React.Component{
    render() {
        const {AppleInfo} = this.props;
        const {type,color} = AppleInfo;
        return(
            <h2>I am {color} {type} apple</h2>
        )
    }
}
export default Apple;