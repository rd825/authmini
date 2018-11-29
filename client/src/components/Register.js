class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() { 
        return (
            <div>
                <form>
                    <label> htmlFor='username'</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        value={this.state.username}
                    />
    
                    <label> htmlFor='password'</label>
                    <input
                        type='text'
                        id='password'
                        name='password'
                        value={this.state.password}
                    />
                </form>
                {this.state.message ? <h4>{this.state.message}</h4> : undefined}
            </div>
        );
    }
}
 
export default Register;