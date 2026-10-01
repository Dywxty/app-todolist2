function normalizeTaskText(text) {
	return text.trim().toLowerCase();
}

export function createTask(text) {
	const taskText = text.trim();
	if (!taskText) return null;

	return {
		id: Date.now().toString(),
		text: taskText,
		completed: false
	};
}

export function hasDuplicateTask(tasks, text) {
	const normalizedText = normalizeTaskText(text);
	return tasks.some(task => normalizeTaskText(task.text) === normalizedText);
}

export function toggleTaskCompletion(tasks, taskId) {
	return tasks.map(task =>
		task.id === taskId ? { ...task, completed: !task.completed } : task
	);
}

export function removeTask(tasks, taskId) {
	return tasks.filter(task => task.id !== taskId);
}

export function searchTasks(tasks, query) {
	const normalizedQuery = normalizeTaskText(query);
	return tasks.filter(task => normalizeTaskText(task.text).includes(normalizedQuery));
}
