import {setState} from "expect/build/jestMatchersObject.js"
const ADD_TASK = 'ADD_TASK',
      ADD_TASK_TEXT = 'ADD_TASK_TEXT';


(function componentDIdMount() {
    let url = 'https://jsonplaceholder.typicode.com/todos?_limit=7'
    fetch(url).then(response => response.json())
        .then(response => store._state = response)
})();

let store = {
    _title: {
        text: '',
        editCheck: '1',
        checkId: '0'
    },
    _state: [
        // {
        //     id: 1,
        //     title: 'Вынести мусор.',
        //     completed: false
        // },
        // {
        //     id: 2,
        //     title: 'Убить соседей.',
        //     completed: true
        // }
    ], 
    dispatch(action) {
        if (action.type === ADD_TASK) {
            let newTask = {
                id: this._state.length,
                title: action.newPostData.current.value,
                completed: false
            }

            this._state.postData.push(newTask);
            this._state.areaText = '';

            this._rerenderEntireTree();
        } else if (action.type === ADD_TASK_TEXT) {
            this._state.areaText = action.areaText.current.value;
            this._rerenderEntireTree();
        }
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    getTitle() {
        return this._title;
    },
    getState() {
        return this._state;
    },
    taskState: (bar)=> {
        return {
          textDecoration: bar ? 'line-through' : 'none'
        }
    },
    editTitle: (e) => {
        // debugger;
        store._title.checkId = e.target.getAttribute('data-id')+''
        // console.log(store._title.checkId)
        store._title.editCheck = (store._title.editCheck == '1') ? '0' : '1' ;
        // if(store._title.editCheck) {
        //         store._title.editCheck = '0'
        // } else {
        //     store._title.editCheck = '1'
        // }
        // if(store._title.editCheck) {
        //     document.querySelector('.TaskText').style.display = 'none';
        //     document.querySelector('.EditSet').style.display = 'flex';
        // } else {
        //     document.querySelector('.TaskText').style.display = 'flex'
        //     document.querySelector('.EditSet').style.display = 'none'
        // }
        store._rerenderEntireTree()
    },
    changeTextState: (id) => {
        setState({
            _state: store._state.map(item => {
                item.title = (item.id === id) ? 
                    document.querySelector('.TextExchange').value :
                    item.title
            })
        });
        store._rerenderEntireTree()
    },
    changeTaskState: (id) => {
        setState({
            _state: store._state.map(item => item.completed = (item.id === id) 
                ? item.completed = !item.completed : item.completed) 
        });
        store._rerenderEntireTree()
    },
    delTask(id) {
        store._state = store._state.filter(el => el.id !== id)
        store._rerenderEntireTree()
    },
    tiping(e) {
        store._title = e.target.value;
        store._rerenderEntireTree()
    },
    submitTask(e) {
        e.preventDefault()
        let btn = document.querySelector('.btn')
        if(btn.value !== '') {
            let newTask = {
                id: store._state[0] ? store._state[store._state.length-1].id+1 : 0,
                title: store._title,
                completed: false
            }
            store._title = '';
            btn.value = '';
            store._state.push(newTask);
            store._rerenderEntireTree();
        }
    },
   
}

export default store;