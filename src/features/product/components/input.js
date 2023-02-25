function Input(props) {
  const { name, value, id, labelFor, labelText, onChange } = props;

  return (
    <div className='form-group'>
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        type='text'
        className='form-control'
        value={value}
        id={id}
        onChange={onChange}
        name={name}
        aria-describedby='helpId'
      />
    </div>
  );
}

export default Input;
