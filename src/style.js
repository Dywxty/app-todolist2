import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 18,
        backgroundColor: '#555'
    },
    panelStack:{
        flex: 1,
        position: 'relative'
    },
    tab:{
        position: 'absolute',
        top: 0,
        width: 82,
        height: 34,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    tabBack:{
        left: 18,
        backgroundColor: '#888'
    },
    tabMiddle:{
        left: 108,
        backgroundColor: '#a0a0a0'
    },
    tabFront:{
        left: 198,
        backgroundColor: '#b8b8b8'
    },
    panel:{
        flex: 1,
        marginTop: 16,
        padding: 20,
        backgroundColor: '#d4d4d4',
        borderRadius: 8,
        zIndex: 1
    },
    starDecorations:{
        ...StyleSheet.absoluteFillObject,
        zIndex: 2
    },
    decorativeStar:{
        position: 'absolute'
    },
    starTopLarge:{
        top: 4,
        right: 6,
        color: '#111',
        fontSize: 18
    },
    starTopSmall:{
        top: 22,
        right: 28,
        color: '#fff',
        fontSize: 13
    },
    starTopTiny:{
        top: 30,
        right: 8,
        color: '#111',
        fontSize: 9
    },
    starBottomLarge:{
        bottom: 5,
        left: 6,
        color: '#fff',
        fontSize: 18
    },
    starBottomSmall:{
        bottom: 24,
        left: 27,
        color: '#111',
        fontSize: 13
    },
    starBottomTiny:{
        bottom: 31,
        left: 8,
        color: '#fff',
        fontSize: 9
    },
    title:{
        fontSize: 30,
        fontFamily: 'CevicheOne_400Regular',
        textAlign: 'center',
        marginTop: 40,
        color: '#333'
    },
    subtitle:{
        fontSize: 18,
        fontFamily: 'CevicheOne_400Regular',
        color: '#666',
        textAlign: 'center',
        marginBottom: 20
    },
    inputRow:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    input:{
        flex: 1,
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        fontSize: 20,
        fontFamily: 'CevicheOne_400Regular'
    },
    duplicateMessage:{
        color: '#680f0f',
        fontSize: 16,
        fontFamily: 'CevicheOne_400Regular',
        marginTop: -12,
        marginBottom: 12
    },
    searchRow:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#bebebe',
        borderRadius: 8,
        paddingLeft: 12,
        paddingRight: 4,
        marginBottom: 12,
        minHeight: 46
    },
    searchInput:{
        flex: 1,
        paddingVertical: 8,
        fontSize: 18,
        fontFamily: 'CevicheOne_400Regular'
    },
    searchClearButton:{
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptySearch:{
        color: '#666',
        fontSize: 18,
        fontFamily: 'CevicheOne_400Regular',
        textAlign: 'center',
        paddingVertical: 16
    },
    listActions:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    completionSummary:{
        color: '#555',
        fontSize: 16,
        fontFamily: 'CevicheOne_400Regular',
        flexShrink: 1
    },
    clearButton:{
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#680f0f',
        borderRadius: 4
    },
    clearButtonDisabled:{
        borderColor: '#999'
    },
    clearButtonText:{
        color: '#680f0f',
        fontSize: 16,
        fontFamily: 'CevicheOne_400Regular'
    },
    clearButtonTextDisabled:{
        color: '#999'
    },
    addButton:{
        backgroundColor: '#680f0f',
        width: 50,
        marginLeft: 10,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonText:{
        color: '#fff',
        fontFamily: 'CevicheOne_400Regular',
        fontSize: 24
    },
    taskItem:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        minHeight: 52
    },
    checkbox:{
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#430808bc',
        borderRadius: 6,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0
    },
    checkboxDone:{
        backgroundColor: '#680f0f',
        borderColor: '#680f0f'
    },
    checkmark:{
        color: '#430808bc',
        fontSize: 16,
        fontFamily: 'CevicheOne_400Regular'
    },
    checkmarkDone:{
        color: '#fff'
    },
    taskText:{
        fontSize: 20,
        fontFamily: 'CevicheOne_400Regular',
        flex: 1
    },
    taskTextDone:{
        textDecorationLine: 'line-through',
        color: '#999'
    },
    remove:{
        color: '#680f0f',
        fontSize: 28,
        fontFamily: 'CevicheOne_400Regular'
    },
    removeButton:{
        width: 42,
        height: 42,
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
    }
})