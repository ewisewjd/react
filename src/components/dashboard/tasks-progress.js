import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';

export const TasksProgress = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            hold
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            
          </Typography>
        </Grid>
        <Grid item>
         
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        
      </Box>
    </CardContent>
  </Card>
);
