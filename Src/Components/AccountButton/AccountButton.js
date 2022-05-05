import React, { Component } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { AccountButtonStyles } from './AccountButton.style';

const AccountButton = ({ text, onPress, style = AccountButtonStyles, loading }) => {
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



export default AccountButton;
