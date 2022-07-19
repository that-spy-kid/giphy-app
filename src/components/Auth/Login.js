import React from 'react'

 function Login(props) {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
         } = props;

  return (
    <section className='login-app'>
     <div className='loginContainer-app'>
     { hasAccount ? (<h1 style={{color:"white",marginBottom:"10px", textAlign:"center"}}>Login Now</h1>):
      (<h1 style={{color:"white",marginBottom:"10px", textAlign:"center"}}>Register Now </h1>)
      }
    
        <label>Username</label>
        <input 
        type="text"
        autoFocus
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <p className='errorMsg-text'>{emailError}</p>
        <label>Password</label>
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <p className='errorMsg-text'>{passwordError}</p>
        <div className='btnContainer-app'>
            {hasAccount ? (
                <>
                   <button onClick={handleLogin}>Sign in</button>
                   <p>Don't have an account? 
                   <span onClick={() => setHasAccount(!hasAccount) }>Sign up</span>
                   </p> 
                </>
            ) : (
                <>
                   <button onClick={handleSignup}>Sign up</button>
                   <p>Have an account? 
                   <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                   </p> 
                </>
            )
            }
        </div> 
     </div>
    </section>
  );
};

export default Login;


