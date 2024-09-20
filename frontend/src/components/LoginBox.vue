<template>
    <h1>{{ title }}</h1>
    <div class="login-box">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            v-model="username"
            id="username"
            placeholder="Enter your username"
          />
        </div>
  
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            v-model="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
  
        <button type="submit">add to db</button>
        <button style="background-color: gray; opacity: 0.75; color: white; border: none; padding: 10px 20px; border-radius: 5px;">
  Make an account
</button>

      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      submitForm() {
        // add the user and pass to the db
      }
    }
  };
  </script>
  
  <style scoped>
  .login-box {
    border: 1px solid #ccc;
    padding: 20px;
    max-width: 300px;
    margin: 0 auto;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  