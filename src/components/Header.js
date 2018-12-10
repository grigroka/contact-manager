import React from 'react';

export default function Header(props) {
  const { branding } = props;
  return (
    <div>
      <h1>{props.branding}</h1>
    </div>
  );
}
