import { GoogleLogin } from "@react-oauth/google";  

const client_id = '114621697421-mjpg7jhohl9t5g0bld4rlunr2hko5hud.apps.googleusercontent.com';

function LoginButton() {

    const onSuccess = (res) => {
        console.log('login success Current user: ', res.profileObj)
    }

    const onFailure = (res) => {
        console.log('LOGIN FAILED! res: ', res)
    }

    return (
        <div id-='signInButton'>
            <div id="g_id_onload"
                data-client_id="114621697421-mjpg7jhohl9t5g0bld4rlunr2hko5hud.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-login_uri="http://localhost:3000"
                data-itp_support="true">
            </div>

            <div class="g_id_signin"
                data-type="standard"
                data-shape="rectangular"
                data-theme="outline"
                data-text="signin_with"
                data-size="large"
                data-logo_alignment="left">
            </div>
        </div>
    )

}

export default LoginButton