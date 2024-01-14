import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useChatContext } from './ChatContext';
const ChatComponent = () => {
  const { set, get, deleteKey, isEmpty, toJson, fromJson } = useChatContext();
  const handleSet = () => {
    set('name', 'John Doe');
  };
  const handleGet = () => {
    console.log('Name:', get('name'));
  };
  const handleDelete = () => {
    deleteKey('name');
  };
  const handleJson = () => {
    const jsonString = toJson();
    console.log('JSON:', jsonString);
    fromJson(jsonString);
  };
  return (
    <div>
      <button onClick={handleSet}>Set Name</button>
      <button onClick={handleGet}>Get Name</button>
      <button onClick={handleDelete}>Delete Name</button>
      <button onClick={handleJson}>To/From JSON</button>
      <p>Is context empty: {isEmpty() ? 'Yes' : 'No'}</p>
    </div>
  );
};
export default ChatComponent;
