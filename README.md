# How to Start
1. yarn install
2. yarn start

# QUICK NOTE
Reducer must be pure, side-effect, synchronous functions.
It also must return a new state

Where should the side-effects and async function be excuted?
1. inside component, useEffect
2. inside action creators

Synchronous, side effect code (i.e. data transformations)
1. Prefer Reducers
2. **Avoid** action creators or Components

Async code or code with side-effect
1. Prefer Action Creators or Components
2. **Never** use Reducers
