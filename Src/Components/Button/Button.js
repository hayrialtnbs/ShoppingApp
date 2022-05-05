import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { buttonStyles } from "./Button.style"
const Button = ({ text, onPress, style = buttonStyles, loading }) => {
    return (
        <TouchableOpacity style={style.container} onPress={onPress} disabled={loading}>
            {loading ? (
                <ActivityIndicator color="white" />
            ) : (
                <Text style={style.title}>{text}</Text>
            )}

        </TouchableOpacity>
    );
};

export default Button;
