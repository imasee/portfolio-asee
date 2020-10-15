import React, { memo } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Fade';

export const MemoFade = memo((props) => (<Fade {...props}>{props.children}</Fade>))

export const MemoZoom = memo((props) => (<Zoom {...props}>{props.children}</Zoom>))
