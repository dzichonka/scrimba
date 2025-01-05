import reactLogo from './assets/react.svg'

function Header() {

  return (
    <header className='header'>
      <h1 className="title">
        <img src={reactLogo} className="logo react" alt="React logo" width="90px" />
        <div>Fun facts for learning React</div>
      </h1>
    </header>
  )
}

export default Header
