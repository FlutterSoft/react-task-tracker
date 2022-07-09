import Button from './Button'
const Header = (props) => {
    const onClick = () => {
        console.log('you clicked')
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button 
                color='green' 
                text='Hi'
                onClick={onClick}
            />
         </header>
    )
}
    Header.defaultProps = {
        title : 'Task Tracker'
    }
export default Header 