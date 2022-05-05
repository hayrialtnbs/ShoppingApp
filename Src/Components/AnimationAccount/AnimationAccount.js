import React from "react";
import LottieView from 'lottie-react-native';

function AnimationAccount() {

    return (

        <LottieView
            autoPlay={true}
            loop={false}
            source={require('../../Assets/account.json')}
            style={{ width: "70%" }}

        />
    )
}

export default AnimationAccount;
