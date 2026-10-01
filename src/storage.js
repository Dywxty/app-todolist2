import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_STORAGE_KEY = '@app-todolist/tasks';

export async function loadTasks() {
	const storedTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
	if (!storedTasks) return [];

	const tasks = JSON.parse(storedTasks);
	return Array.isArray(tasks) ? tasks : [];
}

export async function saveTasks(tasks) {
	await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
}
