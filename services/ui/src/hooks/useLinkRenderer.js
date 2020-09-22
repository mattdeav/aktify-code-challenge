import React, {forwardRef, useMemo} from 'react';
import {Link} from "react-router-dom";

// Returns a memoized link renderer for use in the `component` or `as` prop of components
const useLinkRenderer = (to) => {
    return useMemo(() => forwardRef((
        linkProps,
        ref
    ) => <Link ref={ref} to={to} {...linkProps} />), [to])
};

export default useLinkRenderer;
