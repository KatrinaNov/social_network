import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
        </div>
        <div>
          <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} type={"password"}/>
        </div>
        <div>
          <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>

  );
};

const LoginReduxForm = reduxForm<FormDataType>({
  //a unique name gor the form
  form: 'login'
})(LoginForm)

type MapStateToPropsType = {
  isAuth: boolean
}
type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
  logout: () => void
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth
})

const Login: React.FC<MapStateToPropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: FormDataType) => {
    props.login(formData.login, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Navigate to={'/profile'}/>
  }

  return <div>
    <h1>
      Login
    </h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
};

export default connect(mapStateToProps, {login, logout}) (Login);