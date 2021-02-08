import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text, ScrollView} from 'react-native';

// TodoInsert page
import TodoInsert from './components/TodoInsert';
// TodoList page
import TodoList from './components/TodoList';


// 1. npm i & npm i react-native-vector-icons
// 2. [react-native] 오류 : Unable to load script. Make sure youre dither running a Metro server...
//    - 1. [패키지명]/android/app/src/main/assets 폴더가 있는지 확인하고 없으면 생성
//    - 2. [패키지명]/android 폴더에서 ./gradlew clean 실행(터미널에서 실행)
//    - 3. [패키지명] 폴더에서 아래 명령어 실행
//    -> react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
//    - 4. react-native run-android & npm run android
// 3. 주제 : 할일 목록 등록 체크 삭제 기능 
// 4. 작성일 : 2021.02.08
// 5. 참고 사이트 https://jeffgukang.github.io/react-native-tutorial/docs/basic-tutorial/basic-features(todolist)/13-complete-items/complete-items-kr.html 
//               &  https://velog.io/@zopall0000/React-Native-Tutorial-To-do-list-13

const App = () => {
  // todos : {id : Number, textValue:staing , checked : boolean}
  const [todos, setTodos] = useState([]);

  // 추가 기능
  const addTodo = text => {
    setTodos([
      ...todos,
      {id : Math.random().toString(), textValue : text, checked : false},
    ]);
  };
  // 삭제 기능
  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  // 체크 기능 
  const onToggle = id => e => {
    setTodos(
      todos.map(todo => todo.id === id ? {...todo, checked : ! todo.checked} : todo,),
    );
  }

  // 체크 기능
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Todolist</Text>
      <View style={styles.card}>
        {/* <TodoInsert /> */}
        <TodoInsert onAddTodo={addTodo} /> 
        {/* <TodoList /> */}
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});

export default App;