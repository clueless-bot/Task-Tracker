const Button = ({text_color,background_color,text,on_click}) => {
  return (
    <button className = 'btn' style = {{backgroundColor:background_color , color:text_color}}onClick = {on_click}>{text}</button> 
  )
}

export default Button
