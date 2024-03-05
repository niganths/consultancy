import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        
       
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#0a192f', color: '#fff' }}>
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Join us</h2>
                <h5 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Create your personal account</h5>
                <form style={{ background: '#f3f3f3', border: '1px solid #ddd', borderRadius: '5px', padding: '2rem' }} action="/home">
                    <p style={{ margin: '1rem 0' }}>
                        <label style={{ fontSize: '1.2rem', fontWeight: 'normal', marginRight: '10px' ,color:'black' }}>Username</label>
                        <br />
                        <input style={{ width: '90%', padding: '1rem', borderRadius: '5px', outline: 'none', border: 'none' }} type="text" name="first_name" required />
                    </p>
                    <p style={{ margin: '1rem 0' }}>
                        <label style={{ fontSize: '1.2rem', fontWeight: 'normal', marginRight: '10px',color:'black' }}>Email address</label>
                        <br />
                        <input style={{ width: '90%', padding: '1rem', borderRadius: '5px', outline: 'none', border: 'none' }} type="email" name="email" required />
                    </p>
                    <p style={{ margin: '1rem 0' }}>
                        <label style={{ fontSize: '1.2rem', fontWeight: 'normal', marginRight: '10px',color:'black' }}>Password</label>
                        <br />
                        <input style={{ width: '90%', padding: '1rem', borderRadius: '5px', outline: 'none', border: 'none' }} type="password" name="password" required />
                    </p>
                    <p style={{ margin: '1rem 0' }}>
                        <input type="checkbox" name="checkbox" id="checkbox" required />
                        <span style={{ fontSize: '1.2rem' ,color:'black'}}>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>terms of service</a></span>.
                    </p>
                    <p style={{ margin: '1rem 0' }}>
                        <button style={{ display: 'block', width: '100%', padding: '1rem', border: 'none', background: '#222', color: '#fff', borderRadius: '5px', fontSize: '1.2rem', cursor: 'pointer' }} id="sub_btn" type="submit">Register</button>
                    </p>
                </form>
                <footer style={{ marginTop: '1rem' }}>
                    <p style={{ margin: '0', fontSize: '1.2rem' }}><Link to="/" style={{ color: 'blue' }}>Back to Homepage</Link>.</p>
                </footer>
            </div>
        </div>
        
    );
}
