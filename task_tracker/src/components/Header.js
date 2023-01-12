import Button from "./Button"
const Header = ({onAdd,showAdd}) => {
    return (
    <header className = 'header'>
        <h1>Task Tracker 
            <span className="task_button"> 
            <Button  background_color='black' text_color='white' text={showAdd ? 'Close':'Add'} on_click= {onAdd}/>
            </span>
        </h1>
    </header>
    )
}
export default Header

