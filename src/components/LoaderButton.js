import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './LoaderButton.css';

export default ({
  isLoading,
  disabled = false,
  className = '',
  text,
  loadingText,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <Glyphicon glyph='refresh' className='spinning' />}
    {!isLoading ? text : loadingText}
  </Button>
;
