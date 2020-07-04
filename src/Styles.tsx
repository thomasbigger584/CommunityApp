import * as React from 'react';

export const Colors = {
    colorPrimaryLight: '#4ebfef',
    colorPrimary: '#1baae4',
    colorPrimaryDark: '#1a2866',
    colorAccent: '#1a2866',
    colorOverlay: '#660000',
    colorBackgroundGrey: '#efefef',
    colorContent: '#444444',
    colorSubtitleGrey: '#7f8592',
    colorWhite: '#ffffff'
};

export const toolbarHeaderStyle = {
    headerStyle: {
        backgroundColor: Colors.colorPrimary,
    },
    headerTintColor: Colors.colorWhite,
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}

export const headerBackButtonOnly = {
    title: '',
    headerBackTitleVisible: false,
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        backgroundColor: Colors.colorPrimary
    }
};

