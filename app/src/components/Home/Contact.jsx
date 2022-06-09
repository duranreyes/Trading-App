import React from 'react';
import {
    Paper, Grid, Typography, Link
} from '@material-ui/core';
import { useStyles } from '../styles/styles';

const ContactPaper = () => {

    const classes = useStyles();

    return(
        <Paper elevation={4} className={classes.about_paper}>

            <Grid container>

                <Grid item lg={12} md={12} sm={12} xs={12}>

                    <Typography className={classes.about_title}>
                        Contact
                    </Typography>

                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={6}>

                    <Typography className={classes.about_link_typo}>

                        <Link 
                        href="https://linkedin.com"
                        style={{flexGrow:1}} 
                        className={classes.about_link}>
                            LinkedIn
                        </Link>

                    </Typography>

                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={6}>

                    <Typography className={classes.about_link_typo}>

                        <Link 
                        href="https://github.com/duranreyes"
                        style={{flexGrow:1}} 
                        className={classes.about_link}>
                            Github
                        </Link>

                    </Typography>

                </Grid>

            </Grid>

        </Paper>
    )

}

export default ContactPaper;
