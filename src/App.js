import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardActions, Button, TextField, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomButton from './CustomButton';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Squang
          </Typography>
          <Button color="inherit">Bookmarks</Button>
          <Button color="inherit">Contact Us</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Box textAlign="center" my={5}>
          <Typography variant="h4">Discover the most useful AI Tools!</Typography>
          <Typography variant="subtitle1">Search hundreds of free tools</Typography>
        </Box>

        <Box display="flex" justifyContent="center" my={3}>
          <TextField
            variant="outlined"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box display="flex" justifyContent="center" my={3}>
          <Button variant="contained" color="primary" style={{ margin: '0 10px' }}>All</Button>
          <Button variant="outlined" color="primary" style={{ margin: '0 10px' }}>School</Button>
          <Button variant="outlined" color="primary" style={{ margin: '0 10px' }}>Lifestyle</Button>
          <Button variant="outlined" color="primary" style={{ margin: '0 10px' }}>Recreation</Button>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <img
                src={`${process.env.PUBLIC_URL}/vercel-ai-sdk-featured-image.jpg.avif`}
                alt="Vercel AI"
                style={{ width: '100%', height: 'auto' }}
              />
              <CardContent>
                <Typography variant="h5" component="h2">Vercel AI</Typography>
                <Typography color="textSecondary">Use GPT-4 (and more) for free!</Typography>
              </CardContent>
              <CardActions>
                <CustomButton url="https://sdk.vercel.ai" text="Open Website" />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
