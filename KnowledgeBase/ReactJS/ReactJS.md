# ReactJS Learning Note

## 1. Virtual DOM & diff function

<img src="/Users/apple/Desktop/KnowledgeBase/ReactJS/images/1_l2JdXv72oRNe6FifhgZG6g.png" alt="1_l2JdXv72oRNe6FifhgZG6g" style="zoom:0%;" />

A browser render pages by making these Document Object Model (DOM). It's powerful but with one drawback: if we are to make change on just ONE node, browser will re-render the whole thing.

Therefore ReactJS introduces **Virtual DOM**, which only changes the part that is different on every update. Note that Virtual DOM is essentially a JS object.

React uses **diff** function to compare difference of 2 V-DOMs. There are 3 types of diff function:

- **tree diff**: Compare new & old DOM tree level by level
- **component diff**: Compare component, if types are the same, no update needed. Otherwise, replace with new component
- **element diff**: Compare element. If types are the same, go deeper and compare more element.



## 2. Installation

With npm and node.js installed, you'll need a project scaffold similar to Vue-Cli. In React it's called create-react-app:

```
sudo npm install -g create-react-app
```

Once its finished, you can create a new project by

```
create-react-app <project name>
```

Once its finished, navigate into the project directory. As per usual, we can ignore node_modules. 

Note: You probably want to delete node_modules directory when copying project, while adding it into .gitignore. It's too big to move, and others can re-install all dependencies simply by

```
npm install
```

and npm while automatically download whatever is in package.json.



## 3. Project Structure

The project code entry point is **index.js** under **src**. Index file should look like:

```react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Note that App from './App' is you first react "component", App.js should contain something like:

```react
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
```

Notice how similar React is to Flutter. This buffed HTML that we've seen before in Django and Vue is called **JSX** in React; it is where our story begins...



## 4. Basic Syntax

Now of course you can create DOM in index.js

```react
import React from 'react';
import ReactDOM from 'react-dom';

const h1 = React.createElement("h1", null, "Welcome to React");
const div = React.createElement("div", null, h1);

ReactDOM.render(div, document.getElementById('root'))
```

But you obviously want to use JSX instead. With Django and Vue in mind already, we'll quickly go over some basic usage. Note that we'll be referring to App.js.

### 4.1 Variables

```react
import './App.css';

function App() {
  var a = 100;
  var flag = true;
  const names = ["eddy", "linda", "jack", "george"]
  const parr = [
    <p key={1}>1p</p>,
    <p key={2}>2p</p>,
    <p key={3}>3p</p>,
    <p key={4}>4p</p>,
  ]

  return (
    <div>
      <h1>Hello, Bitch</h1>
      {a * 2}<br />
      {flag ? "It is true" : "it is false"}
      {/* what a comment look like in JSX */}
      <hr />
      <ul>
        {names.map((item, index) => <li>{index} : {item}</li>)}
      </ul>
      {parr}
    </div>
  );
}

export default App;
```

Note: if you'd like to use multiple <div> in ReactDom.render() under evantual root <div>, cover you JSX in <Fragment>



### 4.2 Style

In App.css, let's say we have

```css
.demo {
	width: 200px;
	height: 200px;
	background-color: orange;
	border: 2px solid red;
	border-radius: 10px
}
```

To add style to my elements, we can do

```react
import './App.css'

function App() {
  return (
    <div>
      <div style={{ "border": "1px solid red", "textAlign": "center" }}>
        123123123
      </div>
      <div className="demo">
        eee
      </div>
    </div>
  );
}
```

**Notice** we use **className** in place for just "class". There's quite a lot of these replacement in JSX. Another one would be, in <label>, instead of "for", we use **htmlFor**



## 5. Component 

<img src="/Users/apple/Desktop/KnowledgeBase/ReactJS/images/5-1.png" alt="5-1" style="zoom:50%;" />

We split parts into components as you already know. We typically dedicate one JS file for one component, and put them under component directory in src. A few "must" for each JS component file are

- Must import React from 'react'
- Must have initial letter must be capital for class name (Sidebar, App, Profile, etc.)
- Constructor must contain return
- Must contain "export default <component name>"so other JS file can import this component
- Constructor must start with super()

You can either create a component using class or function. A component created with class is a **stateful component** (widget lol) and can have a state described in 5.2, whereas one created with a function cannot and is called a **stateless component**. 

As you know from Flutter, component render function runs again every time state is changed, therefore stateless component runs faster then stateful component. That being said, we **CAN** optimize this by designing the component lifecycle or use constant variable.



### 5.1 Props

Note I'm combining three files, Index.js, Item.js and App.js, into one.

```react
import './App.css';
import React from 'react'
// import Item from './components/Item.js';

const CommentData = [
  { id: 1, user: "Eddy", content: "It's supernatural! Haven't heard Katy Perry" },
  { id: 2, user: "Lily", content: "I went to this concert that's like really cool" },
  { id: 3, user: "Alysha", content: "This is the part of me" },
  { id: 4, user: "Jack", content: "I'm not paying for your tuition money for UC Irvine" }
]

ReactDOM.render(
  <React.StrictMode>
    <App comments={CommentData} />
  </React.StrictMode>,
  document.getElementById('root')
);

class App extends React.Component {
  render() {
    return (
      <div className="main-section">
        <input type="text" placeholder="Please enter content"></input>
        <button>submit</button>
        {this.props.comments.map(
          function(item, index) {
            return (<Item key={item.id} comment={item}></Item>)
          }
        )}
      </div>
    );
  }
}

function Item(props) {
	return (
		<div>
			{props.comment.user} : {props.comment.content}
		</div>
	);
}

export default App;
```

Note that data passed through props are **read only**.



### 5.2 State & Set State

The **MOST** important feature in React ! When you're using function components, you can only use props w/o State: Only classes have states. It is essentially VueX.

```react
import './App.css';
import React from 'react'
import Item from './components/Item.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [
        { id: 1, user: "Eddy", content: "It's supernatural!" },
        { id: 2, user: "Lily", content: "I went to this concert that's like really cool" },
        { id: 3, user: "Alysha", content: "This is the part of me" },
        { id: 4, user: "Jack", content: "I'm not paying for your tuition money" }
      ]
    }
  }

  render() {
    return (
      <div className="main-section">
        <input type="text" placeholder="Please enter content"></input>
        <button onClick={this.handleClick}>submit</button>
        {this.state.comments.map(
          function (item, index) {
            return <Item key={item.id} comment={item}></Item>
          }
        )}
      </div>
    );
  }

  handleClick() {
    console.log("click");
		console.log(this);
  }
}

export default App;
```

Note that "this" in handleClick is undefined by default. To have it point to current component (App), you have 2 options

- Use bind

  ```react
  <button onClick={this.handleClick.bind(this)}></button>
  ```

- Use a call back funtion

  ```react
  <button onClick={()=>{this.handleClick()}}></button>
  ```

With either one added, you can now access state in handleClick. 

Remember setState() in Flutter? well, it happens here as well. Other than handle click, you also need one more variable to record input data in state, and modify onChange in <input>. WIth everything included, the end result for App component will be

```react
import './App.css';
import React from 'react'
import Item from './components/Item.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [
        { id: 1, user: "Eddy", content: "It's supernatural!" },
        { id: 2, user: "Lily", content: "I went to this concert that's like really cool" },
        { id: 3, user: "Alysha", content: "This is the part of me" },
        { id: 4, user: "Jack", content: "I'm not paying for your tuition money" }
      ],
      input: ""
    }
  }

  render() {
    return (
      <div className="main-section">
        <input
          type="text"
          placeholder="Please enter content"
          onChange={this.handleChange.bind(this)}>
        </input>
        <button
          onClick={this.handleClick.bind(this)}>
          submit
        </button>

        {this.state.comments.map(
          function (item, index) {
            return <Item key={item.id} comment={item}></Item>
          }
        )}
      </div>
    );
  }

  handleChange(e) {
    const value = e.target.value;
    // this.setState({
    //   input: value
    // }, () => {
    //   console.log(this.state.input);
    // })
    this.setState({ input: value })
  }

  handleClick() {
    var newEntry =
    {
      id: this.state.comments.length + 1,
      user: "Eddy",
      content: this.state.input,
    };
    this.setState({
      comments: [...this.state.comments, newEntry]
    });
  }
}

export default App;
```



### 5.3 Ref

You can also use ref in <input> to bind it with handleChange. Add the reference in constructor:

```javascript
this.setTextInputRef = element => {
  this.textInput = element;
}
```

Add in your <input>

```html
<input
       type="text"
       placeholder="Please enter content"
       onChange={this.handleChange.bind(this)}
       ref={this.setTextInputRef}>     <!-- this line here -->
</input>
```

And your handleChange() can now look like

```javascript
handleChange() {
  const value = this.textInput.value;
  this.setState({ input: value });
}
```



### 5.4 Verifying Props Type

With loose syntax, it become useful for data type verification in certain cases.

https://reactjs.org/docs/static-type-checking.html



### 5.5 Render Order

Take a look at this render function in a stateful component 

```react
render() {
	return (
		<div>
			<input 
             type="text" 
             placeholder="Please enter content" 
             onChange={this.handleChange.bind(this)}>
      </input>
			<button onClick={this.handleClick.bind(this)}>submit</button>

			{this.state.comments.map(
				function (item, index) {
					return <Item key={item.id} comment={item}></Item>
				}
			)}
		</div>
	);
}
```

onChange and onClick will change component state. Since render is a recursive function, render for every sub-component <Item> will be called when state changes occur in this component. You can use console log to verify.

Looking at the diagram from beginning of this chapter, you should have some idea on how React (or Flutter) works, and pave way for life cycle discussion.



### 5.6 Sample

See examples/react_01. 

**NOTE**: The following 2 lines are **NOT** the same! See arrow notation for ES6.

```javascript
someData.map(function (item, index) {return ...})
someData.map((item, index) => {return ...})
```



## 6. Life-cycle

Every component has a life-cycle. 

<img src="/Users/apple/Desktop/KnowledgeBase/ReactJS/images/6-1.png" alt="6-1" style="zoom:50%;" />





### 6.1 Basics

1. **Initialization** refer to running the constructor for each component a.k.a initializing it. 
2. After the components are initialized, the render process begin. The process of calling every render function recursively form root component is called **mounting**, where each component is being "mounted" onto the page UI. Note that mount will only happen once for any component.
3. You now have a complete web page as render is completed. There could be **updates** for state or props, and each have its own process for corresponding page changes. 

4. If a component is deleted or closed, **unmounting** takes place for said component.

**Note**: at current version initializing constructor is put at the top of **mounting** process

The methods showed in the diagram are introduced here: https://reactjs.org/docs/react-component.html. A few notes in addition to the official doc

- componentDidMount is usually where our AJAX operation takes place. But you can also do so in constructor.
- In the diagram, if you return false in shouldComponentUpdate(), the update won't take place and you'll negate any changes made.

Look closely into console log of example react_01, notice that every time you change the input value by a character, the child components re-render. This is unnecessary, and could induce performance issue. So we do use the following.



### 6.2 Should Update

```react
shouldComponentUpdate(nextProps, nextState) {
	// console.log("Item " + this.props.index + ": SHOULD UPDATE?")
	if (nextProps.content !== this.props.content) {
		return true
	} else {
		return false;
	}
}
```

You can use a stateless component to have it not update. Or you can use a should update function to have component update only when props changed.

Uncomment this function in Item.js, and you'll see items no longer render on every update.



## 7. Redux

Redux is like VueX in Vue: it stores data in one place. When projects get large with lot's of components, each with individual states, data management can get massy

<img src="/Users/apple/Desktop/KnowledgeBase/ReactJS/images/7-1.png" alt="7-1" style="zoom:80%;" />

Starting here, we'll be referring to example **react_02**. We'll also be using **Ant Development** for quick UI. Notice how we use antd in App component

```react
import React from 'react'
import { Input, List } from 'antd'
import 'antd/dist/antd.css'

const data = [
	'There needs to be fire for them to make water',
	'This is exilerating, oh no',
	'We have nothing better to do really',
	'Are we messing it up?'
]

function App() {
	const { Search } = Input;
	return (
		<div style={{ "width": "500px", "margin": "20px auto" }}>
			<Search
				placeholder="What's on your mind?"
				enterButton="Enter"
				size="large"
				onSearch={value => console.log(value)}
			/>

			<List
				size="large"
				style={{"marginTop":"20px"}}
				bordered
				dataSource={data}
				renderItem={item => (<List.Item>{item}</List.Item>)}
			/>
		</div>
	);
}
        
export default App;
```

With that set, here's how Redux works



#### 7.1 Redux Structure

<img src="/Users/apple/Desktop/KnowledgeBase/ReactJS/images/7-2.png" alt="7-2" style="zoom:90%;" />

- **Store** is the out facing interface, it connects with the components outside and make changes to **reducers**, where data resides.
- React **components subscribe to store** to get latest updated data on every change (Like YouTube viewer sub receiving new video from creators)
- Should components make data changes, they need to send **actions** to store, the store will then make coresponding changes. The subscribed components will then have the updated data.



We add some new file to our src to incorporate Redux

```
src
|- App.js
|- index.js
|- store
	 |- reducer.js
	 |- store.js
```

where reducer

```react
const defaultState = {
	inputValue: "",
	list: []
}

export default (state = defaultState, action) => {
	const newState = JSON.parse(JSON.stringify(state))
	switch (action.type) {
		case "init_list":
			newState.list = action.list
			break;
		case "change_value":
			newState.inputValue = action.value
			break;
		case "add":
			newState.list.push({
				"id": state.length + 1,
				"title": "none",
				"content": action.value
			})
			newState.inputValue = ""
			break;
		default:
			break;
	}
	console.log(newState)
	return newState;
}
```

and store:

```react
import { createStore } from "redux"
import reducer from "./reducer"

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // second line is for browser dev extension
);

export default store
```

and app:

```react
import React from 'react'
import { Input, List } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'
import store from './store/store'

class App extends React.Component {
	constructor() {
		super()

		this.setTextInputRef = element => {
			this.textInput = element;
		}

		// component state no longer a private field
		// all data stored in store
		this.state = store.getState()

		// subscribe store: when store return newState, this func. will run
		store.subscribe(() => {
			console.log("state is changed")
			this.setState(store.getState())
		})
	}

	componentDidMount() {
		axios.get("/api/data.json").then((res) => {
			const data = res.data
			const action = {
				type: "init_list",
				list: data
			}
			store.dispatch(action)
		})
	}

	render() {
		const { Search } = Input
		return (
			<div style={{ "width": "500px", "margin": "20px auto" }}>
				<Search
					placeholder="What's on your mind?"
					enterButton="Enter"
					size="large"
					onSearch={value => this.handleClick(value)}
					ref={this.setTextInputRef}
					// value now set with redux store
					value={this.state.inputValue} 
					// so we need to dispatch action on change
					onChange={this.handleChange.bind(this)}
				/>

				<List
					size="large"
					style={{ "marginTop": "20px" }}
					bordered
					dataSource={this.state.list}
					renderItem={item => (
						<List.Item>
							<p>{item.content}</p>
						</List.Item>
					)}
				/>
			</div>
		);
	}

	handleClick(value) {
		if (value !== "") {
			const action = {
				type:"add",
				value
			}
			store.dispatch(action)
		}
	}

	handleChange(e){
		const value = e.target.value
		const action = {
			type:"change_value",
			value
		}
		store.dispatch(action);
	}
}

export default App;
```

A few things to notice

- Component no longer have individual state, but rather is subscribed to Redux store
- <Search> now binds its value with {this.state.inputValue}, and <List> with {this.state.list} which is the same as before

- handleClick and handleChange no longer updates component state, but rather creates redux action and dispatch them to store.

Notice that action & dispatch can be more concise and fit into one line of code. Hence we use ActionCreater



#### 7.2 Action Creater

Under /src/store, create a new file actionCreators.js, and add any action type that you need, such as:

```react
export const change_input_action = (value) => {
	return {
		type: "change_value",
		value
	}
}
```

You can now change your handleInput into

```react
handleChange(e) {
	store.dispatch(change_input_action(e.target.value))
}
```



#### 7.3 Redux-thunk

Redux-thunk allows you to do things such as AJAX / axios operations in action creator. 

Previously, we use dispatch function to send an action, which is an object created in action creator. Redux-thunk is a middleware that block & modify dispatch. The action is a function instead of object, and the action function can call directly on functions passed to dispatch.

Seems a bit too much. Imma skip this part. You just need to know this is a thing.



#### 7.4 React-redux

With all its import, get state, subscribe, plain redux can be quite complicated. React-redux is the plugin intergrating redux into react to make things a lot easier. It is used in almost **ALL** React project in the industry.

Start by installing with npm

```
npm install -S react-redux
```

Then import it in **index.js**, the root component, so redux can be used throughout the project

```react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import store from "./store/store"

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
```

And you'll add a few things in app.js

```react
import React from 'react'
import { Input, List } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { init_list_action, change_input_action, add_action } from './store/actionCreators'

class App extends React.Component {

	constructor() {
		super()
		this.setTextInputRef = element => {
			this.textInput = element;
		}
	}

	componentDidMount() {
		this.props.getData()
	}

	render() {
		const { Search } = Input
		return (
			<div style={{ "width": "500px", "margin": "20px auto" }}>
				<Search
					placeholder="What's on your mind?"
					enterButton="Enter"
					size="large"
					onSearch={value => this.props.handleClick(value)}
					ref={this.setTextInputRef}
					value={this.props.inputValue}
					onChange={this.props.handleChange.bind(this)}
				/>

				<List
					size="large"
					style={{ "marginTop": "20px" }}
					bordered
					dataSource={this.props.list}
					renderItem={item => (
						<List.Item>
							<p>{item.content}</p>
						</List.Item>
					)}
				/>
			</div>
		);
	}
}


// state here refers to the state in store
// as the name inplies, this function link component props to state in store.
const mapStatetoProps = (state) => {
	return {
		list: state.list,
		inputValue: state.inputValue
	}
}

// dispatch here refers to dispatching in store
// this function link props event to dispatch function
const mapDispatchtoProps = (dispatch) => {
	return {
		getData() {
			axios.get("/api/data.json").then((res) => {
				dispatch(init_list_action(res.data))
			})
		},
		handleChange(e) {
			dispatch(change_input_action(e.target.value))
		},
		handleClick(value) {
			dispatch(add_action(value))
		}
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
```





## 8. Practice Project 简书

**Note**: See complete project in **examples / react_03**. 

To add style to a component like in Vue, we use a plugin called **styled-component**. We do this to limit styles to one component and prevent CSS global contamination & help style management. 

Afer installation, create a new file called style.js, and let's say in it you have

```react
import styled from "styled-components"

export const Demo = styled.div`
	background-color:orange;
`
```

then you can use this style in App.js by

```react
import React from 'react'
import {Demo} from './style'

function App() {
	return (
		<Demo>
			123
		</Demo>
	);
}
export default App;
```

We'll also use **reset.css** to decrease style inconsistency across browsers. You can find it at https://meyerweb.com/eric/tools/css/reset/. We set this as a global style and use it in index.js on top of everything
