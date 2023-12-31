import React from 'react';
import Context from './index';
import { useMemo, useState, useCallback } from 'react';

function Provider({ children }) {
  const [email, setEmail] = useState('')
  const [input, setInput] = useState('input')
  const [validEmail, setValidOrNot] = useState()

  const emailOnChange = useCallback((event) => {
    setEmail(event.target.value)
  }, [])

  const buttonOnClick = useCallback(() => {
    const regex = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
    if (!regex.test(email)) {
      setInput('input-error')
      setValidOrNot(false)
    } else {
      setValidOrNot(true)
    }
  }, [email])

  const result = useMemo(() => ({
    input,
    email,
    validEmail,
    emailOnChange,
    buttonOnClick
  }), [
    input,
    email,
    validEmail,
    emailOnChange,
    buttonOnClick
  ])

  return (
    <Context.Provider value={result}>
      { children }
    </Context.Provider>
  );
}

export default Provider;