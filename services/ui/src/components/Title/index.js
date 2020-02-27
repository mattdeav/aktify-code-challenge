import React from 'react';
import Typography from "@material-ui/core/Typography";

const Title = (props) => (
    <Typography
        color="primary"
        component="h2"
        gutterBottom
        variant="h6"
        {...props}
    />
);

export default Title;
