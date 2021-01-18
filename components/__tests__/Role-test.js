import * as React from 'react';
import {render} from '@testing-library/react-native';

import Role from '../Role';
import {COLORS} from '../../constants';

describe('Role Component', () => {
  it(`renders admin correctly`, () => {
    const rendered = render(<Role role={'Admin'} />);
    const tag = rendered.getByText('Admin');
    expect(tag.parent.props.style.backgroundColor).toBe(COLORS.Admin);
  });

  it(`renders admin correctly`, () => {
    const rendered = render(<Role role={'Staff'} />);
    const tag = rendered.getByText('Staff');
    expect(tag.parent.props.style.backgroundColor).toBe(COLORS.Staff);
  });

  it(`renders admin correctly`, () => {
    const rendered = render(<Role role={'Manager'} />);
    const tag = rendered.getByText('Manager');
    expect(tag.parent.props.style.backgroundColor).toBe(COLORS.Manager);
  });

  it(`renders admin correctly`, () => {
    const rendered = render(<Role role={'Operation'} />);
    const tag = rendered.getByText('Operation');
    expect(tag.parent.props.style.backgroundColor).toBe(COLORS.Operation);
  });
});
