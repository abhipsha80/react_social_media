import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
export default function Login() {
    const navigate = useNavigate();
    var navigateToRegister=()=>{
        navigate('/sign-up');       

    }
    return (
        <div>
            <div className={styles.sidenav}>
                <div className={styles.loginmaintext}>
                    <h2>Application<br /> Login Page</h2>
                    <p>Login or register from here to access.</p>
                </div>
            </div>
            <div className={styles.main}>
                <div className="col-md-6 col-sm-12">
                    <div className={styles.loginform}>
                        <form>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" className="form-control" placeholder="User Name" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <button type="submit" className={`btn ${styles['btn-black']}`}>Login</button>
                            <button type="submit" className={`btn ${styles['btn-secondary']}`} onClick={navigateToRegister}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}
