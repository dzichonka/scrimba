import reactLogo from './assets/react.svg'

function Header() {

  return (
    <header>
      <h1>
        <img src={reactLogo} className="logo react" alt="React logo" width="90px" />
        <div>Fun facts for learning React</div>
      </h1>
    </header>
  )
}

export default Header
