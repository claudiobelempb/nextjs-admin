import { Component, SyntheticEvent } from 'react'
import axios from 'axios'

import './styles.css'
import { Redirect } from 'react-router'

class RegisterDefault extends Component {
  firstName = ''
  lastName = ''
  email = ''
  password = ''
  passwordConfirm = ''
  state = {
    redirect: false
  }

  submit = async (e: SyntheticEvent) => {
    e.preventDefault()

    await axios.post('http://localhost:8000/api/admin/register', {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirm: this.passwordConfirm
    })

    this.setState({
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/signin'} />
    }
    return (
      <main className='form-signin'>
        <form onSubmit={this.submit}>
          <h1 className='h3 mb-3 fw-normal'>Please register</h1>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              placeholder='First Name'
              onChange={e => (this.firstName = e.target.value)}
            />
            <label>Farst Name</label>
          </div>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              placeholder='Last Name'
              onChange={e => (this.lastName = e.target.value)}
            />
            <label>Last Name</label>
          </div>
          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              placeholder='name@example.com'
              onChange={e => (this.email = e.target.value)}
            />
            <label>Email address</label>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              onChange={e => (this.password = e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              placeholder='Password confirm'
              onChange={e => (this.passwordConfirm = e.target.value)}
            />
            <label>Password confirm</label>
          </div>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>
            Submit
          </button>
        </form>
      </main>
    )
  }
}

export { RegisterDefault }
