import PropTypes from 'prop-types';
import { useContext } from 'react';
import Context from '../context';

function Button(prop) {
  const obj = useContext(Context);

  return (
    <button type='button' onClick={ obj.buttonOnClick }>
      {prop.name}
    </button>
  )
}

Button.propTypes = {
  prop: PropTypes.string,
}

export default Button