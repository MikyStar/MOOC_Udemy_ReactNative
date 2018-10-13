# MOOC_Udemy_ReactNative

From the MOOC on Udemy by [Robin LEBHAR](https://www.udemy.com/tuto-react-native-pour-debutants/learn/v4/overview).

# Requirements

- NodeJS
- create-react-native-app

# Creating a project

`NodeJS required`

```sh
create-react-native-app <name of the project>
cd <name of the project>
```

# Visualizing the app

```sh
expo start # For the Expo App

expo start --ios # For the iOS emulator

expo start --android # For the Android Emulator
```

> If you run through the Expo App on your phone :
> On your phone, download the Expo App, then flash the QR code on your computer with it.
> Your phone and computer have to be on the same network so `make sure there's no VPN or stuffs like this`

# The render method

Every React component should have a render method.
This one will automatically be called whenever the component should be display.
It uses JSX to express what should be displayed.

# React Native CSS Tips

By default every views are displayed through the _flexDirection : 'column'_ CSS attribute, this attribute means that they are all going to stack themselves from the top left corner to the bottom left corner.

The other way to display element is with _flexDirection : 'row'_

The attribute _justifyContent_ allows us to work on which is the begining and which is the end given the flew direction. Basically, if the flexDirection is column then if I put _justifyContent : 'flex-end'_ then my view are gonna stack themselves in the same order as in _flexDirection : 'column'_ but this time it's going to be at the bottom left corner expanding to the top. But it's not exactly in a reverse way, it's just like we've put some gravity on everything which collapse views to the bottom.

_justifyContent : 'center'_ align the element in the center of the _flexDirection_

Here are other usefull _justifyContent_ : 'space-between', 'space-around'

The attribute _alignItems_ takes care of the axis that _justifyContent_ is not taking care of

# Usefull libraries

- [React Native Element](https://github.com/react-native-training/react-native-elements) : Lots of components already created and personalizable like lists, badges, forms ...

# States in React classes

In React, only classes have states.

State is immutable, the constructor is the only place where I can directly access and assign it's value, otherwise we have to pass through setter.

`Every time the state of a class is modified, the render function is called again`

# Deploy

The app.json file is describing everything the Expo Store needs to know to deploy your App.

```sh
expo publish # Send your project to the Expo Store

expo build:ios # -> .ipa

expo build:android # -> .apk
```

# Commun problems

## Error: Cannot add a child that doesn't have a YogaNode to a parent without a measure function!

- Make sure that every text you put is surrounded by <Text></Text>
- Remove every spaces between JSX comments and whatever before to not ask to render spaces

# Notes

- I'm using a OnePlus 6 for this tutorial which is an Android smartphone with a Notch ; While not applying CSS to my component, the natural behaviour is that the text of the component for instance is at the top of the screen. `The Notch is covering up some part of the text !`