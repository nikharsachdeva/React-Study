function TestComponent() {

    const randomNumber = () => {
        return Math.floor(Math.random() * 999999)
    }
    const myName = 'Nikhar Sachdeva'

    return <div>
        Hey the random number is <h1 style={{ 'color': '#2bcb4d' }}>{randomNumber()}</h1>
        <p>My name is  {myName}</p>
    </div>
}

export default TestComponent