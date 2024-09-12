const LoginButtonAtom = ({title}) => {

    if(!title) {
        return (<div>Component must have title!</div>)
    }

    return (
      <div>
          <button>{title}</button>
      </div>
    )
  
  };
  
  export default LoginButtonAtom;