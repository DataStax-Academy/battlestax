# ⚒️ Bind Redux to the User Interface

[![License Apache2](https://img.shields.io/hexpm/l/plug.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Discord](https://img.shields.io/discord/685554030159593522)](https://discord.com/widget?id=685554030159593522&theme=dark)
[![Actions Status](https://github.com/DataStax-Academy/battlestax/workflows/BattleStax%20Tests/badge.svg)](https://github.com/DataStax-Academy/battlestax/actions) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/e265340f-c6a6-4d7b-b24c-438b87c67876/deploy-status)](https://app.netlify.com/sites/battlestax-tutorial/deploys)

🏠 [Table of Contents](./README.md#%EF%B8%8F-table-of-contents) > ⚒️ [Create client State with Redux](./README_step03.md) > ⚒️ **[Bind Redux to the User Interface](#)**

**Objectives**

React is a great way to build a UI, but we need to connect it to our game state.

In this **step 4** we will:
+ Build out the NewGame.js component by connecting it to redux.
+ Build a test to try out the functionality of NewGame.js

**We will cover:**
1. [Setup your environment](#1-setup-your-environment)
2. [Import our Redux artifacts](#2-import-our-redux-artifacts)
3. [Use hooks to connect our compoonent to our Redux Store](#3-use-hooks-to-connect-our-compoonent-to-our-redux-store)
4. [Updating the UI](#4-updating-the-ui)
5. [Running TDD tests](#5-running-tdd-tests)

React is a popular open-source, front end, JavaScript library for building user interfaces or UI components. React makes user interfaces very easy to build by cutting each page into pieces called **components**. A React component is a bit of code that represents a piece of the page. Each component is a JavaScript function that returns a piece of code that represents a piece of a web page.

**Hooks** are a fairly new addition in React. They let you use state and other React features without writing a class. In this step, we will be using a hook to extract current state information from our Redux store.

![hooks](./tutorial/hooks.png)

For a **FULL** code solution to this section **`right-click`** the image below and choose **`Open Link in New Tab`**.

[![Code solution](./tutorial/step-4-code-solution.png?raw=true)](https://github.com/DataStax-Academy/battlestax/pull/8/files)

**_Don't forget to SAVE your changes or enable autosave in GitPod._**

---

## 1. Setup your environment

**✅ Step 1a: Checkout expected branch**

1. Switch to branch `step-4`
* For this part of the tutorial, we will be working in step-4 branch. Switch branches by using the following command in the terminal

📘 **Command to execute**

`git checkout step-4`

## 2. Import our Redux artifacts

In this step we will be working with `/src/pages/lobby/NewGame/NewGame.js`.

![newgame-ide](./tutorial/newgame-ide.png)

In order to bind our React component to our Redux store, we need to import the items that we need:

**✅ Step 2a: Create import statements**

📘 **Code to copy**

```javascript
//let's import what we need
import { useDispatch, useSelector } from "react-redux";
import { selectGame, createGame } from "../../../store/gameSlice";
```

### [🔝](#)

## 3. Use hooks to connect our compoonent to our Redux Store

React Hooks allow you to access things like state, React lifecycle methods, and other goodies in function components that were previously only available in class components. 

`useSelector()` is a React Hook which allows you to extract data from the Redux store state, using a selector function. It takes in selector functio argument (in this case `selectGame`) that returns the part of the state that you want.

`useDispatch()` is a React Hook that allows us to dispatch actions from our React component. Recall the `createGame` function we created in the last step.

**✅ Step 3a: Connect to the store with a hook**

📘 **Code to copy**

```javascript
// let's connect Redux to our Component
const dispatch = useDispatch();
const { id, idError, idLoading } = useSelector(selectGame);
```

### [🔝](#)

## 4. Updating the UI

**✅ Step 4a: Display game id in the UI**

When our game id is set, we want to show it in the UI. If the `id` is present, it will be rendered in the view. If not, `"----"` will show up.

📘 **Code to copy**

```javascript
{/* let's display the game id */}
{id || "----"}
```

**✅ Step 4b: Enable create game button**

We also need to change our button to create a new game and also make it disabled while a request is taking place. 

📘 **Code to copy**

```javascript
{/* let's make our button create a new game*/}
<Button
  disabled={idLoading}
  onClick={() => {
    dispatch(createGame());
  }} ...
```

**✅ Step 4c: Show errors in the UI**

Finally, let's show any errors

📘 **Code to copy**

```javascript
{/* let's show an error message if there is one */}
{idError && (
  <Typography color="textSecondary">Error: {idError}</Typography>
)}
```

### [🔝](#)

## 5. Running TDD tests

We are provided with test case `src/pages/Lobby/NewGame/NewGame.test.js`. This test will check to see if our `NewGame` compenent renders properly. The <Provider> is used to make that store available to our component tree.

✔️  _TEST 1_: The `NewGame` component we created needs to beable to render without crashing.

```javascript
test("renders without crashing", () => {
  render(
    <Provider store={store}>
      <NewGame />
    </Provider>
  );
});
```

**✅ Step 5: Test the component**

We can run our test to see if the compoenent renders successfully:
 
📘 **Command to execute**

```bash
npm test src/pages/lobby/NewGame/NewGame.test.js
```

📗 **Expected output**

<img src="./tutorial/new-game-test.png" width="578" height="97">

### [🔝](#)

## 6. Merge back to master

Now that we've updated our code we need to push these changes back to master and kick off an automated deploy in Netlify.

📘 **Commands to execute**

```bash
git add /src/pages/lobby/NewGame/NewGame.js
git commit -m "Merging step4 into master
git push
```

---
🏠 **Back** to [Table of Contents](./README.md#%EF%B8%8F-table-of-contents) or **move** to the next section =>[Extra Resources and certifications](./README_Resources.md)

