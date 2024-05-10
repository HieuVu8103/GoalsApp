import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalsInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible = {props.visible} animationType="slide">
            <View style={styles.inpuContainer}>
                <Image 
                style={styles.image} 
                source={require('../assets/goal.jpg')}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter some thing!"
                    onChangeText={goalsInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.Button}>
                        <Button title="Add goal" onPress={addGoalHandler} color='#b180f0'/>
                    </View>
                    <View style={styles.Button}>
                        <Button title="Cancel"  onPress={props.onCancel} color='#f32182'/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '120438',
        borderRadius: 6,
		width: '100%',
		marginRight: 8,
		padding: 16,
	},
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    inpuContainer: {
		flex: 1,
        padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
        backgroundColor: '#311b6b'
	},
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    Button: {
        width: 100,
        marginHorizontal: 8
    }
});