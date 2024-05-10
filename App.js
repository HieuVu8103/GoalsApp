import { useState } from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	Button,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/goalInput';

export default function App() {
	const [modalIsVisible, setIsvisibleModal] = useState(false);
	const [courseGoals, setCourseGoals] = useState([]);

	function startAddgoalHandler() {
		setIsvisibleModal(true);
	}

	function endAddGoalHandler() {
		setIsvisibleModal(false);
	}

	function addGoalHandler(enteredGoalText) {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{
				text: enteredGoalText,
				id: Math.random().toString(),
			},
		]);
		endAddGoalHandler();
	}

	function deleteGoalHandler(id) {
		setCourseGoals(currentCourseGoals => {
			return currentCourseGoals.filter((goal) => goal.id !== id);
		});
	}

	return (
		<>
			<StatusBar style='light'/>
			<View style={styles.appContainer}>
				<Button title='Add new goal' color="#a065ec" onPress={startAddgoalHandler}  />
				<GoalInput 
					visible={modalIsVisible} 
					onAddGoal={addGoalHandler} 
					onCancel={endAddGoalHandler}
				/>
				<View style={styles.goalContainer}>
					<FlatList
						data={courseGoals}
						renderItem={(itemData) => {
							return (
							<GoalItem 
								id = {itemData.item.id}
								text = {itemData.item.text} 
								onDeleteItem={deleteGoalHandler}
							/>);
						}}
					/>
				</View>
			</View>
		</>			
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
		backgroundColor:'#1e085a'
	},
	goalContainer: {
		flex: 5,
	},
});
