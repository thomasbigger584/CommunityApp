import React, {Component} from "react";
import {GestureResponderEvent, StyleSheet} from "react-native";
import Dialog, {DialogButton, DialogContent, DialogFooter} from 'react-native-popup-dialog';

export type DialogType = "info" | "warning" | "error" | "success"

interface AppDialogProps {
    dialogType: DialogType;
    visible: boolean;
    onOkPress: (event: GestureResponderEvent) => void;
    onCancelPress?: (event: GestureResponderEvent) => void;
}

export class AppDialog extends Component<AppDialogProps> {

    private getDialogButtons() {
        switch (this.props.dialogType) {
            case "error":
            case "info":
            case "success": {
                return this.getOkButton()
            }
            case "warning": {
                return (<>
                    {this.getOkButton()}
                    {this.getCancelButton()}
                </>);
            }
        }
    }

    private getOkButton() {
        return (
            <DialogButton
                text="OK"
                onPress={this.props.onOkPress}
            />);
    }

    private getCancelButton() {
        return (
            <DialogButton
                text="Cancel"
                onPress={this.props.onCancelPress}
            />);
    }

    render() {
        return (
            <Dialog
                visible={this.props.visible}
                footer={
                    <DialogFooter>
                        {this.getDialogButtons()}
                    </DialogFooter>
                }>
                <DialogContent>

                </DialogContent>
            </Dialog>
        );
    }
}

const styles = StyleSheet.create({});
