import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed.js'
import './App.css';

const App = () => {
  return(
    <ChatEngine
			height='100vh'
			userName='Asel'
			userSecret='123123'
      projectID='20ab33de-b351-49f8-8fe3-4e5d850e8a93'
      renderChatFeed={(ChatAppProps)=> <ChatFeed {...ChatAppProps}/>}
		/>
  )
}

export default App;
