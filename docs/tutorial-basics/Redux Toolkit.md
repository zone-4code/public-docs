Redux Toolkit
Redux Toolkit est un outil qui facilite la configuration et l'utilisation de Redux dans une application. Il fournit une structure de base pour créer un magasin Redux et utilise des fonctionnalités avancées de JavaScript, telles que les propriétés par défaut et les destructurations, pour simplifier la configuration.

La structure de base de Redux Toolkit est la suivante:

- createSlice: permet de créer un réducteur et une action pour une partie spécifique de l'état de l'application.
- configureStore: permet de configurer le magasin global de l'application, en utilisant des options telles que les middlewares et les enhancers.
- useDispatch, useSelector: des hooks pour faciliter l'accès aux données de l'application et la mise à jour de l'état.

En utilisant Redux Toolkit, vous pouvez créer facilement un magasin Redux qui est facile à comprendre et à maintenir. Il vous permet également de vous concentrer sur la logique métier de votre application plutôt que sur la configuration de Redux.

Voici un exemple simple d'utilisation de Redux Toolkit dans un projet React :

- Installation des dépendances 
```javascript 
npm install @reduxjs/toolkit
```

- Créez un fichier d'action dans lequel définir les actions et les réducteurs pour votre état 

```javascript 
// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter;

```
- Dans votre fichier index.js , importez le store et utilisez-le dans la racine de votre application 
```javascript 
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import Counter from './Counter';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);

```

Plus d’informations :   
https://medium.com/edonec/redux-can-be-made-easier-with-redux-toolkit-b1d2d17b90ba  
https://medium.com/nerd-for-tech/introduction-of-redux-toolkit-c96b404ffdd3
