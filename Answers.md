1. What problem does the context API help solve?

It helps to solve the problem of prop drilling, which is passing data at multiple levels, which can lead to getting lost in your code

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do?
 Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads that send data from the app to your store, and they are the only source of information for the store, Reducers are functions that change an app's state, they use actions to execute state, Store is the value used to initialize redux, and it stores the state of the app in an immutable object. {Part 2} It is known as that because there is only one place that represents state in the app

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is used throughout the entire app while Component state is usually kept at the component level, it may be better to use component state when you are dealing with a smaller app, and the reverse is true for application state

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an object, using the function allows you to utilize dispatch

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I would say my favorite is redux, because while it is very confusing at first the potential power that redux has gets me excited about doing future work with it

