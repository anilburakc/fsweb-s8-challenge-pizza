export default function OrderCheck({
    changeFunc,
    isChecked,
    fieldName,
    value,
    label,
}){
    return(
    <label>
        <input 
            name={fieldName}
            type='checkbox'
            onChange={changeFunc}
            checked={isChecked}
            value={value}
        />{' '}
        {label}
    </label>
    );
}