import IconButton from '@mui/material/IconButton';

export default function IconButtoncustom(props) {
  const handleClick = (e) => {
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <IconButton 
      aria-label={props.label}
      style={{backgroundColor: props.color ,
         width: "50px", height: "50px" , 
         color : 'whitesmoke' , margin : "5PX"}}
      onClick={handleClick} 
    >
      {props.children}
    </IconButton>
  );
}
