import { Link } from 'react-router-dom'
import './css/register.css'

function register(){
    return(
        <div class="wrapper bg-white">
    <div class="h2 text-center">Mini</div>
    <div class="h2 text-center">Project</div>
    <div class="h5 font-weight-bold">Registration</div>
    <div class="text-muted">Enter your registration details</div>
    <form>
        <div class="d-sm-flex align-items-sm-center justify-content-sm-between pt-1">
            <div class="form-group">
                <label class="text-muted mandatory">Name</label>
                <input type="text" required class="form-control" />
            </div>
            <div class="form-group">
                <label class="text-muted mandatory">Email Address</label>
                <input type="email" required class="form-control" />
            </div>
        </div>
        <div class="d-sm-flex align-items-sm-center justify-content-sm-between pt-1">
            <div class="form-group">
                <div>
                    <label class="text-muted mandatory">Gender</label>
                </div>
                <div class="btn-group" data-toggle="buttons">
                    <label class="btn btn-primary form-check-label">
                        <input class="form-check-input" type="radio" checked /> Male
                    </label>

                    <label class="btn btn-primary form-check-label">
                        <input class="form-check-input" type="radio" /> Female
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label class="text-muted">Date of Birth</label>
                <input type="text" class="form-control" />
            </div>
        </div>
        <div class="d-sm-flex align-items-sm-center justify-content-sm-between pt-1">
            <div class="form-group">
                <label class="text-muted mandatory">Phone Number</label>
                <input type="tel" required class="form-control" />
            </div>
            <div class="form-group">
                <label class="text-muted">City</label>
                <input type="text" class="form-control" />
            </div>
        </div>
        <div class="form-group">
            <label class="text-muted mandatory">Password</label>
            <input type="password" required class="form-control" />
        </div>
        <div class="d-flex align-items-center justify-content-sm-end button-section p-2">
            <button class="btn btn-primary mx-4" type="submit">Submit</button>
            <Link className='btn' to='/'>Cancel</Link>
        </div>
    </form>
</div> 
    )
}

export default register;