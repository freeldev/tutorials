import React, { Component } from 'react';

export function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The Water would not boil</p>
}