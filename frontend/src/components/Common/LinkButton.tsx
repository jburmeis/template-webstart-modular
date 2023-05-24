import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Button, ButtonProps } from '@mui/material';

/**
 * Example how to add a router-link to a suitable MUI component
 */
const LinkButton: FC<ButtonProps & LinkProps> = (props) => <Button component={Link as any} {...props} />
export default LinkButton;
