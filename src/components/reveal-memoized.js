import React, { memo } from 'react';
import Fade from 'react-reveal/Fade';

export const MemoFade = memo((props) => (<Fade {...props}>{props.children}</Fade>))
