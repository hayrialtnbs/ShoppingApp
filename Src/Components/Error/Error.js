import React from "react";
import LottieView from 'lottie-react-native';

function Error() {
    return <LottieView loop={false} source={require('../../Assets/error.json')} autoPlay

        style={{ backgroundColor: 'white' }}
    />;
}

export default Error;