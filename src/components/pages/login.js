'use strict'

import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class Login extends React.Component{

  render(){
    return(
      <div class="loginForm  col-md-4">
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
        <div class='zaloguj '>
        <Button  type='submit'>Zaloguj się</Button>
      </div>
      </form>
    </div>
    )
  }
}
export default Login;
