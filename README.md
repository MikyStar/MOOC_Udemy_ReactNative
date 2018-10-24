# MOOC_Udemy_ReactNative

From the [React Native MOOC](https://www.udemy.com/tuto-react-native-pour-debutants/learn/v4/overview) on Udemy by Robin LEBHAR, but also his [React and Redux MOOC](https://www.udemy.com/react-redux-tutoriel-pour-debutants-en-francais/learn/v4/overview) :
- React-Redux/1-MovieWebApp
- React-Redux/2-UserListRedux
- React-Redux/3-Mortality
- React-Redux/4-Forum
- React-Native/SimpleTaskManager

From the [React Native and Redux MOOC](https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/overview) on Udemy by Stephen Grider :

- React-Native/albums

# React-Redux

## Component lifecycle

### Mounting

1. _constructor()_
2. _render()_
3. _componentDidMount()_

### Updating

1. _componentWillReceiveProps()_
2. _shouldComponentUpdate()_
3. _componentWillUpdate()_
4. _render()_
5. _componentDidUpdate()_

### Unmounting

1. _componentWillUnmount()_

## Redux

### Why Redux ?

Redux is used to manage every states of the application. Therefor, if a child of the child of the child of the chield .... needs a value from the state of his grand grand ... parent, he can have it easily without having to send props from a high level but also the other way around, the child can give value to a mush higher parent component without having to use callbacks of callbacks

### How it works ?

All states of the applications are located in the Store of Redux.

To access those variables of state, we use _reducers_ who are basically getters. All reducers are defined in the Root Reducers by a key-value system : This variable of state in going to be linked to the return of this reducer.

You never directly use a reducer, you pass by a trigger who will call by itself *all* reducers of the app (described in the Root reducers file)

To trigger something on the global attribute state through reducers we will use _action creators_. Whenever an action creator is triggered, all reducers will be called once. To make sure only wanted reducers will do something, we pass an action type value and we switch case on it.

## Routes using React-Router

Every routes created using react-router are faked : They are not real URL taking a specific page, the URL is just a way to make React know which page to render.

## Difference container - component

A container is a component that needs to know changes inside states.

To give a stupid example because it isn't necessarly true : A container is the ListView because it needs to know the element in state that speaks about the elements of the list, it also knows if something is changing the content of the list so it can update it whereas the item of the list is a dumb component that just displays what it has been told to.

If the list in the state is updated, it's not the items that will display something new, it's the ListView that is going to create new items with fixed data, it kind of is the factory that create immutable objects.

## Notes

- Every time a state change, the render function of the component get called. Even though, React is not doing all of the render method again, it just changes what has changed making without changing the rest of what's rendered.
- For usual errors check [this link](https://rallycoding.com/blog/troubleshooting-react-native-startup/).

# ReactNative

## Requirements

- NodeJS
- React-Native-CLI

## Requirements

- NodeJS
- create-react-native-app

## Creating a project

`NodeJS required`

```sh
create-react-native-app <name of the project>
cd <name of the project>

# OR the much more complicated version :

react-native init <name of the project> # This will make you an old style project with iOS and Android code base separated
cd <name of the project>
```

## Visualizing the app

```sh
expo start # For the Expo App

expo start --ios # For the iOS emulator

expo start --android # For the Android Emulator

# OR if the project wa initiated with "react-native init"

react-native run-ios

react-native run-android
```

> If you run through the Expo App on your phone :
> On your phone, download the Expo App, then flash the QR code on your computer with it.
> Your phone and computer have to be on the same network so `make sure there's no VPN or stuffs like this`

## The render method

Every React component should have a render method.

This one will automatically be called whenever the component should be display.

It uses JSX to express what should be displayed.
Every time the state of a component is modifies, then the render method is called again. Which means that if you do two setSates it will call render() twice but if you set all the values of your state in only one call to the setState method it will call render() just once.

## React Native CSS Tips

By default every views are displayed through the _flexDirection : 'column'_ CSS attribute, this attribute means that they are all going to stack themselves from the top left corner to the bottom left corner.

The other way to display element is with _flexDirection : 'row'_

The attribute _justifyContent_ allows us to work on which is the begining and which is the end given the flew direction. Basically, if the flexDirection is column then if I put _justifyContent : 'flex-end'_ then my view are gonna stack themselves in the same order as in _flexDirection : 'column'_ but this time it's going to be at the bottom left corner expanding to the top. But it's not exactly in a reverse way, it's just like we've put some gravity on everything which collapse views to the bottom.

_justifyContent : 'center'_ align the element in the center of the _flexDirection_

Here are other usefull _justifyContent_ : 'space-between', 'space-around'

The attribute _alignItems_ takes care of the axis that _justifyContent_ is not taking care of

## Usefull libraries

- [React Native Element](https://github.com/react-native-training/react-native-elements) : Lots of components already created and personalizable like lists, badges, forms ...

## States in React classes

In React, only classes have states.

State is immutable, the constructor is the only place where I can directly access and assign it's value, otherwise we have to pass through setter.

`Every time the state of a class is modified, the render function is called again`

## Deploy

The app.json file is describing everything the Expo Store needs to know to deploy your App.

```sh
expo publish # Send your project to the Expo Store

expo build:ios # -> .ipa

expo build:android # -> .apk
```

## Commun problems

### Error: Cannot add a child that doesn't have a YogaNode to a parent without a measure function!

- Make sure that every text you put is surrounded by \<Text\>\</Text\>
- Remove every spaces between JSX comments and whatever before to not ask to render spaces

### The error that the package manager is not running

- [Clear the package manager](https://forums.expo.io/t/how-to-clear-the-react-native-packager/1352/8)

### Error connect ECONREFUSED

- Check your smatphone running Expo is on the same WiFi has your computer
- Check neither of your devices are running a VPN

## Notes

- I'm using a OnePlus 6 for this tutorial which is an Android smartphone with a Notch ; While not applying CSS to my component, the natural behaviour is that the text of the component for instance is at the top of the screen. `The Notch is covering up some part of the text !`