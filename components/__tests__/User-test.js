import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import User from '../User';

describe('User Component', () => {
  it(`renders admin correctly when not selected`, () => {
    const isSelected = false;
    const user = {
      name: {
        first: 'Sumit',
        last: 'Arora',
      },
      email: 'sumit@mail.com',
      role: 'Admin',
      picture: {},
    };
    const selectUser = jest.fn();

    const rendered = render(
      <User isSelected={isSelected} user={user} select={selectUser} />,
    );
    rendered.getByText('Sumit Arora');
    rendered.getByText('sumit@mail.com');
    rendered.getByText('Admin');

    const button = rendered.getByText('Select');
    expect(button.props.style.color).toBe('#000000');
    expect(button.parent.props.style.backgroundColor).toBe('#00b4d8');

    fireEvent(button, 'onPress');
    expect(selectUser).toHaveBeenCalledWith(false);
  });

  it(`renders admin correctly when selected`, () => {
    const isSelected = true;
    const user = {
      name: {
        first: 'Sumit',
        last: 'Arora',
      },
      role: 'Admin',
      picture: {},
    };
    const selectUser = jest.fn();

    const rendered = render(
      <User isSelected={isSelected} user={user} select={selectUser} />,
    );
    rendered.getByText('Sumit Arora');
    rendered.getByText('-');
    rendered.getByText('Admin');

    const button = rendered.getByText('Selected');
    expect(button.props.style.color).toBe('#FFFFFF');
    expect(button.parent.props.style.backgroundColor).toBe('#001845');

    fireEvent(button, 'onPress');
    expect(selectUser).toHaveBeenCalledWith(true);
  });
});
