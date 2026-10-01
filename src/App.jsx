import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import { CevicheOne_400Regular } from '@expo-google-fonts/ceviche-one';
import { styles } from './style';
import { loadTasks, saveTasks } from './storage';
import {
  createTask,
  hasDuplicateTask,
  removeTask,
  searchTasks,
  toggleTaskCompletion
} from './task';

export default function App() {
  const [fontsLoaded] = useFonts({ CevicheOne_400Regular });
  const [tasks, setTasks] = useState([]);
  const [tasksLoaded, setTasksLoaded] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [duplicateTask, setDuplicateTask] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function restoreTasks() {
      try {
        const savedTasks = await loadTasks();
        if (isActive) setTasks(savedTasks);
      } catch (error) {
        console.error('Não foi possível carregar as tarefas salvas.', error);
      } finally {
        if (isActive) setTasksLoaded(true);
      }
    }

    restoreTasks();
    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    if (!tasksLoaded) return;

    saveTasks(tasks).catch(error => {
      console.error('Não foi possível salvar as tarefas.', error);
    });
  }, [tasks, tasksLoaded]);

  if (!fontsLoaded || !tasksLoaded) return null;

  function addTask() {
    const task = createTask(newTask);
    if (!task) return;

    if (hasDuplicateTask(tasks, task.text)) {
      setDuplicateTask(true);
      return;
    }

    setTasks(currentTasks => [...currentTasks, task]);
    setNewTask('');
    setDuplicateTask(false);
  }

  function toggleTask(taskId) {
    setTasks(currentTasks => toggleTaskCompletion(currentTasks, taskId));
  }

  function deleteTask(taskId) {
    setTasks(currentTasks => removeTask(currentTasks, taskId));
  }

  function clearTasks() {
    setTasks([]);
    setNewTask('');
    setSearchQuery('');
    setDuplicateTask(false);
  }

  const filteredTasks = searchTasks(tasks, searchQuery);
  const hasSearchQuery = searchQuery.trim().length > 0;
  const completedCount = tasks.filter(task => task.completed).length;
  const completionSummary = `${completedCount} sur ${tasks.length} terminée${tasks.length === 1 ? '' : 's'}`;

  return (
    <View style={styles.container}>
      <View style={styles.panelStack}>
        <View style={[styles.tab, styles.tabBack]} />
        <View style={[styles.tab, styles.tabMiddle]} />
        <View style={[styles.tab, styles.tabFront]} />

        <View style={styles.panel}>
          <View style={styles.starDecorations} pointerEvents="none" accessible={false}>
            <Text style={[styles.decorativeStar, styles.starTopLarge]}>✦</Text>
            <Text style={[styles.decorativeStar, styles.starTopSmall]}>✧</Text>
            <Text style={[styles.decorativeStar, styles.starTopTiny]}>★</Text>
            <Text style={[styles.decorativeStar, styles.starBottomLarge]}>✦</Text>
            <Text style={[styles.decorativeStar, styles.starBottomSmall]}>★</Text>
            <Text style={[styles.decorativeStar, styles.starBottomTiny]}>✧</Text>
          </View>
          <Text style={styles.title}>.;'To do List';.</Text>
          <Text style={styles.subtitle}>.- Gérez vos tâches efficacement -.</Text>

          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={newTask}
              onChangeText={text => {
                setNewTask(text);
                setDuplicateTask(false);
              }}
              onSubmitEditing={addTask}
              returnKeyType="done"
              placeholder="Ajouter une tâche"
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={addTask}
              accessibilityRole="button"
              accessibilityLabel="Adicionar uma tarefa"
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          {duplicateTask && (
            <Text style={styles.duplicateMessage}>
              Cette tâche a déjà été ajoutée.
            </Text>
          )}

          <View style={styles.searchRow}>
            <TextInput
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Rechercher une tâche..."
              accessibilityLabel="Rechercher des tâches"
              returnKeyType="search"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity
                style={styles.searchClearButton}
                onPress={() => setSearchQuery('')}
                accessibilityRole="button"
                accessibilityLabel="Effacer la recherche"
              >
                <Text style={styles.remove}>×</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.listActions}>
            <Text style={styles.completionSummary} accessibilityLiveRegion="polite">
              {completionSummary}
            </Text>
            <TouchableOpacity
              style={[styles.clearButton, tasks.length === 0 && styles.clearButtonDisabled]}
              onPress={clearTasks}
              disabled={tasks.length === 0}
              accessibilityRole="button"
              accessibilityLabel="Tout effacer"
            >
              <Text style={[styles.clearButtonText, tasks.length === 0 && styles.clearButtonTextDisabled]}>
                Tout effacer
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={filteredTasks}
            keyExtractor={task => task.id}
            ListEmptyComponent={
              hasSearchQuery && tasks.length > 0
                ? <Text style={styles.emptySearch}>Nenhuma tarefa encontrada.</Text>
                : null
            }
            renderItem={({ item: task }) => (
              <View style={styles.taskItem}>
                <TouchableOpacity
                  style={[styles.checkbox, task.completed && styles.checkboxDone]}
                  onPress={() => toggleTask(task.id)}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: task.completed }}
                  accessibilityLabel={`${task.completed ? 'Reabrir' : 'Concluir'} tarefa: ${task.text}`}
                >
                  <Text style={[styles.checkmark, task.completed && styles.checkmarkDone]}>
                    {task.completed ? '✓' : ''}
                  </Text>
                </TouchableOpacity>
                <Text style={[styles.taskText, task.completed && styles.taskTextDone]}>
                  {task.text}
                </Text>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => deleteTask(task.id)}
                  accessibilityRole="button"
                  accessibilityLabel={`Excluir tarefa: ${task.text}`}
                >
                  <Text style={styles.remove}>×</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
