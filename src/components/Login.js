import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import LoaderButton from './LoaderButton'
import { Auth } from 'aws-amplify';
import './Login.css';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true); /* snazzy Now Loading UX*/
    try {
      await Auth.signIn(email, password);
        props.userHasAuthenticated(true);
        props.history.push('/') /* redirect Home */
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
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
        <Link to='/login/reset'>Forgot password?
        </Link>
        <LoaderButton
          isLoading={isLoading}
          disabled={!validateForm()}
          text='Login'
          loadingText='Logging in…'
          type='submit'
          bsSize='large'
          block
          >
          Login
        </LoaderButton>
      </form>
    </div>
  );
}
