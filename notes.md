### Genera Data Loading with Redux
##### (Notes from Steven Grider)

1. Component gets rendered onto the screen.
2. The class-based component's componentDidMount lifecycle method gets called
3. We call action creator from 'componentDidMount'
4. Action creator runs code to make an API request.
5. API responds with data.
6. Action creator returns an ACTION with the fetched data on the 'payload' property.
  * Dispatch method dispatches action and sends it to all the different reducers inside our app.
7. A specially configured reducer watches for the action and returns the data off the 'payload' that comes in. It *only* pulls off the data from the payload property.
8. Because we generated a new state object, redux/react-redux will cause React app to be re-rendered.

Resources/ref:
jsonplaceholder.typicode.com/posts (dummy/sample API)