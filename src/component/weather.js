import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Weather(props){
  return (
    <Box sx={{ maxWidth: "50%",marginTop:"2%" }}>
      <Card variant="outlined">
      <CardContent>
      <Typography variant="h4" color="secondary">
        Result for
      </Typography>
        {props.name}
      <Typography variant="h5" color="primary" component="div">
        Temperature<br/>
      </Typography>
        {props.temperature} &deg;C
      <Typography variant='h5' color="primary" component='div'>
        Chance of Rain
        </Typography>
        {props.rain} %
    </CardContent>
    </Card>
    </Box>
  );
}
