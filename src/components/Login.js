import React, { useState } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import './Login.css';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      alert('Now logged in');
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className='Login'>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId='email' bsSize='large'>
          <FormControl
            autoFocus
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <ControlLabel>Email</ControlLabel>
        </FormGroup>
        <FormGroup controlId='password' bsSize='large'>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
          <ControlLabel>Password</ControlLabel>
        </FormGroup>
        <Button block bsSize='large' disabled={!validateForm()} type='submit'>
          Login
        </Button>
      </form>
    </div>
  );
}
