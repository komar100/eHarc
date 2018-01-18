'use strict'

import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class Login extends React.Component{

  render(){
    return(
      <div class="loginForm  col-md-5">
      <form  action='/login' method='post'>
        <h2>Zaloguj się</h2>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email"  id="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Hasło</Label>
          <Input type="password" name="password" id="password" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Zapamiętaj mnie
          </Label>
        </FormGroup>
        <Button type='submit'>Zaloguj się</Button>
      </form>
    </div>
    )
  }
}
export default Login;
