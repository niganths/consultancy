import React from 'react';
import { Link } from 'react-router-dom'; 
export default function Login() {
    return (
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#0a192f', color: '#fff' }}>
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
                <h2 style={{ fontWeight: 300, fontSize: '2rem', marginBottom: '2rem' }}>Sign in to us</h2>
                <form style={{ background: '#f3f3f3', border: '1px solid #ddd', borderRadius: '5px', padding: '2rem',textAlign:'center' }} action="/home">
                    <p style={{ margin: '1rem 0' }}>
                        <label style={{ fontSize: '1.2rem', fontWeight: 'normal', marginRight: '10px' ,color:'black'}}>Username or email address</label>
                        <br />
                        <input style={{ width: '90%', padding: '1rem', borderRadius: '5px', outline: 'none', border: 'none' }} type="text" name="first_name" required />
                    </p>
                    <p style={{ margin: '1rem 0' }}>
                        <label style={{ fontSize: '1.2rem', fontWeight: 'normal', marginRight: '10px' ,color:'black'}}>Password</label>
                        <label style={{ float: 'right', cursor: 'pointer', fontSize: '1.1rem' ,color:'blue'}}>Forget password?</label>
                        <br />
                        <input style={{ width: '90%', padding: '1rem', borderRadius: '5px', outline: 'none', border: 'none' }} type="password" name="password" required />
                    </p>
                    <p>
                        <button style={{ display: 'block', width: '100%', padding: '1rem', border: 'none', background: '#222', color: '#fff', borderRadius: '5px', fontSize: '1.2rem', cursor: 'pointer' }} id="sub_btn" type="submit">Login</button>
                    </p>
                </form>
                <footer style={{ marginTop: '1rem' }}>
                    <p style={{ margin: '0', fontSize: '1.2rem' }}>First time? <Link to="/signup" style={{ color: 'blue' }}>Create an account</Link>.</p>
                    <p style={{ margin: '0', fontSize: '1.2rem' }}><Link to="/" style={{ color: 'blue' }}>Back to Homepage</Link>.</p>
                </footer>
            </div>
        </div>
        
    );
}
