import TextField from '@mui/material/TextField';

export default function InputBasic(props) {
    const handleChange = (e) => {
        if (props.onChange) {
          props.onChange(e);
        }
      };
    return (
        <TextField 
            id={props.id} 
            label={props.label} 
            variant={props.variant} 
            multiline={props.rows > 1} 
            rows={props.rows} 
            defaultValue={props.defaultValue} 
            style={{width: "50%"}} 
            onChange={handleChange} 
        />
    );
}
